import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DomHandler from '../utils/DomHandler';
import UniqueComponentId from '../utils/UniqueComponentId';

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
    
    componentDidUpdate() {
        const collapsed = this.props.onToggle ? this.props.collapsed : this.state.collapsed;

        if (this.props.toggleable && !collapsed && this.expanding) {
            DomHandler.addClass(this.contentWrapper, 'ui-panel-content-wrapper-expanding');
            
            setTimeout(() => {
                DomHandler.removeClass(this.contentWrapper, 'ui-panel-content-wrapper-expanding');
                this.expanding = false;
            }, 500);
        }
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
        
        this.expanding = true;

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
    
    renderToggleIcon(collapsed) {
        if (this.props.toggleable) {
            const id = this.id + '_label';
            const ariaControls = this.id + '_content';

            return (
                <a href={'#' + ariaControls} className="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" onClick={this.toggle}
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
                <div className="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">
                    <span className="ui-panel-title">{this.props.header}</span>
                    {toggleIcon}
                </div>
            );
        }
        else {
            return null;
        }
    }
    
    renderContent(collapsed) {
        const className = classNames('ui-panel-content-wrapper', {
                                    'ui-panel-content-wrapper-collapsed': collapsed, 
                                    'ui-panel-content-wrapper-expanded': !collapsed
                                });
        const id = this.id + '_content';
        const ariaLabelledBy = this.id + '_label';
        
        return (
            <div ref={(el) => this.contentWrapper = el} className={className} id={id} aria-labelledby={ariaLabelledBy} aria-hidden={collapsed}>
                <div className="ui-panel-content ui-widget-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
    
    render() {
        const className = classNames('ui-panel ui-widget ui-widget-content ui-corner-all', this.props.className);
        const collapsed = this.props.toggleable ? (this.props.onToggle ? this.props.collapsed : this.state.collapsed) : false;
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