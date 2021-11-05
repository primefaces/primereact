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
        onTabChange: null,
        scrollable: false
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        renderActiveOnly: PropTypes.bool,
        onTabChange: PropTypes.func,
        scrollable: PropTypes.bool
    };

    constructor(props) {
        super(props);
        let state = {
            id: props.id,
            backwardIsDisabled: true,
            forwardIsDisabled: false
        };

        if (!this.props.onTabChange) {
            state = {
                ...state,
                activeIndex: props.activeIndex
            };
        }

        this.state = state;
        this.navBackward = this.navBackward.bind(this);
        this.navForward = this.navForward.bind(this);
        this.onScroll = this.onScroll.bind(this);

    }

    getActiveIndex() {
        return this.props.onTabChange ? this.props.activeIndex : this.state.activeIndex;
    }

    isSelected(index) {
        return (index === this.getActiveIndex());
    }

    shouldTabRender(tab) {
        return tab && tab.type === TabPanel;
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

        this.updateScrollBar(index);

        event.preventDefault();
    }

    updateInkBar() {
        const activeIndex = this.getActiveIndex();
        const tabHeader = this[`tab_${activeIndex}`];

        this.inkbar.style.width = DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.style.left = DomHandler.getOffset(tabHeader).left - DomHandler.getOffset(this.nav).left + 'px';
    }

    updateScrollBar(index) {
        let tabHeader = this[`tab_${index}`];
        if (tabHeader) {
            tabHeader.scrollIntoView({ block: 'nearest' });
        }
    }

    updateButtonState() {
        const content = this.content;
        const { scrollLeft, scrollWidth } = content;
        const width = DomHandler.getWidth(content);

        this.setState({ backwardIsDisabled: scrollLeft === 0 });
        this.setState({ forwardIsDisabled: scrollLeft === scrollWidth - width });
    }

    onScroll(event) {
        this.props.scrollable && this.updateButtonState();

        event.preventDefault();
    }

    getVisibleButtonWidths() {
        const prevBtn = this.prevBtn;
        const nextBtn = this.nextBtn;

        return [prevBtn, nextBtn].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
    }

    navBackward() {
        const content = this.content;
        const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
        const pos = content.scrollLeft - width;
        content.scrollLeft = pos <= 0 ? 0 : pos;
    }

    navForward() {
        const content = this.content;
        const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
        const pos = content.scrollLeft + width;
        const lastPos = content.scrollWidth - width;

        content.scrollLeft = pos >= lastPos ? lastPos : pos;
    }

    componentDidMount() {
        if (!this.state.id) {
            this.setState({ id: UniqueComponentId() });
        }

        this.updateInkBar();
    }

    componentDidUpdate(prevProps) {
        this.updateInkBar();

        if (prevProps.activeIndex !== this.props.activeIndex){
            this.updateScrollBar(this.props.activeIndex);
        }
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
                if (this.shouldTabRender(tab)) {
                    return this.renderTabHeader(tab, index);
                }
            })
        );
    }

    renderNavigator() {
        const headers = this.renderTabHeaders();

        return (
            <div ref={(el) => this.content = el} id={this.props.id} className="p-tabview-nav-content" style={this.props.style} onScroll={this.onScroll}>
                <ul ref={(el) => this.nav = el} className="p-tabview-nav" role="tablist">
                    {headers}
                    <li ref={(el) => this.inkbar = el} className="p-tabview-ink-bar"></li>
                </ul>
            </div>
        );
    }

    renderContent() {
        const contents = React.Children.map(this.props.children, (tab, index) => {
            if (this.shouldTabRender(tab) && (!this.props.renderActiveOnly || this.isSelected(index))) {
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

    renderPrevButton() {
        if (this.props.scrollable && !this.state.backwardIsDisabled) {
            return (
                <button ref={(el) => this.prevBtn = el} className="p-tabview-nav-prev p-tabview-nav-btn p-link" onClick={this.navBackward} type="button">
                    <span className="pi pi-chevron-left"></span>
                    <Ripple />
                </button>
            )
        }
        return null;

    }

    renderNextButton() {
        if (this.props.scrollable && !this.state.forwardIsDisabled) {
            return (
                <button ref={(el) => this.nextBtn = el} className="p-tabview-nav-next p-tabview-nav-btn p-link" onClick={this.navForward} type="button">
                    <span className="pi pi-chevron-right"></span>
                    <Ripple />
                </button>
            )
        }

    }

    render() {
        const className = classNames('p-tabview p-component', this.props.className, { 'p-tabview-scrollable': this.props.scrollable });
        const navigator = this.renderNavigator();
        const content = this.renderContent();
        const prevButton = this.renderPrevButton();
        const nextButton = this.renderNextButton();

        return (
            <div className={className}>
                <div className="p-tabview-nav-container">
                    {prevButton}
                    {navigator}
                    {nextButton}
                </div>
                {content}
            </div >
        );
    }
}
