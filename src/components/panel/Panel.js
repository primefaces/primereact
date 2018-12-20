import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

            return (
                <a href={'#' + ariaControls} className="p-panel-titlebar-icon p-panel-titlebar-toggler" onClick={this.toggle}
                    id={id} aria-controls={ariaControls} aria-expanded={!collapsed} role="tab">
                   <span className={classNames('pi', {'pi-plus': collapsed, 'pi-minus': !collapsed})}></span>
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
                    <span className="p-panel-title">{this.props.header}</span>
                    {toggleIcon}
                </div>
            );
        }
        else {
            return null;
        }
    }
    
    renderContent(collapsed) {
        let className = classNames('p-panel-content-wrapper', {'p-panel-content-wrapper-collapsed': collapsed});

        return (
            <CSSTransition classNames="p-panel-content-wrapper" timeout={{ enter: 400, exit: 400 }} in={!this.isCollapsed()}>
                <div className={className}>
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