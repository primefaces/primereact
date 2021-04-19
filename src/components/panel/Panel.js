import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from '../transition/CSSTransition';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class Panel extends Component {

    static defaultProps = {
        id: null,
        header: null,
        headerTemplate: null,
        toggleable: null,
        style: null,
        className: null,
        collapsed: null,
        expandIcon: 'pi pi-plus',
        collapseIcon: 'pi pi-minus',
        icons: null,
        transitionOptions: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        headerTemplate: PropTypes.any,
        toggleable: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        collapsed: PropTypes.bool,
        expandIcon: PropTypes.string,
        collapseIcon: PropTypes.string,
        icons: PropTypes.any,
        transitionOptions: PropTypes.object,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    };

    constructor(props) {
        super(props);
        let state = {
            id: this.props.id
        };

        if (!this.props.onToggle) {
            state = {
                ...state,
                collapsed: this.props.collapsed
            };
        }

        this.state = state;

        this.toggle = this.toggle.bind(this);
        this.contentRef = React.createRef();
    }

    toggle(event) {
        if (this.props.toggleable) {
            const collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;

            if (collapsed)
                this.expand(event);
            else
                this.collapse(event);

            if (this.props.onToggle) {
                this.props.onToggle({
                    originalEvent: event,
                    value: !collapsed
                });
            }
        }

        event.preventDefault();
    }

    expand(event) {
        if (!this.props.onToggle) {
            this.setState({ collapsed: false });
        }

        if (this.props.onExpand) {
            this.props.onExpand(event);
        }
    }

    collapse(event) {
        if (!this.props.onToggle) {
            this.setState({ collapsed: true });
        }

        if (this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }

    isCollapsed() {
        return this.props.toggleable ? (this.props.onToggle ? this.props.collapsed : this.state.collapsed) : false;
    }

    componentDidMount() {
        if (!this.state.id) {
            this.setState({ id: UniqueComponentId() });
        }
    }

    renderToggleIcon(collapsed) {
        if (this.props.toggleable) {
            const id = this.state.id + '_label';
            const ariaControls = this.state.id + '_content';
            const toggleIcon = collapsed ? this.props.expandIcon : this.props.collapseIcon;

            return (
                <button className="p-panel-header-icon p-panel-toggler p-link" onClick={this.toggle}
                    id={id} aria-controls={ariaControls} aria-expanded={!collapsed} role="tab">
                    <span className={toggleIcon}></span>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderHeader(collapsed) {
        const header = ObjectUtils.getJSXElement(this.props.header, this.props);
        const icons = ObjectUtils.getJSXElement(this.props.icons, this.props);
        const togglerElement = this.renderToggleIcon(collapsed);
        const titleElement = <span className="p-panel-title" id={this.state.id + '_header'}>{header}</span>;
        const iconsElement = (
            <div className="p-panel-icons">
                {icons}
                {togglerElement}
            </div>
        );
        const content = (
            <div className="p-panel-header">
                {titleElement}
                {iconsElement}
            </div>
        );

        if (this.props.headerTemplate) {
            const defaultContentOptions = {
                className: 'p-panel-header',
                titleClassName: 'p-panel-title',
                iconsClassName: 'p-panel-icons',
                togglerClassName: 'p-panel-header-icon p-panel-toggler p-link',
                togglerIconClassName: collapsed ? this.props.expandIcon : this.props.collapseIcon,
                onTogglerClick: this.toggle,
                titleElement,
                iconsElement,
                togglerElement,
                element: content,
                props: this.props,
                collapsed
            };

            return ObjectUtils.getJSXElement(this.props.headerTemplate, defaultContentOptions);
        }
        else if (this.props.header || this.props.toggleable) {
            return content;
        }

        return null;
    }

    renderContent(collapsed) {
        const id = this.state.id + '_content';

        return (
            <CSSTransition nodeRef={this.contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={!collapsed} unmountOnExit options={this.props.transitionOptions}>
                <div ref={this.contentRef} className="p-toggleable-content" aria-hidden={collapsed} role="region" id={id} aria-labelledby={this.state.id + '_header'}>
                    <div className="p-panel-content">
                        {this.props.children}
                    </div>
                </div>
            </CSSTransition>
        );
    }

    render() {
        const className = classNames('p-panel p-component', { 'p-panel-toggleable': this.props.toggleable }, this.props.className);
        const collapsed = this.isCollapsed();
        const header = this.renderHeader(collapsed);
        const content = this.renderContent(collapsed);

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {header}
                {content}
            </div>
        );
    }
}
