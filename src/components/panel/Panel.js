import React, {Component} from 'react';
import classNames from 'classnames';

export class Panel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {collapsed: this.props.collapsed};
        this.toggle = this.toggle.bind(this);
    }

     toggle(e) {
        if(this.props.toggleable) {
            var collapsed = this.state.collapsed;
            if(collapsed && this.onExpand)
                this.onExpand(e);
            else if(!collapsed && this.onCollapse)
                this.onCollapse(e);

            this.setState({collapsed: !collapsed});
        }
        e.preventDefault();
    }

    render() {
        var toggleIcon = null;
        var styleClass = classNames('ui-panel ui-widget ui-widget-content ui-corner-all', this.props.className);
        
        if(this.props.toggleable) {
            var toggleIcon = classNames('fa fa-fw', {'fa-plus': this.state.collapsed, 'fa-minus': !this.state.collapsed});
            toggleIcon = <a className="ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default" href="#" onClick={this.toggle}>
                            <span className={toggleIcon}></span>
                         </a>;
        }
        
        return (
            <div className={styleClass} style={this.props.style}>
                {this.props.header != null && <div className="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">
                    <span className="ui-panel-title">{this.props.header}</span>
                    {toggleIcon}
                </div>}
                <div className="ui-panel-content-wrapper" style={{display: this.state.collapsed ? 'none' : 'block'}}>
                    <div className="ui-panel-content ui-widget-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Panel.defaultProps = {
    header: null,
    toggleable: false,
    style: null,
    className: null,
    collapsed: false,
    onExpand: null,
    onCollapse: null
}

Panel.propTypes = {
    header: React.PropTypes.any,
    toggleable: React.PropTypes.bool,
    style: React.PropTypes.object,
    collapsed: React.PropTypes.bool,
    onExpand: React.PropTypes.func,
    onCollapse: React.PropTypes.func
};