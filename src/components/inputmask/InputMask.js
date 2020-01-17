import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import DomHandler from '../utils/DomHandler';
import { InputText } from '../inputtext/InputText';
import Tooltip from "../tooltip/Tooltip";

export class InputMask extends Component {

    static defaultProps = {
        id: null,
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
        tabindex: null,
        disabled: false,
        readonly: false,
        name: null,
        required: false,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        onComplete: null,
        onChange: null
    }

    static propTypes = {
        id: PropTypes.string,
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
        tabindex: PropTypes.number,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        name: PropTypes.string,
        required: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        ariaLabelledBy: PropTypes.string,
        onComplete: PropTypes.func,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onInput = this.onInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    caret(first, last) {
        let range, begin, end;

        if (!this.input.offsetParent || this.input !== document.activeElement) {
            return;
        }

        if (typeof first === 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.input.setSelectionRange) {
                this.input.setSelectionRange(begin, end);
            }
            else if (this.input['createTextRange']) {
                range = this.input['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.input.setSelectionRange) {
                begin = this.input.selectionStart;
                end = this.input.selectionEnd;
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
        var curVal = this.input.value;
        var pos = this.caret();
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
            this.props.onComplete(e);
        }
    }

    onBlur(e) {
        this.focus = false;
        this.checkVal();
        this.updateModel(e);
        this.updateFilledState();

        if (this.input.value !== this.focusText) {
            let event = document.createEvent('HTMLEvents');
            event.initEvent('change', true, false);
            this.input.dispatchEvent(event);
        }
    }

    onKeyDown(e) {
        if (this.props.readonly) {
            return;
        }

        let k = e.which || e.keyCode,
            pos,
            begin,
            end;
        let iPhone = /iphone/i.test(DomHandler.getUserAgent());
        this.oldVal = this.input.value;

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
            this.input.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            e.preventDefault();
        }
    }

    onKeyPress(e) {
        if (this.props.readonly) {
            return;
        }

        var k = e.which || e.keyCode,
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
                originalEvent: e
            })
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
        this.input.value = this.buffer.join('');
    }

    checkVal(allow) {
        this.isValueChecked = true;
        //try to place characters where they belong
        let test = this.input.value,
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
                if (this.input.value) this.input.value = '';
                this.clearBuffer(0, this.len);
            } else {
                // Invalid value, but we opt to show the value to the
                // user and allow them to correct their mistake.
                this.writeBuffer();
            }
        } else {
            this.writeBuffer();
            this.input.value = this.input.value.substring(0, lastMatch + 1);
        }
        return (this.partialPosition ? i : this.firstNonMaskPos);
    }

    onFocus(event) {
        if (this.props.readonly) {
            return;
        }

        this.focus = true;

        clearTimeout(this.caretTimeoutId);
        let pos;

        this.focusText = this.input.value;

        pos = this.checkVal();

        this.caretTimeoutId = setTimeout(() => {
            if (this.input !== document.activeElement) {
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
    }

    onInput(event) {
        if (this.androidChrome)
            this.handleAndroidInput(event);
        else
            this.handleInputChange(event);
    }

    handleInputChange(event) {
        if (this.props.readonly) {
            return;
        }

        var pos = this.checkVal(true);
        this.caret(pos);
        this.updateModel(event);
        if (this.props.onComplete && this.isCompleted()) {
            this.props.onComplete({
                originalEvent: event
            })
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
            var val = this.props.unmask ? this.getUnmaskedValue() : e && e.target.value;
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
        if (this.input && this.input.value && this.input.value.length > 0)
            DomHandler.addClass(this.input, 'p-filled');
        else
            DomHandler.removeClass(this.input, 'p-filled');
    }

    updateValue() {
        if (this.input) {
            if (this.props.value == null) {
                this.input.value = '';
            }
            else {
                this.input.value = this.props.value;
                this.checkVal();
            }

            setTimeout(() => {
                if(this.input) {
                    this.writeBuffer();
                    this.checkVal();
                }
            }, 10);

            this.focusText = this.input.value;
        }

        this.updateFilledState();
    }

    init() {
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

    componentDidMount() {
        this.init();
        this.updateValue();

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

        let isValueUpdated = this.props.value && (this.props.unmask ? this.props.value !== this.getUnmaskedValue() : this.props.value.length && this.input.value !== this.props.value);
        if (isValueUpdated) {
            this.updateValue();
        }

        if (prevProps.mask !== this.props.mask) {
            this.init();
            this.updateValue();
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
        this.tooltip = new Tooltip({
            target: this.input,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        return (
            <InputText id={this.props.id} ref={(el) => this.input = ReactDOM.findDOMNode(el)} type={this.props.type} name={this.props.name} style={this.props.style} className={this.props.className} placeholder={this.props.placeholder}
                size={this.props.size} maxLength={this.props.maxlength} tabIndex={this.props.tabindex} disabled={this.props.disabled} readOnly={this.props.readonly}
                onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} onKeyPress={this.onKeyPress}
                onInput={this.onInput} onPaste={this.handleInputChange} required={this.props.required} aria-labelledby={this.props.ariaLabelledBy} />
        );
    }

}
