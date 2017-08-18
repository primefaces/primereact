import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Fieldset extends Component {

    static defaultProps = {
        legend: null,
        className: null,
        style: null,
        toggleable: false,
        collapsed: false,
        onExpand: null,
        onCollapse: null
    }

    static propTypes = {
        legend: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        toggleable: PropTypes.bool,
        collapsed: PropTypes.bool,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func
    };
    
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
        var className = classNames('ui-fieldset ui-widget ui-widget-content ui-corner-all', this.props.className, {'ui-fieldset-toggleable': this.props.toggleable});

        return (
            <fieldset className={className} style={this.props.style}>
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