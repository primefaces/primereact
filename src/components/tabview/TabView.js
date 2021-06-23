import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DomHandler, ObjectUtils, classNames, UniqueComponentId } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';

export class TabPanel extends Component {

    static defaultProps = {
        header: null,
        headerTemplate: null,
        leftIcon: null,
        rightIcon: null,
        disabled: false,
        headerStyle: null,
        headerClassName: null,
        contentStyle: null,
        contentClassName: null
    }

    static propTypes = {
        header: PropTypes.any,
        headerTemplate: PropTypes.any,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        disabled: PropTypes.bool,
        headerStyle: PropTypes.object,
        headerClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        contentClassName: PropTypes.string
    };

}

export class TabView extends Component {

    static defaultProps = {
        id: null,
        activeIndex: 0,
        style: null,
        className: null,
        renderActiveOnly: true,
        onTabChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        renderActiveOnly: PropTypes.bool,
        onTabChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        let state = {
            id: props.id
        };

        if (!this.props.onTabChange) {
            state = {
                ...state,
                activeIndex: props.activeIndex
            };
        }

        this.state = state;
    }

    getActiveIndex() {
        return this.props.onTabChange ? this.props.activeIndex : this.state.activeIndex;
    }

    isSelected(index) {
        return (index === this.getActiveIndex());
    }

    onTabHeaderClick(event, tab, index) {
        if (!tab.props.disabled) {
            if (this.props.onTabChange) {
                this.props.onTabChange({ originalEvent: event, index: index });
            }
            else {
                this.setState({
                    activeIndex: index
                });
            }
        }

        event.preventDefault();
    }

    updateInkBar() {
        const activeIndex = this.getActiveIndex();
        const tabHeader = this[`tab_${activeIndex}`];

        this.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.nav).left + 'px';
    }

    componentDidMount() {
        if (!this.state.id) {
            this.setState({ id: UniqueComponentId() });
        }

        this.updateInkBar();
    }

    componentDidUpdate() {
        this.updateInkBar();
    }

    renderTabHeader(tab, index) {
        const selected = this.isSelected(index);
        const className = classNames('p-unselectable-text', { 'p-tabview-selected p-highlight': selected, 'p-disabled': tab.props.disabled }, tab.props.headerClassName);
        const id = this.state.id + '_header_' + index;
        const ariaControls = this.state.id + '_content_' + index;
        const tabIndex = tab.props.disabled ? null : 0;
        const leftIconElement = tab.props.leftIcon && <i className={tab.props.leftIcon}></i>;
        const titleElement = <span className="p-tabview-title">{tab.props.header}</span>;
        const rightIconElement = tab.props.rightIcon && <i className={tab.props.rightIcon}></i>;

        let content = (
            /* eslint-disable */
            <a role="tab" className="p-tabview-nav-link" onClick={(event) => this.onTabHeaderClick(event, tab, index)} id={id}
                aria-controls={ariaControls} aria-selected={selected} tabIndex={tabIndex}>
                {leftIconElement}
                {titleElement}
                {rightIconElement}
                <Ripple />
            </a>
            /* eslint-enable */
        );

        if (tab.props.headerTemplate) {
            const defaultContentOptions = {
                className: 'p-tabview-nav-link',
                titleClassName: 'p-tabview-title',
                onClick: (event) => this.onTabHeaderClick(event, tab, index),
                leftIconElement,
                titleElement,
                rightIconElement,
                element: content,
                props: this.props,
                index,
                selected,
                ariaControls
            };

            content = ObjectUtils.getJSXElement(tab.props.headerTemplate, defaultContentOptions);
        }

        return (
            <li ref={(el) => this[`tab_${index}`] = el} className={className} style={tab.props.headerStyle} role="presentation">
                {content}
            </li>
        );
    }

    renderTabHeaders() {
        return (
            React.Children.map(this.props.children, (tab, index) => {
                return this.renderTabHeader(tab, index);
            })
        );
    }

    renderNavigator() {
        const headers = this.renderTabHeaders();

        return (
            <ul ref={(el) => this.nav = el} className="p-tabview-nav" role="tablist">
                {headers}
                <li ref={(el) => this.inkbar = el} className="p-tabview-ink-bar"></li>
            </ul>
        );
    }

    renderContent() {
        const contents = React.Children.map(this.props.children, (tab, index) => {
            if (!this.props.renderActiveOnly || this.isSelected(index)) {
                return this.createContent(tab, index);
            }
        })

        return (
            <div className="p-tabview-panels">
                {contents}
            </div>
        );
    }

    createContent(tab, index) {
        const selected = this.isSelected(index);
        const className = classNames(tab.props.contentClassName, 'p-tabview-panel', { 'p-hidden': !selected });
        const id = this.state.id + '_content_' + index;
        const ariaLabelledBy = this.state.id + '_header_' + index;

        return (
            <div id={id} aria-labelledby={ariaLabelledBy} aria-hidden={!selected} className={className}
                style={tab.props.contentStyle} role="tabpanel">
                {!this.props.renderActiveOnly ? tab.props.children : (selected && tab.props.children)}
            </div>
        );
    }

    render() {
        const className = classNames('p-tabview p-component', this.props.className);
        const navigator = this.renderNavigator();
        const content = this.renderContent();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {navigator}
                {content}
            </div>
        );
    }
}
