import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';

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
        header: PropTypes.any,
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
        onTabClose: null,
        onTabChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        multiple: PropTypes.bool,
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
        const tabHeaderClass = classNames(tab.props.headerClassName, 'p-accordion-header', {'p-highlight': selected, 'p-disabled': tab.props.disabled});
        const id = this.id + '_header_' + index;
        const ariaControls = this.id + '_content_' + index;
        const tabIndex = tab.props.disabled ? -1 : null;

        return (
            <div className={tabHeaderClass} style={tab.props.headerStyle}>
                <a href={'#' + ariaControls} id={id} aria-controls={ariaControls} role="tab" aria-expanded={selected} onClick={(event) => this.onTabHeaderClick(event, tab, index)} tabIndex={tabIndex}>
                    <span className={classNames('p-accordion-toggle-icon pi pi-fw', { 'pi-caret-right': !selected, 'pi-caret-down': selected })}></span>
                    <span className="p-accordion-header-text">{tab.props.header}</span>
                </a>
            </div>
        );
    }

    renderTabContent(tab, selected, index) {
        const className = classNames(tab.props.contentClassName, 'p-toggleable-content', {'p-toggleable-content-collapsed': !selected});
        const id = this.id + '_content_' + index;

        return (
            <CSSTransition classNames="p-toggleable-content" timeout={{enter: 400, exit: 250}} in={selected}>
                <div id={id} className={className} style={tab.props.contentStyle} role="region" aria-labelledby={this.id + '_header_' +index}>
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

        return (
            <div key={tab.props.header} className="p-accordion-tab">
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
        const className = classNames('p-accordion p-component p-reset', this.props.className);
        const tabs = this.renderTabs();

        return (
            <div ref={(el) => this.container = el} id={this.id} className={className} style={this.props.style}>
                {tabs}
            </div>
        );
    }
}
