import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export class Spinner extends Component {

    constructor(props) {
        super(props);

        if (Math.floor(this.props.step) === 0) {
            this.precision = this.props.step.toString().split(/[,]|[.]/)[1].length;
        }
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
                originalEvent: event,
                value: this.value
            })
        }
    }

    toFixed(value, precision) {
        let power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    }

    onUpButtonMousedown(event, input) {
        if (!this.props.disabled) {
            input.focus();
            this.repeat(null, 1);
            this.updateFilledState();
            event.preventDefault();
        }
    }

    onUpButtonMouseup(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onUpButtonMouseleave(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onDownButtonMousedown(event, input) {
        if (!this.props.disabled) {
            input.focus();
            this.repeat(null, -1);
            this.updateFilledState();
            
            event.preventDefault();
        }
    }

    onDownButtonMouseup(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onDownButtonMouseleave(event) {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onInputKeydown(event) {
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
        let keyPattern = /[0-9\+\-]/;
        if (!keyPattern.test(inputChar) && inputChar !== this.props.decimalSeparator) {
            event.preventDefault();
        }
    }

    onInput(event, inputValue) {
        this.value = this.parseValue(inputValue);
        this.formatValue();
        this.inputEl.value = this.valueAsString;
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: this.value
            })
        }
        this.updateFilledState();
    }

    onBlur() {
        this.focus = false;
    }

    onFocus() {
        this.focus = true;
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

    handleChange(event) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
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

    render() {

        var styleClass = classNames("ui-spinner ui-widget ui-corner-all", this.props.className, {
            'ui-state-disabled': this.props.disabled
        });

        var inputElement = <input ref={(el) => this.inputEl = el} type="text" className="ui-spinner-input ui-inputtext ui-state-default ui-corner-all ui-widget"
                                size={this.props.size} maxLength={this.props.maxlength} disabled={this.props.disabled} readOnly={this.props.readonly}
                                onKeyDown={this.onInputKeydown.bind(this)} onKeyUp={(e) => this.onInput(e, this.inputEl.value)} onKeyPress={this.onInputKeyPress.bind(this)} onBlur={this.onBlur.bind(this)} onChange={this.handleChange.bind(this)} onFocus={this.onFocus.bind(this)} />;

        var upButton = <a className="ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only"
                          onMouseLeave={this.onUpButtonMouseleave.bind(this)} onMouseDown={(e) => this.onUpButtonMousedown(e, this.inputEl)} onMouseUp={this.onUpButtonMouseup.bind(this)}>
                             <span className="fa fa-caret-up"></span>
                       </a>;

        var downButton = <a className="ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only"
                            onMouseLeave={this.onDownButtonMouseleave.bind(this)} onMouseDown={(e) => this.onDownButtonMousedown(e, this.inputEl)} onMouseUp={this.onDownButtonMouseup.bind(this)}>
                               <span className="fa fa-caret-down"></span>
                         </a>;

        return (
            <span className={styleClass} style={this.props.style}>
                {inputElement}
                {upButton}
                {downButton}
            </span>
        );
    }
}

Spinner.defaultProps = {
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

Spinner.propsTypes = {
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    maxlength: PropTypes.number,
    size: PropTypes.number,
    decimalSeparator: PropTypes.string,
    thousandSeparator: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
}