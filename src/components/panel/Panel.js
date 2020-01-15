import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';
import { CSSTransition } from 'react-transition-group';

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
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func,
        onToggle: PropTypes.func
    };

    constructor(props) {
        super(props);
        if (!this.props.onToggle) {
            this.state = {
                collapsed: this.props.collapsed
            };
        }

        this.toggle = this.toggle.bind(this);
        this.id = this.props.id || UniqueComponentId();
    }

    toggle(event) {
        if (this.props.toggleable) {
            const collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;

            if(collapsed)
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
            this.setState({collapsed: false});
        }

        if (this.props.onExpand) {
            this.props.onExpand(event);
        }
    }

    collapse(event) {
        if (!this.props.onToggle) {
            this.setState({collapsed: true});
        }

        if (this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }

    isCollapsed() {
        return this.props.toggleable ? (this.props.onToggle ? this.props.collapsed : this.state.collapsed): false;
    }

    renderToggleIcon(collapsed) {
        if (this.props.toggleable) {
            const id = this.id + '_label';
            const ariaControls = this.id + '_content';
            const toggleIcon = collapsed ? this.props.expandIcon : this.props.collapseIcon;

            return (
                <a href={'#' + ariaControls} className="p-panel-titlebar-icon p-panel-titlebar-toggler" onClick={this.toggle}
                    id={id} aria-controls={ariaControls} aria-expanded={!collapsed} role="tab">
                   <span className={toggleIcon}></span>
                </a>
            );
        }
        else {
            return null;
        }
    }

    renderHeader(collapsed) {
        if (this.props.header || this.props.toggleable) {
            const toggleIcon = this.renderToggleIcon(collapsed);

            return (
                <div className="p-panel-titlebar">
                    <span className="p-panel-title" aria-label={this.id + '_header'}>{this.props.header}</span>
                    {toggleIcon}
                </div>
            );
        }
        else {
            return null;
        }
    }

    renderContent(collapsed) {
        const className = classNames('p-toggleable-content', {'p-toggleable-content-collapsed': collapsed});
        const id = this.id + '_content';

        return (
            <CSSTransition classNames="p-toggleable-content" timeout={{enter: 400, exit: 250}} in={!this.isCollapsed()}>
                <div className={className} aria-hidden={collapsed} role="region" id={id} aria-labelledby={this.id + '_header'}>
                    <div className="p-panel-content">
                        {this.props.children}
                    </div>
                </div>
            </CSSTransition>
        );
    }

    render() {
        const className = classNames('p-panel p-component', this.props.className);
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
