import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import Tooltip from "../tooltip/Tooltip";

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
        tooltip: null,
        tooltipOptions: null,
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
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    toggle(e) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: !this.props.checked,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id :  this.props.id,
                    value: !this.props.checked,
                }
            })
        }
    }

    onFocus(e) {
        DomHandler.addClass(this.container, 'p-focus');
    }

    onBlur(e) {
        DomHandler.removeClass(this.container, 'p-focus');
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.tooltip = new Tooltip({
                target: this.container,
                content: this.props.tooltip,
                options: this.props.tooltipOptions
            });
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
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
           <div ref={(el) => this.container = el} id={this.props.id} className={className} style={this.props.style} onClick={this.toggle}>
                <div className="p-hidden-accessible">
                    <input ref={(el) => this.checkbox = el} type="checkbox" onFocus={this.onFocus} onBlur={this.onBlur} />
                </div>
                {(this.props.onIcon && this.props.offIcon) && <span className={iconStyleClass}></span>}
                <span className="p-button-text p-unselectable-text">{this.props.checked ? this.props.onLabel : this.props.offLabel}</span>
            </div>
        );
    }
}