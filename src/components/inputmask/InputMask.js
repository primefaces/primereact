import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { DomHandler, classNames } from '../utils/Utils';
import { InputText } from '../inputtext/InputText';
import { tip } from '../tooltip/Tooltip';

export class InputMask extends Component {

    static defaultProps = {
        id: null,
        inputRef: null,
        value: null,
        type: 'text',
        mask: null,
        slotChar: '_',
        autoClear: true,
        unmask: false,
        style: null,
        className: null,
        placeholder: null,
        size: null,
        maxlength: null,
        tabIndex: null,
        disabled: false,
        readOnly: false,
        name: null,
        required: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onComplete: null,
        onChange: null,
        onFocus: null,
        onBlur: null
    }

    static propTypes = {
        id: PropTypes.string,
        inputRef: PropTypes.any,
        value: PropTypes.string,
        type: PropTypes.string,
        mask: PropTypes.string,
        slotChar: PropTypes.string,
        autoClear: PropTypes.bool,
        unmask: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        size: PropTypes.number,
        maxlength: PropTypes.number,
        tabIndex: PropTypes.number,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool,
        name: PropTypes.string,
        required: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onComplete: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onInput = this.onInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.inputRef = createRef(this.props.inputRef);
    }

    caret(first, last) {
        let range, begin, end;
        let inputEl = this.inputRef && this.inputRef.current;

        if (!inputEl || !inputEl.offsetParent || inputEl !== document.activeElement) {
            return;
        }

        if (typeof first === 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (inputEl.setSelectionRange) {
                inputEl.setSelectionRange(begin, end);
            }
            else if (inputEl['createTextRange']) {
                range = inputEl['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (inputEl.setSelectionRange) {
                begin = inputEl.selectionStart;
                end = inputEl.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }

            return { begin: begin, end: end };
        }
    }

    isCompleted() {
        for (let i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
            if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
                return false;
            }
        }

        return true;
    }

    getPlaceholder(i) {
        if (i < this.props.slotChar.length) {
            return this.props.slotChar.charAt(i);
        }
        return this.props.slotChar.charAt(0);
    }

    getValue() {
        return this.props.unmask ? this.getUnmaskedValue() : this.inputRef && this.inputRef.current && this.inputRef.current.value;
    }

    seekNext(pos) {
        while (++pos < this.len && !this.tests[pos]);
        return pos;
    }

    seekPrev(pos) {
        while (--pos >= 0 && !this.tests[pos]);
        return pos;
    }

    shiftL(begin, end) {
        let i, j;

        if (begin < 0) {
            return;
        }

        for (i = begin, j = this.seekNext(end); i < this.len; i++) {
            if (this.tests[i]) {
                if (j < this.len && this.tests[i].test(this.buffer[j])) {
                    this.buffer[i] = this.buffer[j];
                    this.buffer[j] = this.getPlaceholder(j);
                } else {
                    break;
                }

                j = this.seekNext(j);
            }
        }
        this.writeBuffer();
        this.caret(Math.max(this.firstNonMaskPos, begin));
    }

