import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
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
        onCollapse: null
    }

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        toggleable: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        collapsed: PropTypes.bool,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed
        };
        this.toggle = this.toggle.bind(this);
    }

    componentWillMount() {
        this.id = this.props.id || UniqueComponentId();
    }
    
    componentDidUpdate() {
        if(this.props.toggleable && !this.state.collapsed && this.expanding) {
            DomHandler.addClass(this.contentWrapper, 'ui-panel-content-wrapper-expanding');
            
            setTimeout(() => {
                DomHandler.removeClass(this.contentWrapper, 'ui-panel-content-wrapper-expanding');
                this.expanding = false;
            }, 500);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.collapsed != null && nextProps.collapsed !== this.state.collapsed) {
            this.setState({
                collapsed: nextProps.collapsed
            });
        }
    }

    toggle(e) {
        if(this.props.toggleable) {
            if(this.state.collapsed)
                this.expand(e);
            else
                this.collapse(e);
        }
        
        e.preventDefault();
    }
    
    expand(event) {
        this.setState({collapsed: false});
        this.expanding = true;
        if(this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }
    
    collapse(event) {
        this.setState({collapsed: true});
        if(this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }
    
    renderToggleIcon() {
        if(this.props.toggleable) {
            let id = this.id + '_label';
            let ariaControls = this.id + '_content';

            return (
                <a href={'#' + ariaControls} className="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" onClick={this.toggle}
                    id={id} aria-controls={ariaControls} aria-expanded={!this.state.collapsed} role="tab">
                   <span className={classNames('fa fa-fw', {'fa-plus': this.state.collapsed, 'fa-minus': !this.state.collapsed})}></span>
                </a>
            );
        }
        else {
            return null;
        }
    }
    
    renderHeader() {
        if(this.props.header || this.props.toggleable) {
            let toggleIcon = this.renderToggleIcon();
            
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
    
    renderContent() {
        let className = classNames('ui-panel-content-wrapper', {
                                    'ui-panel-content-wrapper-collapsed': (this.state.collapsed && this.props.toggleable), 
                                    'ui-panel-content-wrapper-expanded': (!this.state.collapsed && this.props.toggleable)
                                });
        let id = this.id + '_content';
        let ariaLabelledBy = this.id + '_label';
        
        return (
            <div ref={(el) => this.contentWrapper = el} className={className} id={id} aria-labelledby={ariaLabelledBy} aria-hidden={this.state.collapsed}>
                <div className="ui-panel-content ui-widget-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
    
    render() {
        let className = classNames('ui-panel ui-widget ui-widget-content ui-corner-all', this.props.className);
        let header = this.renderHeader();
        let content = this.renderContent();
        
        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {header}
                {content}
            </div>
        );
    }
}