import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Panel extends Component {

    static defaultProps = {
        id: null,
        header: null,
        toggleable: false,
        style: null,
        className: null,
        collapsed: false,
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
    
    componentDidUpdate() {
        setTimeout(() => {
            DomHandler.removeClass(this.contentWrapper, 'ui-panel-content-wrapper-expanding');
        }, 500);
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.collapsed !== this.state.collapsed) {
            this.setState({
                collapsed: nextProps.collapsed
            });
        }
    }

    toggle(e) {
        if(this.props.toggleable) {
            let collapsed = this.state.collapsed;
            
            if(collapsed && this.onExpand)
                this.onExpand(e);
            else if(!collapsed && this.onCollapse)
                this.onCollapse(e);

            this.setState({collapsed: !collapsed});
        }
        
        e.preventDefault();
    }
    
    renderToggleIcon() {
        if(this.props.toggleable) {
            return (
                <a className="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" href="#" onClick={this.toggle}>
                   <span className={classNames('fa fa-fw', {'fa-plus': this.state.collapsed, 'fa-minus': !this.state.collapsed})}></span>
                </a>
            );
        }
        else {
            return null;
        }
    }
    
    renderHeader() {
        let toggleIcon = this.renderToggleIcon();
        
        return (
            <div className="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">
                <span className="ui-panel-title">{this.props.header}</span>
                {toggleIcon}
            </div>
        );
    }
    
    renderContent() {
        let className = classNames('ui-panel-content-wrapper', {'ui-panel-content-wrapper-collapsed': this.state.collapsed, 'ui-panel-content-wrapper-expanded ui-panel-content-wrapper-expanding': !this.state.collapsed});
        
        return (
            <div ref={(el) => this.contentWrapper = el} className={className}>
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