import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class Header extends Component {
    render() {
        return (
            <div className="ui-datascroller-header ui-widget-header ui-corner-top">
                {this.props.children}
            </div>
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <div className="ui-datascroller-footer ui-widget-header ui-corner-bottom">
                {this.props.children}
            </div>
        );
    }
}

export class DataScroller extends Component {
    static defaultProps = {
        value:	null,
        rows: 0,
        inline:	false,
        scrollHeight:null,
        loader:	null,
        buffer: 0.9,
        style:	null,
        styleClass: null,
        onLazyLoad: null,
        itemTemplate: null
    }

    static propsTypes = {
        value: PropTypes.array,
        rows: PropTypes.number,
        inline: PropTypes.bool,
        scrollHeight: PropTypes.any,
        loader: PropTypes.any,
        buffer: PropTypes.number,
        style: PropTypes.string,
        styleClass: PropTypes.string,
        onLazyLoad: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.dataToRender = [];
        this.value = this.props.value;
        this.first = 0;
    }

    handleDataChange() {
        if(this.props.lazy) {
            this.dataToRender = this.value;
            this.setState({ dataToRender: this.dataToRender });
        }
        else {
            this.load();
        }
    }
        
    load() {
        if(this.props.lazy) {
            if(this.props.onLazyLoad) {
                this.props.onLazyLoad(this.createLazyLoadMetadata());
            }
            
            this.first = this.first + this.props.rows;
        }
        else {
            if(this.value) {
                for(var i = this.first; i < (this.first + this.props.rows); i++) {
                    if(i >= this.value.length) {
                        break;
                    }

                    this.dataToRender.push(this.value[i]);
                }
                
                this.first = this.first + this.props.rows;
                this.setState({ dataToRender: this.dataToRender });
            }
        }
    }
     
    reset() {
        this.first = 0;
        this.dataToRender = [];
        this.setState({ dataToRender: this.dataToRender });
        this.load();
    }

    isEmpty() {
        return !this.dataToRender||(this.dataToRender.length === 0);
    }
    
    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.props.rows
        };
    }
    
    bindScrollListener() {
        if(this.props.inline) {
            this.scrollFunction = () => {
                var scrollTop = this.contentElement.scrollTop,
                    scrollHeight = this.contentElement.scrollHeight,
                    viewportHeight = this.contentElement.clientHeight;

                if((scrollTop >= ((scrollHeight * this.props.buffer) - (viewportHeight)))) {
                    this.load();
                }
            }
            
            this.contentElement.addEventListener('scroll', this.scrollFunction);
        }
        else {
            this.scrollFunction = () => {
                var docBody = document.body,
                    docElement = document.documentElement,
                    scrollTop = (window.pageYOffset||document.documentElement.scrollTop),
                    winHeight = docElement.clientHeight,
                    docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);
                            
                if(scrollTop >= ((docHeight * this.props.buffer) - winHeight)) {
                    this.load();
                }
            }

            window.addEventListener('scroll', this.scrollFunction);
        } 
    }

    unbindScrollListener() {
        if (this.scrollFunction) {
            if(this.props.inline) {
                this.contentElement.removeEventListener('scroll', this.scrollFunction);
                this.contentElement = null;
            }
            else if(this.loader && this.isLoaded) {
                this.loader.removeEventListener('click', this.scrollFunction);
            }
            else {
                window.removeEventListener('scroll', this.scrollFunction);
            }   
        }
    }

    componentDidMount() {
        if(this.props.lazy) {
            this.load();
        }

        if(this.props.loader) {
            this.scrollFunction = () => {
                this.load();
            }
            this.loader = ReactDOM.findDOMNode(this.props.loader);
            this.loader.addEventListener('click', this.scrollFunction);
            this.isLoaded = true;
        }
        else {
            this.bindScrollListener();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.loader && !this.isLoaded) {
            this.unbindScrollListener();

            this.scrollFunction = () => {
                this.load();
            }
            this.loader = ReactDOM.findDOMNode(this.props.loader);
            this.loader.addEventListener('click', this.scrollFunction);
            this.isLoaded = true;
        }
    }

    componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;
        if (newValue && this.value !== newValue) {
            this.value = newValue;
            
            this.handleDataChange();
        } 
    }

    componentWillUnmount() {
        if (this.scrollFunction) {
            this.unbindScrollListener();
        }
    }

    render() {
        var styleClass = classNames('ui-datascroller ui-widget', this.props.styleClass, {
            'ui-datascroller-inline': this.props.inline
        });

        var header = React.Children.map(this.props.children, (element, i) => {
                return (element && element.type === Header) && <Header> {element.props.children}</Header>
            }),
            footer = React.Children.map(this.props.children, (element, i) => {
                return (element && element.type === Footer) && <Footer> {element.props.children}</Footer>
            }),
            content = (
                <div ref={(el) => this.contentElement = ReactDOM.findDOMNode(el)} className="ui-datascroller-content ui-widget-content" style={{'maxHeight': this.props.scrollHeight}}>
                    <ul className="ui-datascroller-list">
                    {
                        this.state.dataToRender && this.state.dataToRender.map((val, i) => {
                            var listItemContent = this.props.itemTemplate ? this.props.itemTemplate(val) : val;
                            return (<li key={i + '_datascrollitem'}>
                                       {listItemContent}
                                    </li>);
                            })
                    }
                    </ul>
                </div>
            );

        return (
            <div className={styleClass}>
                {header}
                {content}
                {footer}
            </div>
        );
    }

}