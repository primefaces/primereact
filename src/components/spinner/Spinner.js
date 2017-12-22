import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import classNames from 'classnames';

export class Spinner extends Component {

    static defaultProps = {
        id: null,
        value: null,
        step: 1,
        min: null,
        max: null,
        disabled: false,
        readonly: false,
        maxlength: null,
        size: null,
        decimalSeparator: '.',
        thousandSeparator: ',',
        style: null,
        className: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.number,
        step: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        maxlength: PropTypes.number,
        size: PropTypes.number,
        decimalSeparator: PropTypes.string,
        thousandSeparator: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    }

    constructor(props) {
        super(props);

        if (Math.floor(this.props.step) === 0) {
            this.precision = this.props.step.toString().split(/[,]|[.]/)[1].length;
        }

        this.onInputKeyUp = this.onInputKeyUp.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onInputKeyPress = this.onInputKeyPress.bind(this);
        this.onChange = this.onChange.bind(this);

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

    repeat(interval, dir) {
        let i = interval || 500;

        this.clearTimer();
        this.timer = setTimeout(() => {
            this.repeat(40, dir);
        }, i);

        this.spin(dir);
    }

    spin(dir) {
        let step = this.props.step * dir;
        let currentValue = this.value || 0;

        if (this.precision)
            this.value = parseFloat(this.toFixed(currentValue + step, this.precision));
        else
            this.value = currentValue + step;

        if (this.props.maxlength !== null && this.value.toString().length > this.props.maxlength) {
            this.value = currentValue;
        }

        if (this.props.min !== null && this.value < this.props.min) {
            this.value = this.props.min;
        }

        if (this.props.max !== null && this.value > this.props.max) {
            this.value = this.props.max;
        }

        this.formatValue();

        this.inputEl.value = this.valueAsString;
        
        if (this.props.onChange) {
            this.props.onChange({
                value: this.value
            })
        }
    }

    toFixed(value, precision) {
        let power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    }

    onUpButtonMouseDown(event) {
        if (!this.props.disabled) {
            this.inputEl.focus();
            this.repeat(null, 1);
            this.updateFilledState();
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
        if (event.which === 32 || event.which === 13) {
            this.repeat(null, 1);
            this.updateFilledState();
        }
    }

    onDownButtonMouseDown(event, focusInput) {
        if (!this.props.disabled) {
            this.inputEl.focus();
            this.repeat(null, -1);
            this.updateFilledState();
            
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
        if(event.which === 32 || event.which === 13) {
            this.repeat(null, -1);
            this.updateFilledState();
        }
    }

    onInputKeyDown(event) {
        if (event.which === 38) {
            this.spin(1);
            event.preventDefault();
        }
        else if (event.which === 40) {
            this.spin(-1);
            event.preventDefault();
        }
    }

    onInputKeyPress(event) {
        let inputChar = String.fromCharCode(event.charCode);
        let keyPattern = /[0-9+-]/;
        if (!keyPattern.test(inputChar) && inputChar !== this.props.decimalSeparator) {
            event.preventDefault();
        }
    }

    onInputKeyUp(event) {
        let inputValue = event.target.value;
        this.value = this.parseValue(inputValue);
        this.formatValue();
        this.inputEl.value = this.valueAsString;

        if (this.props.onChange) {
            this.props.onChange({
                value: this.value
            })
        }

        this.updateFilledState();
    }

    parseValue(val) {
        let value;
        val = val.split(this.props.thousandSeparator).join('');
        if (val.trim() === '') {
            value = this.props.min !== null ? this.props.min : null;
        }
        else {
            if (this.precision) {
                value = parseFloat(val.replace(',', '.'));
            }
            else {
                value = parseInt(val, 10);
            }

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

    formatValue() {
        if (this.value !== null && this.value !== undefined) {
            let textValue = String(this.value).replace('.', this.props.decimalSeparator);
            textValue = textValue.replace(/\B(?=(\d{3})+(?!\d))/g, this.props.thousandSeparator);
            this.valueAsString = textValue;
        }
        else {
            this.valueAsString = '';
        }
    }

    onChange() {
        if (this.props.onChange) {
            this.props.onChange({
                value: this.value
            })
        }
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    updateFilledState() {
        this.filled = (this.value !== undefined && this.value != null);
    }

    componentWillMount() {
        this.value = this.props.value;
        this.formatValue();
        this.updateFilledState();
    }

    componentDidMount() {
        this.inputEl.value = this.valueAsString;
    }

    renderInputElement() {
        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} type="text" className="ui-spinner-input"
                size={this.props.size} maxLength={this.props.maxlength} disabled={this.props.disabled} readOnly={this.props.readonly}
                onKeyDown={this.onInputKeyDown} onKeyUp={this.onInputKeyUp} onKeyPress={this.onInputKeyPress} 
                onBlur={this.onInputBlur} onChange={this.onChange} onFocus={this.onInputFocus} />
        );
    }

    renderUpButton() {
        let className = classNames("ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default", {
            'ui-state-disabled': this.props.disabled
        });

        return (
            <button type="button" className={className} onMouseLeave={this.onUpButtonMouseLeave} onMouseDown={this.onUpButtonMouseDown} onMouseUp={this.onUpButtonMouseUp}
                onKeyDown={this.onUpButtonKeyDown} onKeyUp={this.onUpButtonKeyUp} disabled={this.props.disabled}>
                <span className="fa fa-caret-up"></span>
            </button>
        );
    }

    renderDownButton() {
        let className = classNames("ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default", {
            'ui-state-disabled': this.props.disabled
        });

        return (
            <button type="button" className={className} onMouseLeave={this.onDownButtonMouseLeave} onMouseDown={this.onDownButtonMouseDown} onMouseUp={this.onDownButtonMouseUp} 
                onKeyDown={this.onDownButtonKeyDown} onKeyUp={this.onDownButtonKeyUp} disabled={this.props.disabled}>
                <span className="fa fa-caret-down"></span>
            </button>
        );
    }

    render() {
        let className = classNames("ui-spinner ui-widget ui-corner-all");
        let inputElement = this.renderInputElement();
        let upButton = this.renderUpButton();
        let downButton = this.renderDownButton();

        return (
            <span id={this.props.id} className={className} style={this.props.style}>
                {inputElement}
                {upButton}
                {downButton}
            </span>
        );
    }
}
