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
        showButtons: false,
        buttonLayout: 'stacked',
        incrementButtonClassName: null,
        decrementButtonClassName: null,
        incrementButtonIcon: 'pi pi-caret-up',
        decrementButtonIcon: 'pi pi-caret-down',
        locale: undefined,
        localeMatcher: undefined,
        type: 'decimal',
        unit: undefined,
        unitDisplay: undefined,
        currency: undefined,
        currencyDisplay: undefined,
        useGrouping: true,
        minFractionDigits: undefined,
        maxFractionDigits: undefined,
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
        showButtons: PropTypes.bool,
        buttonLayout: PropTypes.string,
        incrementButtonClassName: PropTypes.string,
        decrementButtonClassName: PropTypes.string,
        locale: PropTypes.string,
        localeMatcher: PropTypes.string,
        type: PropTypes.string,
        unit: PropTypes.string,
        unitDisplay: PropTypes.string,
        currency: PropTypes.string,
        currencyDisplay: PropTypes.string,
        useGrouping: PropTypes.bool,
        minFractionDigits: PropTypes.number,
        maxFractionDigits: PropTypes.number,
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
        this.onInputKeyPress = this.onInputKeyPress.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
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
            unit: this.props.unit,
            unitDisplay: this.props.unitDisplay,
            currency: this.props.currency,
            currencyDisplay: this.props.currencyDisplay,
            useGrouping: this.props.useGrouping,
            minimumFractionDigits: this.props.minFractionDigits,
            maximumFractionDigits: this.props.maxFractionDigits,
            notation: this.props.notation
        };
    }

    constructParser() {
        this.numberFormat = new Intl.NumberFormat(this.props.locale, this.getOptions());
        const parts = this.numberFormat.formatToParts(-12345.6);
        const numerals = [...new Intl.NumberFormat(this.props.locale, {useGrouping: false}).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._currency = new RegExp(`[${this.getRegExpPattern(parts, 'currency')}]`, 'g');
        this._decimal = new RegExp(`[${this.getRegExpPattern(parts, 'decimal')}]`);
        this._group = new RegExp(`[${this.getRegExpPattern(parts, 'group')}]`, 'g');
        this._literal = new RegExp(`[${this.getRegExpPattern(parts, 'literal')}]`, 'g');
        this._percentSign = new RegExp(`[${this.getRegExpPattern(parts, 'percentSign')}]`, 'g');
        this._minusSign = new RegExp(`[${this.getRegExpPattern(parts, 'minusSign')}]`, 'g');
        this._unit = new RegExp(`[${this.getRegExpPattern(parts, 'unit')}]`, 'g');
        this._numeral = new RegExp(`[${numerals.join('')}]`, 'g');
        this._index = d => index.get(d);
    }

    getRegExpPattern(parts, type) {
        let part = parts.find(d => d.type === type);
        return part ? part.value : '';
    }

    formatValue(value) {
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
        let filteredValue = value.trim()
                            .replace(/\s/g, '')
                            .replace(this._currency, '')
                            .replace(this._group, '')
                            .replace(this._literal, '')
                            .replace(this._percentSign, '')
                            .replace(this._unit, '')
                            .replace(this._minusSign, '-')
                            .replace(this._decimal, '.')
                            .replace(this._numeral, this._index);
            
        return filteredValue ? +filteredValue : null;
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
        let currentValue = this.props.value || 0;
        let newValue = currentValue + step;

        if (this.props.min !== null && newValue < this.props.min) {
            newValue = this.props.min;
        }

        if (this.props.max !== null && newValue > this.props.max) {
            newValue= this.props.max;
        }

        this.updateModel(event, newValue);
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
        let selectionStart = event.target.selectionStart;
        let inputValue = event.target.value;

        switch (event.which) {
            case 38:
                this.spin(event, 1);
                event.preventDefault();
            break;

            case 40:
                this.spin(event, -1);
                event.preventDefault();
            break;

            //left
            case 37:
                let prevChar = inputValue.charAt(selectionStart - 1);
                if (!this.isNumeralChar(prevChar)) {
                    event.preventDefault();
                }
            break;

            //right
            case 39:
                let currentChar = inputValue.charAt(selectionStart);
                if (!this.isNumeralChar(currentChar)) {
                    event.preventDefault();
                }
            break;

            //backspace
            case 8:
                let removeCharIndex = selectionStart - 1;
                let deleteChar = inputValue.charAt(removeCharIndex);

                if (this.isNumeralChar(deleteChar)) {
                    if (this._group.test(deleteChar)) {
                        this._group.lastIndex = 0;
                        removeCharIndex = selectionStart - 2;
                    }

                    let newValue = this.parseValue(inputValue.slice(0, removeCharIndex) + inputValue.slice(removeCharIndex + 1));
                    this.inputEl.value = this.formatValue(newValue);
                    this.updateModel(event, newValue);
                    event.preventDefault();
                }
                else {
                    event.preventDefault();
                }
            break;
        }
    }

    onInputKeyPress(event) {
        event.preventDefault();
        let selectionStart = event.target.selectionStart;
        let inputValue = event.target.value.trim();
        let code = event.which || event.keyCode;
        let char = String.fromCharCode(code);
        let maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;

        if (!event.shiftKey && (48 <= code && code <= 57)) {
            let newValueStr;
            let decimalCharIndex = inputValue.search(this._decimal);

            if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                let fractionDigitsLength = selectionStart - (decimalCharIndex + 1);
                if (fractionDigitsLength < maxFractionDigits) {
                    newValueStr = inputValue.slice(0, selectionStart) + char + inputValue.slice(selectionStart + 1);
                }
            }
            else {
                newValueStr = inputValue.slice(0, selectionStart) + char + inputValue.slice(selectionStart);
            }

            if (newValueStr) {
                let newValue = this.parseValue(newValueStr);
                this.inputEl.value = this.formatValue(newValue);
                this.updateModel(event, newValue);
            }
        }

        this._decimal.lastIndex = 0;
    }

    initCursor(event) {
        let selectionStart = event.target.selectionStart;
        let inputValue = event.target.value;
        let valueLength = inputValue.length;
        let index = null;

        let char = inputValue.charAt(selectionStart);
        if (this.isNumeralChar(char)) {
            return;
        }

        //left
        let i = selectionStart - 1;
        while (i >= 0) {
            char = inputValue.charAt(i);
            if (this.isNumeralChar(char)) {
                index = i;
                break;
            }
            else {
                i--;
            }
        }

        if (index !== null) {
            event.target.setSelectionRange(index + 1, index + 1);
        }
        else {
            i = selectionStart + 1;
            while (i < valueLength) {
                char = inputValue.charAt(i);
                if (this.isNumeralChar(char)) {
                    index = i;
                    break;
                }
                else {
                    i++;
                }
            }

            if (index !== null) {
                event.target.setSelectionRange(index, index);
            }
        }
    }

    onInputClick(event) {
        this.initCursor(event);
    }

    isNumeralChar(char) {
        if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
            this.resetRegex();
            return true;
        }
        else {
            return false;
        }
    }

    resetRegex() {
        this._numeral.lastIndex =  0;
        this._decimal.lastIndex =  0;
        this._group.lastIndex =  0;
        this._minusSign.lastIndex =  0;
    }

    updateModel(event, value) {
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: value,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: value
                }
            });
        }
    }

    onInputFocus() {
        DomHandler.addClass(this.element, 'p-inputwrapper-focus');
    }

    onInputBlur(event) {
        DomHandler.removeClass(this.element, 'p-inputwrapper-focus');
        this.cursor = null;

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

        //this.restoreCursorPosition();
    }

    restoreCursorPosition() {
        
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
        const className = classNames('p-inputnumber-input', this.props.inputClassName);
        const valueToRender = this.formatValue(this.props.value);

        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} id={this.props.inputId} style={this.props.inputStyle}
                       className={className} defaultValue={valueToRender} type="text" size={this.props.size} tabIndex={this.props.tabIndex}
                       maxLength={this.props.maxlength} disabled={this.props.disabled} required={this.props.required} pattern={this.props.pattern}
                       placeholder={this.props.placeholder} readOnly={this.props.readonly} name={this.props.name} onKeyDown={this.onInputKeyDown} onKeyPress={this.onInputKeyPress} onClick={this.onInputClick} 
                       onMouseDown={this.onInputMouseDown} onBlur={this.onInputBlur} onFocus={this.onInputFocus} aria-valuemin={this.props.min} aria-valuemax={this.props.max}
                       aria-valuenow={valueToRender} aria-labelledby={this.props.ariaLabelledBy}
            />
        );
    }

    renderUpButton() {
        let className = classNames("p-inputnumber-button p-inputnumber-button-up p-button p-component", this.props.incrementButtonClassName, {
            'p-disabled': this.props.disabled
        });
        let icon = classNames('p-inputnumber-button-icon', this.props.incrementButtonIcon);

        return (
            <button type="button" className={className} onMouseLeave={this.onUpButtonMouseLeave} onMouseDown={this.onUpButtonMouseDown} onMouseUp={this.onUpButtonMouseUp}
                onKeyDown={this.onUpButtonKeyDown} onKeyUp={this.onUpButtonKeyUp} disabled={this.props.disabled} tabIndex={this.props.tabIndex}>
                <span className={icon}></span>
            </button>
        );
    }

    renderDownButton() {
        let className = classNames("p-inputnumber-button p-inputnumber-button-down p-button p-component", this.props.decrementButtonClassName, {
            'p-disabled': this.props.disabled
        });
        let icon = classNames('p-inputnumber-button-icon', this.props.decrementButtonIcon);

        return (
            <button type="button" className={className} onMouseLeave={this.onDownButtonMouseLeave} onMouseDown={this.onDownButtonMouseDown} onMouseUp={this.onDownButtonMouseUp}
                onKeyDown={this.onDownButtonKeyDown} onKeyUp={this.onDownButtonKeyUp} disabled={this.props.disabled} tabIndex={this.props.tabIndex}>
                <span className={icon}></span>
            </button>
        );
    }

    render() {
        let className = classNames("p-inputnumber p-component", this.props.className, {
                'p-inputwrapper-filled': this.props.value != null, 
                'p-inputnumber-buttons-stacked': this.props.showButtons && this.props.buttonLayout === 'stacked',
                'p-inputnumber-buttons-horizontal': this.props.showButtons && this.props.buttonLayout === 'horizontal',
                'p-inputnumber-buttons-vertical': this.props.showButtons && this.props.buttonLayout === 'vertical'
        });
        let inputElement = this.renderInputElement();
        let upButton = this.props.showButtons && this.renderUpButton();
        let downButton = this.props.showButtons && this.renderDownButton();

        return (
            <span ref={(el) => this.element = el} id={this.props.id} className={className} style={this.props.style}>
                {inputElement}
                {upButton}
                {downButton}
            </span>
        );
    }
}
