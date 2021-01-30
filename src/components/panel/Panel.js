import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { classNames } from '../utils/ClassNames';
import UniqueComponentId from '../utils/UniqueComponentId';
import ObjectUtils from '../utils/ObjectUtils';
import { Ripple } from '../ripple/Ripple';

export class Panel extends Component {

    static defaultProps = {
        id: null,
        header: null,
        toggleable: null,
        style: null,
        className: null,
        collapsed: null,
        expandIcon: 'pi pi-plus',
        collapseIcon: 'pi pi-minus',
        icons: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null
    }

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        toggleable: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        collapsed: PropTypes.bool,
        expandIcon: PropTypes.string,
        collapseIcon: PropTypes.string,
        icons: PropTypes.any,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    };

    constructor(props) {
        super(props);
        if (!this.props.onToggle) {
            this.state = {
                collapsed: this.props.collapsed
            };
        }

        this.toggle = this.toggle.bind(this);
        this.id = this.props.id || UniqueComponentId();
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

    renderToggleIcon(collapsed) {
        if (this.props.toggleable) {
            const id = this.id + '_label';
            const ariaControls = this.id + '_content';
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
        if (this.props.header || this.props.toggleable) {
            const header = ObjectUtils.getJSXElement(this.props.header, this.props);
            const icons = ObjectUtils.getJSXElement(this.props.icons, this.props);
            const toggleIcon = this.renderToggleIcon(collapsed);

            return (
                <div className="p-panel-header">
                    <span className="p-panel-title" aria-label={this.id + '_header'}>{header}</span>
                    <div className="p-panel-icons">
                        {icons}
                        {toggleIcon}
                    </div>
                </div>
            );
        }

        return null;
    }

    renderContent(collapsed) {
        const id = this.id + '_content';

        return (
            <CSSTransition nodeRef={this.contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={!collapsed} unmountOnExit>
                <div ref={this.contentRef} className="p-toggleable-content" aria-hidden={collapsed} role="region" id={id} aria-labelledby={this.id + '_header'}>
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
