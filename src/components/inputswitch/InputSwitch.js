import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';
import { tip } from '../tooltip/Tooltip';

export class InputSwitch extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        style: null,
        className: null,
        inputId: null,
        name: null,
        checked: false,
        trueValue: true,
        falseValue: false,
        disabled: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onChange: null,
        onFocus: null,
        onBlur: null
    }

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        inputId: PropTypes.string,
        name: PropTypes.string,
        checked: PropTypes.any,
        trueValue: PropTypes.any,
        falseValue: PropTypes.any,
        disabled: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            focused: false
        };

        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        this.inputRef = createRef(this.props.inputRef);
    }

    onClick(event) {
        if (this.props.disabled) {
            return;
        }

        this.toggle(event);
        this.inputRef.current.focus();
    }

    toggle(event) {
        if (this.props.onChange) {
            let value = this.isChecked() ? this.props.falseValue : this.props.trueValue;

            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value,
                }
            });
        }
    }

    onFocus(event) {
        let currentEvent = event;
        this.setState({ focused: true }, () => {
            if (this.props.onFocus) {
                this.props.onFocus(currentEvent);
            }
        });
    }

    onBlur(event) {
        let currentEvent = event;
        this.setState({ focused: false }, () => {
            if (this.props.onBlur) {
                this.props.onBlur(currentEvent);
            }
        });
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onClick(event);
        }
    }

    updateInputRef() {
        let ref = this.props.inputRef;

        if (ref) {
            if (typeof ref === 'function') {
                ref(this.inputRef.current);
            }
            else {
                ref.current = this.inputRef.current;
            }
        }
    }

    componentDidMount() {
        this.updateInputRef();

        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
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

    isChecked() {
        return this.props.checked === this.props.trueValue;
    }

    render() {
        const className = classNames('p-inputswitch p-component', {
            'p-inputswitch-checked': this.isChecked(),
            'p-disabled': this.props.disabled,
            'p-inputswitch-focus': this.state.focused
        }, this.props.className);

        let inputSwitchProps = ObjectUtils.findDiffKeys(this.props, InputSwitch.defaultProps);

        return (
            <div ref={el => this.container = el} id={this.props.id} className={className} style={this.props.style} onClick={this.onClick}
                role="checkbox" aria-checked={this.isChecked()} {...inputSwitchProps}>
                <div className="p-hidden-accessible">
                    <input ref={this.inputRef} type="checkbox" id={this.props.inputId} name={this.props.name} checked={this.isChecked()} onChange={this.toggle}
                        onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} disabled={this.props.disabled}  role="switch" aria-checked={this.isChecked()}
                        aria-labelledby={this.props.ariaLabelledBy}/>
                </div>
                <span className="p-inputswitch-slider"></span>
            </div>
        );
    }

}
