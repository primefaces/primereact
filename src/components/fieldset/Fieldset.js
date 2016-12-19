import React, {Component} from 'react';
import classNames from 'classnames';

export class Fieldset extends Component {
    
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
    }

    render() {
        var styleClass = classNames('ui-fieldset ui-widget ui-widget-content ui-corner-all', this.props.className, {'ui-fieldset-toggleable': this.props.toggleable});

        return (
            <fieldset className={styleClass} style={this.props.style}>
                <legend className="ui-fieldset-legend ui-corner-all ui-state-default ui-unselectable-text" onClick={this.toggle}>
                    {this.props.toggleable && <span className={classNames('ui-fieldset-toggler fa fa-fw', {'fa-plus': this.state.collapsed, 'fa-minus': !this.state.collapsed})}></span>}
                    {this.props.legend}
                </legend>
                <div className="ui-fieldset-content-wrapper" style={{display: this.state.collapsed ? 'none' : 'block'}}>
                     <div className="ui-fieldset-content">
                        {this.props.children}
                    </div>
                </div>
            </fieldset>
        );
    }
}

Fieldset.defaultProps = {
    legend: null,
    className: null,
    style: null,
    toggleable: false,
    collapsed: false,
    onExpand: null,
    onCollapsed: null
}

Fieldset.propTypes = {
    legend: React.PropTypes.any,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    toggleable: React.PropTypes.bool,
    collapsed: React.PropTypes.bool,
    onExpand: React.PropTypes.func,
    onCollapse: React.PropTypes.func
};