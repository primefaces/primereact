import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class ToggleButton extends Component {

    static defaultProps = {
        id: null,
        onIcon: null,
        offIcon: null,
        onLabel: 'Yes',
        offLabel: 'No',
        style: null,
        className: null,
        checked: false,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        onIcon: PropTypes.string,
        offIcon: PropTypes.string,
        onLabel: PropTypes.string,
        offLabel: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        checked: PropTypes.bool,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: !this.props.checked
            })
        }
    }

    render() {
        var className = classNames('p-button p-togglebutton p-component', this.props.className, {
            'p-button-text-icon-left': (this.props.onIcon && this.props.offIcon),
            'p-button-text-only': (!this.props.onIcon && !this.props.offIcon) && (this.props.onLabel || this.props.offLabel),
            'p-highlight': this.props.checked,
            'p-disabled': this.props.disabled
        }),
        iconStyleClass = null;

        if(this.props.onIcon || this.props.offIcon) {
            iconStyleClass = classNames('p-c' , this.props.checked ? this.props.onIcon : this.props.offIcon , {
                'p-button-icon-only': (this.props.onIcon && this.props.offIcon) && (!this.props.onLabel || !this.props.offLabel),
                'p-button-icon-left': (this.props.onIcon && this.props.offIcon)
            });
        }

        return (
           <div id={this.props.id} className={className} style={this.props.style} onClick={this.toggle}>
                <div className="p-hidden-accessible">
                    <input type="checkbox"/>
                </div>
                {(this.props.onIcon && this.props.offIcon) && <span className={iconStyleClass}></span>}
                <span className="p-button-text p-unselectable-text">{this.props.checked ? this.props.onLabel : this.props.offLabel}</span>
            </div>
        );
    }
}