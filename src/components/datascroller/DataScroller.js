import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';

export class DataScroller extends Component {

    static defaultProps = {
        id: null,
        value: null,
        rows: 0,
        inline: false,
        scrollHeight: null,
        loader: false,
        buffer: 0.9,
        style: null,
        className: null,
        onLazyLoad: null,
        itemTemplate: null,
        header: null,
        footer: null,
        lazy: false
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        rows: PropTypes.number,
        inline: PropTypes.bool,
        scrollHeight: PropTypes.any,
        loader: PropTypes.bool,
        buffer: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        onLazyLoad: PropTypes.func,
        itemTemplate: PropTypes.func,
        header: PropTypes.any,
        footer: PropTypes.any,
        lazy: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.dataToRender = [];
        this.value = this.props.value;
        this.first = 0;
    }

    handleDataChange() {
        if (this.props.lazy) {
            this.dataToRender = this.value;
            this.setState({ dataToRender: this.dataToRender });
        }
        else {
            this.load();
        }
    }

    load() {
        if (this.props.lazy) {
            if (this.props.onLazyLoad) {
                this.props.onLazyLoad(this.createLazyLoadMetadata());
            }

            this.first = this.first + this.props.rows;
        }
        else {
            if (this.value) {
                for (let i = this.first; i < (this.first + this.props.rows); i++) {
                    if (i >= this.value.length) {
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
        return !this.dataToRender || (this.dataToRender.length === 0);
    }

    createLazyLoadMetadata() {
        return {
            first: this.first,
            rows: this.props.rows
        };
    }

    bindScrollListener() {
        if (this.props.inline) {
            this.scrollFunction = () => {
                let scrollTop = this.contentElement.scrollTop,
                    scrollHeight = this.contentElement.scrollHeight,
                    viewportHeight = this.contentElement.clientHeight;

                if ((scrollTop >= ((scrollHeight * this.props.buffer) - (viewportHeight)))) {
                    this.load();
                }
            }

            this.contentElement.addEventListener('scroll', this.scrollFunction);
        }
        else {
            this.scrollFunction = () => {
                let docBody = document.body,
                    docElement = document.documentElement,
                    scrollTop = (window.pageYOffset || document.documentElement.scrollTop),
                    winHeight = docElement.clientHeight,
                    docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);

                if (scrollTop >= ((docHeight * this.props.buffer) - winHeight)) {
                    this.load();
                }
            }

            window.addEventListener('scroll', this.scrollFunction);
        }
    }

    unbindScrollListener() {
        if (this.scrollFunction) {
            if (this.props.inline) {
                this.contentElement.removeEventListener('scroll', this.scrollFunction);
                this.contentElement = null;
            }
            else if (!this.props.loader) {
                window.removeEventListener('scroll', this.scrollFunction);
            }
        }

        this.scrollFunction = null;
    }

    componentDidMount() {
        this.load();

        if (!this.props.loader) {
            this.bindScrollListener();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let newValue = this.props.value;
        if (newValue && this.value !== newValue) {
            this.value = newValue;

            this.handleDataChange();
        }

        if (prevProps.loader !== this.props.loader && this.props.loader) {
            this.unbindScrollListener();
        }
    }

    componentWillUnmount() {
        if (this.scrollFunction) {
            this.unbindScrollListener();
        }
    }

    render() {
        const className = classNames('p-datascroller p-component', this.props.className, {
            'p-datascroller-inline': this.props.inline
        });

        const header = this.props.header && <div className="p-datascroller-header"> {this.props.header}</div>,
            footer = this.props.footer && <div className="p-datascroller-footer"> {this.props.footer} </div>,
            content = (
                <div ref={(el) => this.contentElement = el} className="p-datascroller-content" style={{ 'maxHeight': this.props.scrollHeight }}>
                    <ul className="p-datascroller-list">
                        {
                            this.state.dataToRender && this.state.dataToRender.map((val, i) => {
                                const listItemContent = this.props.itemTemplate ? this.props.itemTemplate(val) : val;
                                return (
                                    <li key={i + '_datascrollitem'}>
                                        {listItemContent}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            );

        return (
            <div id={this.props.id} className={className}>
                {header}
                {content}
                {footer}
            </div>
        );
    }
}
