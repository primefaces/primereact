import React, { forwardRef, memo, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { InputText } from '../inputtext/InputText';
import { tip } from '../tooltip/Tooltip';
import { DomHandler, classNames, ObjectUtils } from '../utils/Utils';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';

export const InputMask = memo(forwardRef((props, ref) => {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
    const firstNonMaskPos = useRef(null);
    const lastRequiredNonMaskPos = useRef(0);
    const tests = useRef([]);
    const buffer = useRef([]);
    const len = useRef(0);
    const oldVal = useRef(null);
    const focus = useRef(false);
    const focusText = useRef(null);
    const isValueChecked = useRef(null);
    const partialPosition = useRef(null);
    const defaultBuffer = useRef(null);
    const caretTimeoutId = useRef(null);
    const androidChrome = useRef(false);

    const caret = (first, last) => {
        let range, begin, end;
        let inputEl = elementRef.current;

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

    const isCompleted = () => {
        for (let i = firstNonMaskPos.current; i <= lastRequiredNonMaskPos.current; i++) {
            if (tests.current[i] && buffer.current[i] === getPlaceholder(i)) {
                return false;
            }
        }

        return true;
    }

    const getPlaceholder = useCallback((i) => {
        if (i < props.slotChar.length) {
            return props.slotChar.charAt(i);
        }
        return props.slotChar.charAt(0);
    }, [props.slotChar]);

    const getValue = () => {
        return props.unmask ? getUnmaskedValue() : elementRef.current && elementRef.current.value;
    }

    const seekNext = (pos) => {
        while (++pos < len.current && !tests.current[pos]);
        return pos;
    }

    const seekPrev = (pos) => {
        while (--pos >= 0 && !tests.current[pos]);
        return pos;
    }

    const shiftL = (begin, end) => {
        let i, j;

        if (begin < 0) {
            return;
        }

        for (i = begin, j = seekNext(end); i < len.current; i++) {
            if (tests.current[i]) {
                if (j < len.current && tests.current[i].test(buffer.current[j])) {
                    buffer.current[i] = buffer.current[j];
                    buffer.current[j] = getPlaceholder(j);
                } else {
                    break;
                }

                j = seekNext(j);
            }
        }
        writeBuffer();
        caret(Math.max(firstNonMaskPos.current, begin));
    }

    const shiftR = (pos) => {
        let i, c, j, t;

        for (i = pos, c = getPlaceholder(pos); i < len.current; i++) {
            if (tests.current[i]) {
                j = seekNext(i);
                t = buffer.current[i];
                buffer.current[i] = c;
                if (j < len.current && tests.current[j].test(t)) {
                    c = t;
                } else {
                    break;
                }
            }
        }
    }

    const handleAndroidInput = (e) => {
        let curVal = elementRef.current.value;
        let pos = caret();
        if (oldVal.current.length && oldVal.current.length > curVal.length) {
            // a deletion or backspace happened
            checkVal(true);
            while (pos.begin > 0 && !tests.current[pos.begin - 1])
                pos.begin--;
            if (pos.begin === 0) {
                while (pos.begin < firstNonMaskPos.current && !tests.current[pos.begin])
                    pos.begin++;
            }
            caret(pos.begin, pos.begin);
        } else {
            checkVal(true);
            while (pos.begin < len.current && !tests.current[pos.begin])
                pos.begin++;

            caret(pos.begin, pos.begin);
        }

        if (props.onComplete && isCompleted()) {
            props.onComplete({
                originalEvent: e,
                value: getValue()
            });
        }
    }

    const onBlur = (e) => {
        focus.current = false;
        checkVal();
        updateModel(e);
        updateFilledState();

        props.onBlur && props.onBlur(e);

        if (elementRef.current.value !== focusText.current) {
            let event = document.createEvent('HTMLEvents');
            event.initEvent('change', true, false);
            elementRef.current.dispatchEvent(event);
        }
    }

    const onKeyDown = (e) => {
        if (props.readOnly) {
            return;
        }

        let k = e.which || e.keyCode,
            pos,
            begin,
            end;
        let iPhone = /iphone/i.test(DomHandler.getUserAgent());
        oldVal.current = elementRef.current.value;

        //backspace, delete, and escape get special treatment
        if (k === 8 || k === 46 || (iPhone && k === 127)) {
            pos = caret();
            begin = pos.begin;
            end = pos.end;


            if (end - begin === 0) {
                begin = k !== 46 ? seekPrev(begin) : (end = seekNext(begin - 1));
                end = k === 46 ? seekNext(end) : end;
            }

            clearBuffer(begin, end);
            shiftL(begin, end - 1);
            updateModel(e);

            e.preventDefault();
        } else if (k === 13) { // enter
            onBlur(e);
            updateModel(e);
        } else if (k === 27) { // escape
            elementRef.current.value = focusText.current;
            caret(0, checkVal());
            updateModel(e);
            e.preventDefault();
        }
    }

    const onKeyPress = (e) => {
        if (props.readOnly) {
            return;
        }

        let k = e.which || e.keyCode,
            pos = caret(),
            p,
            c,
            next,
            completed;

        if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
            return;
        } else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
                clearBuffer(pos.begin, pos.end);
                shiftL(pos.begin, pos.end - 1);
            }

            p = seekNext(pos.begin - 1);
            if (p < len.current) {
                c = String.fromCharCode(k);
                if (tests.current[p].test(c)) {
                    shiftR(p);

                    buffer.current[p] = c;
                    writeBuffer();
                    next = seekNext(p);

                    if (/android/i.test(DomHandler.getUserAgent())) {
                        //Path for CSP Violation on FireFox OS 1.1
                        let proxy = () => {
                            caret(next);
                        };

                        setTimeout(proxy, 0);
                    } else {
                        caret(next);
                    }
                    if (pos.begin <= lastRequiredNonMaskPos.current) {
                        completed = isCompleted();
                    }
                }
            }
            e.preventDefault();
        }

        updateModel(e);

        if (props.onComplete && completed) {
            props.onComplete({
                originalEvent: e,
                value: getValue()
            });
        }
    }

    const clearBuffer = (start, end) => {
        let i;
        for (i = start; i < end && i < len.current; i++) {
            if (tests.current[i]) {
                buffer.current[i] = getPlaceholder(i);
            }
        }
    }

    const writeBuffer = () => {
        elementRef.current.value = buffer.current.join('');
    }

    const checkVal = (allow) => {
        isValueChecked.current = true;
        //try to place characters where they belong
        let test = elementRef.current.value,
            lastMatch = -1,
            i,
            c,
            pos;

        for (i = 0, pos = 0; i < len.current; i++) {
            if (tests.current[i]) {
                buffer.current[i] = getPlaceholder(i);
                while (pos++ < test.length) {
                    c = test.charAt(pos - 1);
                    if (tests.current[i].test(c)) {
                        buffer.current[i] = c;
                        lastMatch = i;
                        break;
                    }
                }
                if (pos > test.length) {
                    clearBuffer(i + 1, len.current);
                    break;
                }
            } else {
                if (buffer.current[i] === test.charAt(pos)) {
                    pos++;
                }
                if (i < partialPosition.current) {
                    lastMatch = i;
                }
            }
        }
        if (allow) {
            writeBuffer();
        } else if (lastMatch + 1 < partialPosition.current) {
            if (props.autoClear || buffer.current.join('') === defaultBuffer.current) {
                // Invalid value. Remove it and replace it with the
                // mask, which is the default behavior.
                if (elementRef.current.value) elementRef.current.value = '';
                clearBuffer(0, len.current);
            } else {
                // Invalid value, but we opt to show the value to the
                // user and allow them to correct their mistake.
                writeBuffer();
            }
        } else {
            writeBuffer();
            elementRef.current.value = elementRef.current.value.substring(0, lastMatch + 1);
        }
        return (partialPosition.current ? i : firstNonMaskPos.current);
    }

    const onFocus = (e) => {
        if (props.readOnly) {
            return;
        }

        focus.current = true;

        clearTimeout(caretTimeoutId.current);
        let pos;

        focusText.current = elementRef.current.value;

        pos = checkVal();

        caretTimeoutId.current = setTimeout(() => {
            if (elementRef.current !== document.activeElement) {
                return;
            }
            writeBuffer();
            if (pos === props.mask.replace("?", "").length) {
                caret(0, pos);
            } else {
                caret(pos);
            }
            updateFilledState();
        }, 10);

        props.onFocus && props.onFocus(e);
    }

    const onInput = (event) => {
        androidChrome.current ? handleAndroidInput(event) : handleInputChange(event);
    }

    const handleInputChange = (e) => {
        if (props.readOnly) {
            return;
        }

        let pos = checkVal(true);
        caret(pos);
        updateModel(e);
        if (props.onComplete && isCompleted()) {
            props.onComplete({
                originalEvent: e,
                value: getValue()
            });
        }
    }

    const getUnmaskedValue = useCallback(() => {
        let unmaskedBuffer = [];
        for (let i = 0; i < buffer.current.length; i++) {
            let c = buffer.current[i];
            if (tests.current[i] && c !== getPlaceholder(i)) {
                unmaskedBuffer.push(c);
            }
        }

        return unmaskedBuffer.join('');
    }, [getPlaceholder]);

    const updateModel = (e) => {
        if (props.onChange) {
            let val = props.unmask ? getUnmaskedValue() : e && e.target.value;
            props.onChange({
                originalEvent: e,
                value: (defaultBuffer.current !== val) ? val : '',
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: (defaultBuffer.current !== val) ? val : '',
                }
            })
        }
    }

    const updateFilledState = () => {
        if (elementRef.current && elementRef.current.value && elementRef.current.value.length > 0)
            DomHandler.addClass(elementRef.current, 'p-filled');
        else
            DomHandler.removeClass(elementRef.current, 'p-filled');
    }

    const updateValue = (allow) => {
        let pos;

        if (elementRef.current) {
            if (props.value == null) {
                elementRef.current.value = '';
            }
            else {
                elementRef.current.value = props.value;
                pos = checkVal(allow);

                setTimeout(() => {
                    if (elementRef.current) {
                        writeBuffer();
                        return checkVal(allow);
                    }
                }, 10);
            }

            focusText.current = elementRef.current.value;
        }

        updateFilledState();

        return pos;
    }

    const isValueUpdated = useCallback(() => {
        return props.unmask ?
            (props.value !== getUnmaskedValue()) :
            (defaultBuffer.current !== elementRef.current.value && elementRef.current.value !== props.value);
    }, [props.unmask, props.value, getUnmaskedValue]);

    const init = () => {
        if (props.mask) {
            tests.current = [];
            partialPosition.current = props.mask.length;
            len.current = props.mask.length;
            firstNonMaskPos.current = null;
            const defs = {
                '9': '[0-9]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]'
            };

            let ua = DomHandler.getUserAgent();
            androidChrome.current = /chrome/i.test(ua) && /android/i.test(ua);

            let maskTokens = props.mask.split('');
            for (let i = 0; i < maskTokens.length; i++) {
                let c = maskTokens[i];
                if (c === '?') {
                    len.current--;
                    partialPosition.current = i;
                }
                else if (defs[c]) {
                    tests.current.push(new RegExp(defs[c]));
                    if (firstNonMaskPos.current === null) {
                        firstNonMaskPos.current = tests.current.length - 1;
                    }
                    if (i < partialPosition.current) {
                        lastRequiredNonMaskPos.current = tests.current.length - 1;
                    }
                }
                else {
                    tests.current.push(null);
                }
            }

            buffer.current = [];
            for (let i = 0; i < maskTokens.length; i++) {
                let c = maskTokens[i];
                if (c !== '?') {
                    if (defs[c])
                        buffer.current.push(getPlaceholder(i));
                    else
                        buffer.current.push(c);
                }
            }
            defaultBuffer.current = buffer.current.join('');
        }
    }

    useEffect(() => {
        ObjectUtils.combinedRefs(elementRef, props.inputRef);
    }, [elementRef, props.inputRef]);

    useEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.update({ content: props.tooltip, ...(props.tooltipOptions || {}) });
        }
        else if (props.tooltip) {
            tooltipRef.current = tip({
                target: elementRef.current,
                content: props.tooltip,
                options: props.tooltipOptions
            });
        }
    }, [props.tooltip, props.tooltipOptions]);

    useMountEffect(() => {
        init();
        updateValue();
    });

    useUpdateEffect(() => {
        init();
        caret(updateValue(true));
        updateModel();
    }, [props.mask]);

    useUpdateEffect(() => {
        if (isValueUpdated()) {
            updateValue();
        }
    }, [isValueUpdated]);

    useUnmountEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

    const className = classNames('p-inputmask', props.className);

    return (
        <InputText ref={elementRef} id={props.id} type={props.type} name={props.name} style={props.style} className={className} placeholder={props.placeholder}
            size={props.size} maxLength={props.maxLength} tabIndex={props.tabIndex} disabled={props.disabled} readOnly={props.readOnly}
            onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown} onKeyPress={onKeyPress}
            onInput={onInput} onPaste={handleInputChange} required={props.required} aria-labelledby={props.ariaLabelledBy} />
    )
}));

InputMask.defaultProps = {
    __TYPE: 'InputMask',
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
    maxLength: null,
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

InputMask.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
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
    maxLength: PropTypes.number,
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
