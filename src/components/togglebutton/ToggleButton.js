import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tip} from "../tooltip/Tooltip";

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
        tabIndex: 0,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null,
        onFocus: null,
        onBlur: null
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
        tabIndex: PropTypes.number,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.toggle = this.toggle.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    toggle(e) {
        if (!this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: !this.props.checked,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: !this.props.checked,
                }
            });

            this.input.focus();
        }
    }

    onInputFocus(event) {
        this.setState({focused: true});

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    onInputBlur(event) {
        this.setState({focused: false});

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.toggle(event);
            event.preventDefault();
        }
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        let className = classNames('p-button p-togglebutton p-component', this.props.className, {
            'p-button-text-icon-left': (this.props.onIcon && this.props.offIcon),
            'p-button-text-only': (!this.props.onIcon && !this.props.offIcon) && (this.props.onLabel || this.props.offLabel),
            'p-highlight': this.props.checked,
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused
        }),
        iconClassName = null;

        if (this.props.onIcon || this.props.offIcon) {
            iconClassName = classNames('p-c' , this.props.checked ? this.props.onIcon : this.props.offIcon , {
                'p-button-icon-only': (this.props.onIcon && this.props.offIcon) && (!this.props.onLabel || !this.props.offLabel),
                'p-button-icon-left': (this.props.onIcon && this.props.offIcon)
            });
        }

        return (
           <div ref={(el) => this.container = el} id={this.props.id} className={className} style={this.props.style} onClick={this.toggle}>
                <div className="p-hidden-accessible">
                    <input ref={(el) => this.input = el} type="checkbox" onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onKeyDown} tabIndex={this.props.tabIndex}
                           role="button" aria-pressed={this.props.checked} aria-labelledby={this.props.ariaLabelledBy} disabled={this.props.disabled} />
                </div>
                {(this.props.onIcon && this.props.offIcon) && <span className={iconClassName}></span>}
                <span className="p-button-text p-unselectable-text">{this.props.checked ? this.props.onLabel : this.props.offLabel}</span>
            </div>
        );
    }
}
