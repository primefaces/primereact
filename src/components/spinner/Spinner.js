import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import classNames from 'classnames';
import Tooltip from "../tooltip/Tooltip";
import DomHandler from '../utils/DomHandler';

export class Spinner extends Component {

    static defaultProps = {
        id: null,
        value: null,
        name: null,
        step: 1,
        min: null,
        max: null,
        disabled: false,
        required: false,
        pattern: null,
        placeholder: null,
        readonly: false,
        maxlength: null,
        size: null,
        style: null,
        className: null,
        inputId: null,
        inputStyle: null,
        inputClassName: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        onBlur: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.number,
        name: PropTypes.string,
        step: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        pattern: PropTypes.string,
        placeholder: PropTypes.string,
        readonly: PropTypes.bool,
        maxlength: PropTypes.number,
        size: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        inputId: PropTypes.string,
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }

    constructor(props) {
        super(props);

        if (Math.floor(this.props.step) === 0) {
            this.precision = this.props.step.toString().split(/[,]|[.]/)[1].length;
        }

        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);

        this.onUpButtonMouseLeave = this.onUpButtonMouseLeave.bind(this);
        this.onUpButtonMouseDown = this.onUpButtonMouseDown.bind(this);
        this.onUpButtonMouseUp = this.onUpButtonMouseUp.bind(this);
        this.onUpButtonKeyDown = this.onUpButtonKeyDown.bind(this);
        this.onUpButtonKeyUp = this.onUpButtonKeyUp.bind(this);

        this.onDownButtonMouseLeave = this.onDownButtonMouseLeave.bind(this);
        this.onDownButtonMouseDown = this.onDownButtonMouseDown.bind(this);
        this.onDownButtonMouseUp = this.onDownButtonMouseUp.bind(this);
        this.onDownButtonKeyDown = this.onDownButtonKeyDown.bind(this);
        this.onDownButtonKeyUp = this.onDownButtonKeyUp.bind(this);
    }

    repeat(event, interval, dir) {
        let i = interval || 500;

        this.clearTimer();
        this.timer = setTimeout(() => {
            this.repeat(event, 40, dir);
        }, i);

        this.spin(event, dir);
    }

    spin(event, dir) {
        let step = this.props.step * dir;
        let currentValue;
        let newValue;

        if (this.props.value)
            currentValue = (typeof this.props.value === 'string') ? this.parseValue(this.props.value) : this.props.value;
        else
            currentValue = 0;

        if (this.precision)
            newValue = parseFloat(this.toFixed(currentValue + step, this.precision));
        else
            newValue = currentValue + step;

        if (this.props.maxlength !== null && this.props.value.toString().length > this.props.maxlength) {
            newValue = currentValue;
        }

        if (this.props.min !== null && newValue < this.props.min) {
            newValue = this.props.min;
        }

        if (this.props.max !== null && newValue > this.props.max) {
            newValue= this.props.max;
        }
        
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: newValue,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: newValue
                }
            });
        }
    }

    toFixed(value, precision) {
        let power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    }

    onUpButtonMouseDown(event) {
        if (!this.props.disabled) {
            this.inputEl.focus();
            this.repeat(event, null, 1);
            event.preventDefault();
        }
    }

    onUpButtonMouseUp(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onUpButtonMouseLeave(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onUpButtonKeyUp(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onUpButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, 1);
        }
    }

    onDownButtonMouseDown(event, focusInput) {
        if (!this.props.disabled) {
            this.inputEl.focus();
            this.repeat(event, null, -1);
            
            event.preventDefault();
        }
    }

    onDownButtonMouseUp(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onDownButtonMouseLeave(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onDownButtonKeyUp(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }
    
    onDownButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
            this.repeat(event, null, -1);
        }
    }

    onInputKeyDown(event) {
        if (event.which === 38) {
            this.spin(event, 1);
            event.preventDefault();
        }
        else if (event.which === 40) {
            this.spin(event, -1);
            event.preventDefault();
        }
    }

    parseValue(val) {
        let value = val.trim();

        if (val === '') {
            value = this.props.min != null ? this.props.min : null;
        }
        else {
            if (this.precision)
                value = parseFloat(val.replace(',', '.'));
            else
                value = parseInt(val, 10);

            if (!isNaN(value)) {
                if (this.props.max !== null && value > this.props.max) {
                    value = this.props.max;
                }

                if (this.props.min !== null && value < this.props.min) {
                    value = this.props.min;
                }
            }
            else {
                value = null;
            }
        }

        return value;
    }

    onInputFocus(event) {
        DomHandler.addClass(this.element, 'p-inputwrapper-focus');
    }

    onInputChange(event) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: event.target.value,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: event.target.value
                }   
            });
        }
    } 

    onInputBlur(event) {
        DomHandler.removeClass(this.element, 'p-inputwrapper-focus');

        if (this.props.onChange) {
            const parsedValue =  this.parseValue(event.target.value);
            this.props.onChange({
                originalEvent: event,
                value: parsedValue,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: parsedValue,
                }
            });
        }

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.tooltip && prevProps.tooltip !== this.props.tooltip) {
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
        this.tooltip = new Tooltip({
            target: this.element,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderInputElement() {
        const className = classNames('p-spinner-input', this.props.inputClassName);
                
        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} id={this.props.inputId} style={this.props.inputStyle} 
              className={className} value={this.props.value == null ? '' : this.props.value} type="text" size={this.props.size} 
              maxLength={this.props.maxlength} disabled={this.props.disabled} required={this.props.required} pattern={this.props.pattern}
              placeholder={this.props.placeholder} readOnly={this.props.readonly} name={this.props.name} onKeyDown={this.onInputKeyDown} 
              onBlur={this.onInputBlur} onChange={this.onInputChange} onFocus={this.onInputFocus} 
            />
        );
    }

    renderUpButton() {
        let className = classNames("p-spinner-button p-spinner-button-up p-button p-component", {
            'p-disabled': this.props.disabled
        });

        return (
            <button type="button" className={className} onMouseLeave={this.onUpButtonMouseLeave} onMouseDown={this.onUpButtonMouseDown} onMouseUp={this.onUpButtonMouseUp}
                onKeyDown={this.onUpButtonKeyDown} onKeyUp={this.onUpButtonKeyUp} disabled={this.props.disabled}>
                <span className="p-spinner-button-icon pi pi-caret-up"></span>
            </button>
        );
    }

    renderDownButton() {
        let className = classNames("p-spinner-button p-spinner-button-down p-button p-component", {
            'p-disabled': this.props.disabled
        });

        return (
            <button type="button" className={className} onMouseLeave={this.onDownButtonMouseLeave} onMouseDown={this.onDownButtonMouseDown} onMouseUp={this.onDownButtonMouseUp} 
                onKeyDown={this.onDownButtonKeyDown} onKeyUp={this.onDownButtonKeyUp} disabled={this.props.disabled}>
                <span className="p-spinner-button-icon pi pi-caret-down"></span>
            </button>
        );
    }

    render() {
        let className = classNames("p-spinner p-component", this.props.className, {'p-inputwrapper-filled': this.props.value != null});
        let inputElement = this.renderInputElement();
        let upButton = this.renderUpButton();
        let downButton = this.renderDownButton();

        return (
            <span ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                {inputElement}
                {upButton}
                {downButton}
            </span>
        );
    }
}
