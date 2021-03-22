import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';
import ObjectUtils from '../utils/ObjectUtils';

export class AccordionTab extends Component {

    static defaultProps = {
        header: null,
        disabled: false,
        headerStyle: null,
        headerClassName: null,
        headerTemplate: null,
        contentStyle: null,
        contentClassName: null
    }

    static propTypes = {
        header: PropTypes.any,
        disabled: PropTypes.bool,
        headerStyle: PropTypes.object,
        headerClassName: PropTypes.string,
        headerTemplate: PropTypes.any,
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
        expandIcon: 'pi pi-chevron-right',
        collapseIcon: 'pi pi-chevron-down',
        onTabOpen: null,
        onTabClose: null,
        onTabChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        multiple: PropTypes.bool,
        expandIcon: PropTypes.string,
        collapseIcon: PropTypes.string,
        onTabOpen: PropTypes.func,
        onTabClose: PropTypes.func,
        onTabChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        if (!this.props.onTabChange) {
            this.state = {
                activeIndex: props.activeIndex
            };
        }

        this.contentWrappers = [];
        this.id = this.props.id || UniqueComponentId();
    }

    onTabHeaderClick(event, tab, index) {
        if (!tab.props.disabled) {
            const selected = this.isSelected(index);
            let newActiveIndex = null;

            if(this.props.multiple) {
                let indexes = (this.props.onTabChange ? this.props.activeIndex : this.state.activeIndex) || [];
                if(selected)
                    indexes = indexes.filter(i => i !== index);
                else
                    indexes = [...indexes, index];

                newActiveIndex = indexes;
            }
            else {
                newActiveIndex = selected ? null : index;
            }

            let callback = selected ? this.props.onTabClose : this.props.onTabOpen;
            if(callback) {
                callback({originalEvent: event, index: index});
            }

            if (this.props.onTabChange) {
                this.props.onTabChange({
                    originalEvent: event,
                    index: newActiveIndex
                })
            }
            else {
                this.setState({
                    activeIndex: newActiveIndex
                });
            }
        }

        event.preventDefault();
    }

    isSelected(index) {
        const activeIndex = this.props.onTabChange ? this.props.activeIndex : this.state.activeIndex;

        return this.props.multiple ? (activeIndex && activeIndex.indexOf(index) >= 0) : activeIndex === index;
    }

    renderTabHeader(tab, selected, index) {
        const tabHeaderClass = classNames('p-accordion-header', {'p-highlight': selected, 'p-disabled': tab.props.disabled}, tab.props.headerClassName);
        const iconClassName = classNames('p-accordion-toggle-icon', { [`${this.props.expandIcon}`]: !selected, [`${this.props.collapseIcon}`]: selected });
        const id = this.id + '_header_' + index;
        const ariaControls = this.id + '_content_' + index;
        const tabIndex = tab.props.disabled ? -1 : null;
        const header = tab.props.headerTemplate ? ObjectUtils.getJSXElement(tab.props.headerTemplate, tab.props) : <span className="p-accordion-header-text">{tab.props.header}</span>;

        return (
            <div className={tabHeaderClass} style={tab.props.headerStyle}>
                <a href={'#' + ariaControls} id={id} className="p-accordion-header-link" aria-controls={ariaControls} role="tab" aria-expanded={selected} onClick={(event) => this.onTabHeaderClick(event, tab, index)} tabIndex={tabIndex}>
                    <span className={iconClassName}></span>
                    {header}
                </a>
            </div>
        );
    }

    renderTabContent(tab, selected, index) {
        const className = classNames('p-toggleable-content', tab.props.contentClassName);
        const id = this.id + '_content_' + index;
        const toggleableContentRef = React.createRef();

        return (
            <CSSTransition nodeRef={toggleableContentRef} classNames="p-toggleable-content" timeout={{enter: 1000, exit: 450}} in={selected} unmountOnExit>
                <div ref={toggleableContentRef} id={id} className={className} style={tab.props.contentStyle} role="region" aria-labelledby={this.id + '_header_' +index}>
                    <div className="p-accordion-content">
                        {tab.props.children}
                    </div>
                </div>
            </CSSTransition>
        );
    }

    renderTab(tab, index) {
        const selected = this.isSelected(index);
        const tabHeader = this.renderTabHeader(tab, selected, index);
        const tabContent = this.renderTabContent(tab, selected, index);
        const tabClassName = classNames('p-accordion-tab', {
            'p-accordion-tab-active': selected
        });

        return (
            <div key={tab.props.header} className={tabClassName}>
                {tabHeader}
                {tabContent}
            </div>
        );
    }

    renderTabs() {
        return (
            React.Children.map(this.props.children, (tab, index) => {
                return this.renderTab(tab, index);
            })
        )
    }

    render() {
        const className = classNames('p-accordion p-component', this.props.className);
        const tabs = this.renderTabs();

        return (
            <div ref={(el) => this.container = el} id={this.id} className={className} style={this.props.style}>
                {tabs}
            </div>
        );
    }
}
