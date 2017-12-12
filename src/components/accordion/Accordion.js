import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import UniqueComponentId from '../utils/UniqueComponentId';

export class AccordionTab extends Component {
    
    static defaultProps = {
        header: null,
        disabled: false,
        headerStyle: null,
        headerClassName: null,
        contentStyle: null,
        contentClassName: null
    }
    
    static propTypes = {
        header: PropTypes.string,
        disabled: PropTypes.bool,
        headerStyle: PropTypes.object,
        headerClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        contentClassName: PropTypes.string
    }
}

export class Accordion extends Component {

    static defaultProps = {
        id: null,
        activeIndex: null,
        className: null,
        style: null,
        multiple: false,
        onTabOpen: null,
        onTabClose: null
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        multiple: PropTypes.bool,
        onTabOpen: PropTypes.func,
        onTabClose: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex
        };
        this.contentWrappers = [];
    }

    componentWillMount() {
        this.id = this.props.id || UniqueComponentId();
    }

    componentDidUpdate() {
        if (this.expandingTabIndex != null && this.expandingTabIndex >= 0) {
            let expandingTabContent = this.container.children[this.expandingTabIndex].children[1];
            DomHandler.addClass(expandingTabContent, 'ui-accordion-content-wrapper-expanding');
            setTimeout(() => {
                DomHandler.removeClass(expandingTabContent, 'ui-accordion-content-wrapper-expanding');
                this.expandingTabIndex = null;
            }, 500);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.activeIndex != null) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }
    
    onTabClick(event, tab, i) {
        if(!tab.props.disabled) {
            let selected = this.isSelected(i);
            this.expandingTabIndex = selected ? null : i;

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

            let callback = selected ? this.props.onTabOpen : this.props.onTabClose;
            if(callback) {
                callback({originalEvent: event, index: i});
            }
        }

        event.preventDefault();
    }

    isSelected(i) {
        return this.props.multiple ? (this.state.activeIndex && this.state.activeIndex.indexOf(i) !== -1) : this.state.activeIndex === i;
    }
    
    renderTabHeader(tab, selected, index) {
        let tabHeaderClass = classNames(tab.props.headerClassName, 'ui-accordion-header ui-state-default ui-corner-all', {'ui-state-active': selected, 'ui-state-disabled': tab.props.disabled});
        let id = this.id + '_header_' + index;
        let ariaControls = this.id + '_content_' + index;

        return (
            <div className={tabHeaderClass} style={tab.props.headerStyle} onClick={(event) => this.onTabClick(event, tab, index)}>
                <a href={'#' + ariaControls} id={id} aria-controls={ariaControls} role="tab" aria-expanded={selected}>
                    <span className={classNames('fa fa-fw', { 'fa-caret-right': !selected, 'fa-caret-down': selected })}></span>
                    <span className="ui-accordion-header-text">{tab.props.header}</span>
                </a>
            </div>
        );
    }
    
    renderTabContent(tab, selected, index) {
        let tabContentWrapperClass = classNames(tab.props.contentClassName, 'ui-accordion-content-wrapper',{
                                    'ui-accordion-content-wrapper-collapsed': !selected,
                                    'ui-accordion-content-wrapper-expanded': selected});
        let id = this.id + '_content_' + index;

        return (
            <div id={id} className={tabContentWrapperClass} style={tab.props.contentStyle}>
                <div className="ui-accordion-content ui-widget-content">
                    {tab.props.children}
                </div>
            </div>
        );
    } 
    
    renderTab(tab, index) {
        let selected = this.isSelected(index);
        let tabHeader = this.renderTabHeader(tab, selected, index);
        let tabContent = this.renderTabContent(tab, selected, index);

        return (
            <div key={tab.props.header} className="ui-accordion-tab">
                {tabHeader}
                {tabContent}
            </div>
        );
    }
         
    render() {
        let tabs = React.Children.map(this.props.children, (tab, index) => {
            return this.renderTab(tab, index);
        });
        let className = classNames('ui-accordion ui-widget ui-helper-reset', this.props.className);

        return (
            <div ref={(el) => this.container = el} id={this.id} className={className} style={this.props.style}>
                {tabs}
            </div>
        );
    }
}