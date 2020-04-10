import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import classNames from 'classnames';
import Tooltip from "../tooltip/Tooltip";
import DomHandler from '../utils/DomHandler';

export class InputNumber extends Component {

    static defaultProps = {
        id: null,
        value: null,
        name: null,
        step: 1,
        min: null,
        max: null,
        format: true,
        spinner: false,
        locale: undefined,
        localeMatcher: undefined,
        type: null,
        numberingSystem: undefined,
        unit: undefined,
        unitDisplay: undefined,
        currency: undefined,
        currencyDisplay: undefined,
        useGrouping: true,
        minimumIntegerDigits: undefined,
        minimumFractionDigits: undefined,
        maximumFractionDigits: undefined,
        minimumSignificantDigits: undefined,
        maximumSignificantDigits: undefined,
        notation: undefined,
        disabled: false,
        required: false,
        tabIndex: null,
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
        ariaLabelledBy: null,
        onChange: null,
        onBlur: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        name: PropTypes.string,
        step: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        format: PropTypes.bool,
        spinner: PropTypes.bool,
        locale: PropTypes.string,
        localeMatcher: PropTypes.string,
        type: PropTypes.string,
        numberingSystem: PropTypes.string,
        unit: PropTypes.string,
        unitDisplay: PropTypes.string,
        currency: PropTypes.string,
        currencyDisplay: PropTypes.string,
        useGrouping: PropTypes.bool,
        minimumIntegerDigits: PropTypes.number,
        minimumFractionDigits: PropTypes.number,
        maximumFractionDigits: PropTypes.number,
        minimumSignificantDigits: PropTypes.number,
        maximumSignificantDigits: PropTypes.number,
        notation: PropTypes.string,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        tabIndex: PropTypes.number,
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
        ariaLabelledBy: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.constructParser();

        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputMouseDown = this.onInputMouseDown.bind(this);

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

    getOptions() {
        return {
            localeMatcher: this.props.localeMatcher,
            style: this.props.type,
            numberingSystem: this.props.numberingSystem,
            unit: this.props.unit,
            unitDisplay: this.props.unitDisplay,
            currency: this.props.currency,
            currencyDisplay: this.props.currencyDisplay,
            useGrouping: this.props.useGrouping,
            minimumIntegerDigits: this.props.minimumIntegerDigits,
            minimumFractionDigits: this.props.minimumFractionDigits,
            maximumFractionDigits: this.props.maximumFractionDigits,
            minimumSignificantDigits: this.props.minimumSignificantDigits,
            maximumSignificantDigits: this.props.maximumSignificantDigits,
            notation: this.props.notation
        };
    }

    constructParser() {
        const parts = new Intl.NumberFormat(this.props.locale, this.getOptions()).formatToParts(12345.6);
        const numerals = [...new Intl.NumberFormat(this.props.locale, {useGrouping: false}).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._currency = new RegExp(`[${this.getRegExpPattern(parts, 'currency')}]`);
        this._decimal = new RegExp(`[${this.getRegExpPattern(parts, 'decimal')}]`);
        this._group = new RegExp(`[${this.getRegExpPattern(parts, 'group')}]`, 'g');
        this._literal = new RegExp(`[${this.getRegExpPattern(parts, 'literal')}]`, 'g');
        this._nan = new RegExp(`[${this.getRegExpPattern(parts, 'nan')}]`, 'g');
        this._percentSign = new RegExp(`[${this.getRegExpPattern(parts, 'percentSign')}]`, 'g');
        this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        this._index = d => index.get(d);
    }

    getRegExpPattern(parts, type) {
        let part = parts.find(d => d.type === type);
        return part ? part.value : '';
    }

    formatValue() {
        let value = this.props.value;
        if (value != null) {
            if (this.props.format) {
                let formatter = new Intl.NumberFormat(this.props.locale, this.getOptions());
                return formatter.format(value);
            }

            return value;
        }

        return '';
    }

    parseValue(value) {
        return (value = value.trim().replace(/\s/g, '')
            .replace(this._currency, '')
            .replace(this._group, '')
            .replace(this._literal, '')
            .replace(this._nan, '')
            .replace(this._percentSign, '')
            .replace(this._decimal, '.')
            .replace(this._numeral, this._index)) ? +value : NaN;
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
        /*let step = this.props.step * dir;
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
        }*/
    }

    onUpButtonMouseDown(event) {
        if (!this.props.disabled) {
            this.inputEl.focus();
            this.repeat(event, null, 1);
            event.preventDefault();
        }
    }

    onUpButtonMouseUp() {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onUpButtonMouseLeave() {
        if (!this.props.disabled) {
            this.clearTimer();
        }
    }

    onUpButtonKeyUp() {
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
        if (this.props.spinner) {
            if (event.which === 38) {
                this.spin(event, 1);
                event.preventDefault();
            }
            else if (event.which === 40) {
                this.spin(event, -1);
                event.preventDefault();
            }
        }
    }

    onInputFocus() {
        DomHandler.addClass(this.element, 'p-inputwrapper-focus');
    }

    onInputChange(event) {
        if (this.props.onChange) {
            let {value, selectionStart} = event.target;
            this.cursor = {
                prevText: value.substr(0, selectionStart),
                selectionStart
            }
            const parsedValue =  this.parseValue(value);
            this.props.onChange({
                originalEvent: event,
                value: parsedValue,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value
                }
            });
        }
    }

    onInputBlur(event) {
        DomHandler.removeClass(this.element, 'p-inputwrapper-focus');
        this.cursor = null;

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

    onInputMouseDown() {
        this.cursor = null;
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
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }

        this.setCursorPosition();
    }

    setCursorPosition() {
        if (!!this.cursor) {
            let value = this.inputEl.value || '';
            let {selectionStart, prevText:cursorPrevText} = this.cursor;
            let prevText = value.substr(0, selectionStart);
            while (this.parseValue(prevText) !== this.parseValue(cursorPrevText)) {
                selectionStart++;
                prevText = value.substr(0, selectionStart);
                if (value.length - 1 === selectionStart) {
                    break;
                }
            }

            this.inputEl.setSelectionRange(selectionStart, selectionStart);
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
        const valueToRender = this.formatValue();

        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} id={this.props.inputId} style={this.props.inputStyle}
                       className={className} value={valueToRender} type="text" size={this.props.size} tabIndex={this.props.tabIndex}
                       maxLength={this.props.maxlength} disabled={this.props.disabled} required={this.props.required} pattern={this.props.pattern}
                       placeholder={this.props.placeholder} readOnly={this.props.readonly} name={this.props.name} onKeyDown={this.onInputKeyDown} onMouseDown={this.onInputMouseDown}
                       onBlur={this.onInputBlur} onChange={this.onInputChange} onFocus={this.onInputFocus} aria-valuemin={this.props.min} aria-valuemax={this.props.max}
                       aria-valuenow={valueToRender} aria-labelledby={this.props.ariaLabelledBy}
            />
        );
    }

    renderUpButton() {
        let className = classNames("p-spinner-button p-spinner-button-up p-button p-component", {
            'p-disabled': this.props.disabled
        });

        return (
            <button type="button" className={className} onMouseLeave={this.onUpButtonMouseLeave} onMouseDown={this.onUpButtonMouseDown} onMouseUp={this.onUpButtonMouseUp}
                onKeyDown={this.onUpButtonKeyDown} onKeyUp={this.onUpButtonKeyUp} disabled={this.props.disabled} tabIndex={this.props.tabIndex}>
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
                onKeyDown={this.onDownButtonKeyDown} onKeyUp={this.onDownButtonKeyUp} disabled={this.props.disabled} tabIndex={this.props.tabIndex}>
                <span className="p-spinner-button-icon pi pi-caret-down"></span>
            </button>
        );
    }

    render() {
        let className = classNames("p-spinner p-component", this.props.className, {'p-inputwrapper-filled': this.props.value != null});
        let inputElement = this.renderInputElement();
        let upButton = this.props.spinner && this.renderUpButton();
        let downButton = this.props.spinner && this.renderDownButton();

        return (
            <span ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                {inputElement}
                {upButton}
                {downButton}
            </span>
        );
    }
}