    shiftR(pos) {
        let i, c, j, t;

        for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
            if (this.tests[i]) {
                j = this.seekNext(i);
                t = this.buffer[i];
                this.buffer[i] = c;
                if (j < this.len && this.tests[j].test(t)) {
                    c = t;
                } else {
                    break;
                }
            }
        }
    }

    handleAndroidInput(e) {
        let curVal = this.inputRef.current.value;
        let pos = this.caret();
        if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
            // a deletion or backspace happened
            this.checkVal(true);
            while (pos.begin > 0 && !this.tests[pos.begin - 1])
                pos.begin--;
            if (pos.begin === 0) {
                while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin])
                    pos.begin++;
            }
            this.caret(pos.begin, pos.begin);
        } else {
            this.checkVal(true);
            while (pos.begin < this.len && !this.tests[pos.begin])
                pos.begin++;

            this.caret(pos.begin, pos.begin);
        }

        if (this.props.onComplete && this.isCompleted()) {
            this.props.onComplete({
                originalEvent: e,
                value: this.getValue()
            });
        }
    }

    onBlur(e) {
        this.focus = false;
        this.checkVal();
        this.updateModel(e);
        this.updateFilledState();

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }

        if (this.inputRef.current.value !== this.focusText) {
            let event = document.createEvent('HTMLEvents');
            event.initEvent('change', true, false);
            this.inputRef.current.dispatchEvent(event);
        }
    }

    onKeyDown(e) {
        if (this.props.readOnly) {
            return;
        }

        let k = e.which || e.keyCode,
            pos,
            begin,
            end;
        let iPhone = /iphone/i.test(DomHandler.getUserAgent());
        this.oldVal = this.inputRef.current.value;

        //backspace, delete, and escape get special treatment
        if (k === 8 || k === 46 || (iPhone && k === 127)) {
            pos = this.caret();
            begin = pos.begin;
            end = pos.end;


            if (end - begin === 0) {
                begin = k !== 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1));
                end = k === 46 ? this.seekNext(end) : end;
            }

            this.clearBuffer(begin, end);
            this.shiftL(begin, end - 1);
            this.updateModel(e);

            e.preventDefault();
        } else if (k === 13) { // enter
            this.onBlur(e);
            this.updateModel(e);
        } else if (k === 27) { // escape
            this.inputRef.current.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            e.preventDefault();
        }
    }

    onKeyPress(e) {
        if (this.props.readOnly) {
            return;
        }

        let k = e.which || e.keyCode,
            pos = this.caret(),
            p,
            c,
            next,
            completed;

        if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
            return;
        } else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
                this.clearBuffer(pos.begin, pos.end);
                this.shiftL(pos.begin, pos.end - 1);
            }

            p = this.seekNext(pos.begin - 1);
            if (p < this.len) {
                c = String.fromCharCode(k);
                if (this.tests[p].test(c)) {
                    this.shiftR(p);

                    this.buffer[p] = c;
                    this.writeBuffer();
                    next = this.seekNext(p);

                    if (/android/i.test(DomHandler.getUserAgent())) {
                        //Path for CSP Violation on FireFox OS 1.1
                        let proxy = () => {
                            this.caret(next);
                        };

                        setTimeout(proxy, 0);
                    } else {
                        this.caret(next);
                    }
                    if (pos.begin <= this.lastRequiredNonMaskPos) {
                        completed = this.isCompleted();
                    }
                }
            }
            e.preventDefault();
        }

        this.updateModel(e);

        if (this.props.onComplete && completed) {
            this.props.onComplete({
                originalEvent: e,
                value: this.getValue()
            });
        }
    }

    clearBuffer(start, end) {
        let i;
        for (i = start; i < end && i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
            }
        }
    }

    writeBuffer() {
        this.inputRef.current.value = this.buffer.join('');
    }

    checkVal(allow) {
        this.isValueChecked = true;
        //try to place characters where they belong
        let test = this.inputRef.current.value,
            lastMatch = -1,
            i,
            c,
            pos;

        for (i = 0, pos = 0; i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
                while (pos++ < test.length) {
                    c = test.charAt(pos - 1);
                    if (this.tests[i].test(c)) {
                        this.buffer[i] = c;
                        lastMatch = i;
                        break;
                    }
                }
                if (pos > test.length) {
                    this.clearBuffer(i + 1, this.len);
                    break;
                }
            } else {
                if (this.buffer[i] === test.charAt(pos)) {
                    pos++;
                }
                if (i < this.partialPosition) {
                    lastMatch = i;
                }
            }
        }
        if (allow) {
            this.writeBuffer();
        } else if (lastMatch + 1 < this.partialPosition) {
            if (this.props.autoClear || this.buffer.join('') === this.defaultBuffer) {
                // Invalid value. Remove it and replace it with the
                // mask, which is the default behavior.
                if (this.inputRef.current.value) this.inputRef.current.value = '';
                this.clearBuffer(0, this.len);
            } else {
                // Invalid value, but we opt to show the value to the
                // user and allow them to correct their mistake.
                this.writeBuffer();
            }
        } else {
            this.writeBuffer();
            this.inputRef.current.value = this.inputRef.current.value.substring(0, lastMatch + 1);
        }
        return (this.partialPosition ? i : this.firstNonMaskPos);
    }

    onFocus(e) {
        if (this.props.readOnly) {
            return;
        }

        this.focus = true;

        clearTimeout(this.caretTimeoutId);
        let pos;

        this.focusText = this.inputRef.current.value;

        pos = this.checkVal();

        this.caretTimeoutId = setTimeout(() => {
            if (this.inputRef.current !== document.activeElement) {
                return;
            }
            this.writeBuffer();
            if (pos === this.props.mask.replace("?", "").length) {
                this.caret(0, pos);
            } else {
                this.caret(pos);
            }
            this.updateFilledState();
        }, 10);

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }

    onInput(event) {
        if (this.androidChrome)
            this.handleAndroidInput(event);
        else
            this.handleInputChange(event);
    }

    handleInputChange(e) {
        if (this.props.readOnly) {
            return;
        }

        let pos = this.checkVal(true);
        this.caret(pos);
        this.updateModel(e);
        if (this.props.onComplete && this.isCompleted()) {
            this.props.onComplete({
                originalEvent: e,
                value: this.getValue()
            });
        }
    }

    getUnmaskedValue() {
        let unmaskedBuffer = [];
        for (let i = 0; i < this.buffer.length; i++) {
            let c = this.buffer[i];
            if (this.tests[i] && c !== this.getPlaceholder(i)) {
                unmaskedBuffer.push(c);
            }
        }

        return unmaskedBuffer.join('');
    }

    updateModel(e) {
        if (this.props.onChange) {
            let val = this.props.unmask ? this.getUnmaskedValue() : e && e.target.value;
            this.props.onChange({
                originalEvent: e,
                value: (this.defaultBuffer !== val) ? val : '',
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value : (this.defaultBuffer !== val) ? val : '',
                }
            })
        }
    }

    updateFilledState() {
        if (this.inputRef && this.inputRef.current && this.inputRef.current.value && this.inputRef.current.value.length > 0)
            DomHandler.addClass(this.inputRef.current, 'p-filled');
        else
            DomHandler.removeClass(this.inputRef.current, 'p-filled');
    }

    updateValue(allow) {
        let pos;

        if (this.inputRef && this.inputRef.current) {
            if (this.props.value == null) {
                this.inputRef.current.value = '';
            }
            else {
                this.inputRef.current.value = this.props.value;
                pos = this.checkVal(allow);

                setTimeout(() => {
                    if(this.inputRef && this.inputRef.current) {
                        this.writeBuffer();
                        return this.checkVal(allow);
                    }
                }, 10);
            }

            this.focusText = this.inputRef.current.value;
        }

        this.updateFilledState();

        return pos;
    }

    isValueUpdated() {
        return this.props.unmask ?
                        (this.props.value !== this.getUnmaskedValue()) :
                        (this.defaultBuffer !== this.inputRef.current.value && this.inputRef.current.value !== this.props.value);
    }

    init() {
        if (this.props.mask) {
            this.tests = [];
            this.partialPosition = this.props.mask.length;
            this.len = this.props.mask.length;
            this.firstNonMaskPos = null;
            this.defs = {
                '9': '[0-9]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]'
            };

            let ua = DomHandler.getUserAgent();
            this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);

            let maskTokens = this.props.mask.split('');
            for (let i = 0; i < maskTokens.length; i++) {
                let c = maskTokens[i];
                if (c === '?') {
                    this.len--;
                    this.partialPosition = i;
                }
                else if (this.defs[c]) {
                    this.tests.push(new RegExp(this.defs[c]));
                    if (this.firstNonMaskPos === null) {
                        this.firstNonMaskPos = this.tests.length - 1;
                    }
                    if (i < this.partialPosition) {
                        this.lastRequiredNonMaskPos = this.tests.length - 1;
                    }
                }
                else {
                    this.tests.push(null);
                }
            }

            this.buffer = [];
            for (let i = 0; i < maskTokens.length; i++) {
                let c = maskTokens[i];
                if (c !== '?') {
                    if (this.defs[c])
                        this.buffer.push(this.getPlaceholder(i));
                    else
                        this.buffer.push(c);
                }
            }
            this.defaultBuffer = this.buffer.join('');
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

        this.init();
        this.updateValue();

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

        if (this.isValueUpdated()) {
            this.updateValue();
        }

        if (prevProps.mask !== this.props.mask) {
            this.init();
            this.caret(this.updateValue(true));
            this.updateModel();
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
            target: this.inputRef.current,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        let inputMaskClassName = classNames('p-inputmask', this.props.className);
        return (
            <InputText id={this.props.id} ref={this.inputRef} type={this.props.type} name={this.props.name} style={this.props.style} className={inputMaskClassName} placeholder={this.props.placeholder}
                size={this.props.size} maxLength={this.props.maxlength} tabIndex={this.props.tabIndex} disabled={this.props.disabled} readOnly={this.props.readOnly}
                onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} onKeyPress={this.onKeyPress}
                onInput={this.onInput} onPaste={this.handleInputChange} required={this.props.required} aria-labelledby={this.props.ariaLabelledBy} />
        );
    }

}
