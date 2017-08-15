import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class AccordionTab extends Component {
    
    static defaultProps = {
        header: null
    }
    
    static propTypes = {
        header: PropTypes.string
    }
}

export class Accordion extends Component {

    static defaultProps = {
        activeIndex: null,
        className: null,
        style: null,
        multiple: false,
        onTabOpen: null,
        onTabClose: null
    }

    static propTypes = {
        activeIndex: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        multiple: PropTypes.bool,
        onTabOpen: PropTypes.func,
        onTabClose: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {activeIndex: props.activeIndex};
    }
    
    onTabClick(e, i) {
        var selected = this.isSelected(i);

        if(this.props.multiple) {
            var indexes = this.state.activeIndex||[];
            if(selected)
                indexes = indexes.filter(index => index !== i);
            else
                indexes = [...indexes,i];

            this.setState({activeIndex: indexes});
        }
        else {
            if(selected)
                this.setState({activeIndex: null});
            else
                this.setState({activeIndex: i});
        }

        var callback = selected ? this.props.onTabOpen : this.props.onTabClose;
        if(callback) {
            callback({originalEvent: e, index: i});
        }

        e.preventDefault();
    }

    isSelected(i) {
        return this.props.multiple ? this.state.activeIndex && this.state.activeIndex.includes(i) : this.state.activeIndex === i;
    }
 
    componentWillReceiveProps(nextProps) {
        this.setState({activeIndex: nextProps.activeIndex});
    }
        
    render() {
        var tabs = null;
        
        if(this.props.children)
            tabs = this.props.children.map((tab,i) => {
                let selected = this.isSelected(i);
                let tabHeaderClass = classNames('ui-accordion-header ui-state-default ui-corner-all', {
                    'ui-state-active': selected
                }),
                tabHeader = <div className={tabHeaderClass} key={tab.props.header} onClick={(e) => this.onTabClick(e, i)}>
                    <span className={classNames('fa fa-fw', {'fa-caret-right': !selected, 'fa-caret-down': selected})}></span>
                    <a href="#">{tab.props.header}</a>
                </div>;
                
                let tabContentWrapperClass = classNames('ui-accordion-content-wrapper', {
                    'ui-accordion-content-wrapper-overflown': !selected
                }), 
                tabContent = <div className={tabContentWrapperClass} style={{maxHeight: selected ? '4000px' : '0px', transitionTimingFunction:'cubic-bezier(0.86, 0, 0.07, 1)',transitionDuration:'400ms'}}>
                    <div className="ui-accordion-content ui-widget-content">
                        {tab.props.children}
                    </div>
                </div>;

                return (
                    <div key={tab.props.header} className="ui-accordion-tab">
                        {tabHeader}
                        {tabContent}
                    </div>
                );
            })
        
        return (
            <div className={classNames('ui-accordion ui-widget ui-helper-reset', this.props.className)} style={this.props.style}>
                {tabs}
            </div>
        );
    }
}