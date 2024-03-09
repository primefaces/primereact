import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { InputText } from '../inputtext/InputText';
import { DomHandler, ObjectUtils, classNames } from '../utils/Utils';
import { InputMaskBase } from './InputMaskBase';

export const InputMask = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = InputMaskBase.getProps(inProps, context);
        const elementRef = React.useRef(null);
        const firstNonMaskPos = React.useRef(null);
        const lastRequiredNonMaskPos = React.useRef(0);
        const tests = React.useRef([]);
        const buffer = React.useRef([]);
        const len = React.useRef(0);
        const oldVal = React.useRef(null);
        const focus = React.useRef(false);
        const focusText = React.useRef(null);
        const isValueChecked = React.useRef(null);
        const partialPosition = React.useRef(null);
        const defaultBuffer = React.useRef(null);
        const caretTimeoutId = React.useRef(null);
        const androidChrome = React.useRef(false);
        const metaData = {
            props
        };

        const caret = (first, last) => {
            let range, begin, end;
            let inputEl = elementRef.current;

            if (!inputEl || !inputEl.offsetParent || inputEl !== document.activeElement) {
                return null;
            }

            if (typeof first === 'number') {
                begin = first;
                end = typeof last === 'number' ? last : begin;

                if (inputEl.setSelectionRange) {
                    inputEl.setSelectionRange(begin, end);
                } else if (inputEl['createTextRange']) {
                    range = inputEl['createTextRange']();
                    range.collapse(true);
                    range.moveEnd('character', end);
                    range.moveStart('character', begin);
                    range.select();
                }
            } else {
                if (inputEl.setSelectionRange) {
                    begin = inputEl.selectionStart;
                    end = inputEl.selectionEnd;
                } else if (document['selection'] && document['selection'].createRange) {
                    range = document['selection'].createRange();
                    begin = 0 - range.duplicate().moveStart('character', -100000);
                    end = begin + range.text.length;
                }
            }

            return { begin: begin, end: end };
        };

        const isCompleted = () => {
            for (let i = firstNonMaskPos.current; i <= lastRequiredNonMaskPos.current; i++) {
                if (tests.current[i] && buffer.current[i] === getPlaceholder(i)) {
                    return false;
                }
            }

            return true;
        };

        const getPlaceholder = React.useCallback(
            (i) => {
                if (i < props.slotChar.length) {
                    return props.slotChar.charAt(i);
                }

                return props.slotChar.charAt(0);
            },
            [props.slotChar]
        );

        const getValue = () => {
            return props.unmask ? getUnmaskedValue() : elementRef.current && elementRef.current.value;
        };

        const seekNext = (pos) => {
            while (++pos < len.current && !tests.current[pos]);

            return pos;
        };

        const seekPrev = (pos) => {
            while (--pos >= 0 && !tests.current[pos]);

            return pos;
        };

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
        };

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
        };

        const handleAndroidInput = (e) => {
            let curVal = elementRef.current.value;
            let pos = caret();

            if (!pos) {
                return;
            }

            if (oldVal.current.length && oldVal.current.length > curVal.length) {
                // a deletion or backspace happened
                checkVal(true);
                while (pos.begin > 0 && !tests.current[pos.begin - 1]) pos.begin--;

                if (pos.begin === 0) {
                    while (pos.begin < firstNonMaskPos.current && !tests.current[pos.begin]) pos.begin++;
                }

                caret(pos.begin, pos.begin);
            } else {
                checkVal(true);
                while (pos.begin < len.current && !tests.current[pos.begin]) pos.begin++;

                caret(pos.begin, pos.begin);
            }

            if (props.onComplete && isCompleted()) {
                props.onComplete({
                    originalEvent: e,
                    value: getValue()
                });
            }

            updateModel(e);
        };

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
        };

        const onKeyDown = (e) => {
            if (props.readOnly) {
                return;
            }

            let k = e.which || e.keyCode,
                pos,
                begin,
                end;

            oldVal.current = elementRef.current.value;

            //backspace, delete, and escape get special treatment
            if (k === 8 || k === 46 || (DomHandler.isIOS() && k === 127)) {
                pos = caret();

                if (!pos) {
                    return;
                }

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
            } else if (k === 13) {
                // enter
                onBlur(e);
                updateModel(e);
            } else if (k === 27) {
                // escape
                elementRef.current.value = focusText.current;
                caret(0, checkVal());
                updateModel(e);
                e.preventDefault();
            }
        };

        const onKeyPress = (e) => {
            if (props.readOnly) {
                return;
            }

            const pos = caret();

            if (!pos) {
                return;
            }

            let k = e.which || e.keyCode,
                p,
                c,
                next,
                completed;

            if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
                //Ignore
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

                        if (DomHandler.isAndroid()) {
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
        };

        const clearBuffer = (start, end) => {
            let i;

            for (i = start; i < end && i < len.current; i++) {
                if (tests.current[i]) {
                    buffer.current[i] = getPlaceholder(i);
                }
            }
        };

        const writeBuffer = () => {
            if (elementRef.current) {
                elementRef.current.value = buffer.current.join('');
            }
        };

        const checkVal = (allow) => {
            isValueChecked.current = true;
            //try to place characters where they belong
            let test = elementRef.current && elementRef.current.value,
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
                    if (elementRef.current && elementRef.current.value) elementRef.current.value = '';
                    clearBuffer(0, len.current);
                } else {
                    // Invalid value, but we opt to show the value to the
                    // user and allow them to correct their mistake.
                    writeBuffer();
                }
            } else {
                writeBuffer();

                if (elementRef.current) {
                    elementRef.current.value = elementRef.current.value.substring(0, lastMatch + 1);
                }
            }

            return partialPosition.current ? i : firstNonMaskPos.current;
        };

        const onFocus = (e) => {
            if (props.readOnly) {
                return;
            }

            focus.current = true;

            clearTimeout(caretTimeoutId.current);
            let pos;

            if (elementRef.current) {
                focusText.current = elementRef.current.value;
            } else {
                focusText.current = '';
            }

            pos = checkVal() || 0;

            caretTimeoutId.current = setTimeout(() => {
                if (elementRef.current !== document.activeElement) {
                    return;
                }

                writeBuffer();

                if (pos === props.mask.replace('?', '').length) {
                    caret(0, pos);
                } else {
                    caret(pos);
                }

                updateFilledState();
            }, 100);

            props.onFocus && props.onFocus(e);
        };

        const onInput = (event) => {
            androidChrome.current ? handleAndroidInput(event) : handleInputChange(event);
        };

        const handleInputChange = (e, isOnPaste = false) => {
            if (props.readOnly) {
                return;
            }

            if (!isOnPaste) {
                let pos = checkVal(true);

                caret(pos);
            }

            updateModel(e);

            if (props.onComplete && isCompleted()) {
                props.onComplete({
                    originalEvent: e,
                    value: getValue()
                });
            }
        };

        const getUnmaskedValue = React.useCallback(() => {
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
                    value: defaultBuffer.current !== val ? val : '',
                    stopPropagation: () => {
                        e.stopPropagation();
                    },
                    preventDefault: () => {
                        e.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: defaultBuffer.current !== val ? val : ''
                    }
                });
            }
        };

        const updateFilledState = () => {
            if (elementRef.current && elementRef.current.value && elementRef.current.value.length > 0) DomHandler.addClass(elementRef.current, 'p-filled');
            else DomHandler.removeClass(elementRef.current, 'p-filled');
        };

        const updateValue = (allow) => {
            let pos;

            if (elementRef.current) {
                if (props.value == null) {
                    elementRef.current.value = '';
                } else {
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
        };

        const isValueUpdated = React.useCallback(() => {
            return props.unmask ? props.value !== getUnmaskedValue() : defaultBuffer.current !== elementRef.current.value && elementRef.current.value !== props.value;
        }, [props.unmask, props.value, getUnmaskedValue]);

        const init = () => {
            if (props.mask) {
                tests.current = [];
                partialPosition.current = props.mask.length;
                len.current = props.mask.length;
                firstNonMaskPos.current = null;
                const defs = {
                    9: '[0-9]',
                    a: '[A-Za-z]',
                    '*': '[A-Za-z0-9]'
                };

                androidChrome.current = DomHandler.isChrome() && DomHandler.isAndroid();

                let maskTokens = props.mask.split('');

                for (let i = 0; i < maskTokens.length; i++) {
                    let c = maskTokens[i];

                    if (c === '?') {
                        len.current--;
                        partialPosition.current = i;
                    } else if (defs[c]) {
                        tests.current.push(new RegExp(defs[c]));

                        if (firstNonMaskPos.current === null) {
                            firstNonMaskPos.current = tests.current.length - 1;
                        }

                        if (i < partialPosition.current) {
                            lastRequiredNonMaskPos.current = tests.current.length - 1;
                        }
                    } else {
                        tests.current.push(null);
                    }
                }

                buffer.current = [];

                for (let i = 0; i < maskTokens.length; i++) {
                    let c = maskTokens[i];

                    if (c !== '?') {
                        if (defs[c]) buffer.current.push(getPlaceholder(i));
                        else buffer.current.push(c);
                    }
                }

                defaultBuffer.current = buffer.current.join('');
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focus(elementRef.current),
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(elementRef, ref);
        }, [elementRef, ref]);

        useMountEffect(() => {
            init();
            updateValue();
        });

        useUpdateEffect(() => {
            init();
            caret(updateValue(true));

            if (props.unmask) {
                updateModel();
            }
        }, [props.mask]);

        useUpdateEffect(() => {
            if (isValueUpdated()) {
                updateValue();
            }
        }, [isValueUpdated]);

        const otherProps = InputMaskBase.getOtherProps(props);
        const className = classNames('p-inputmask', props.className);

        return (
            <InputText
                ref={elementRef}
                autoFocus={props.autoFocus}
                id={props.id}
                type={props.type}
                name={props.name}
                style={props.style}
                className={className}
                {...otherProps}
                placeholder={props.placeholder}
                size={props.size}
                maxLength={props.maxLength}
                tabIndex={props.tabIndex}
                disabled={props.disabled}
                readOnly={props.readOnly}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onInput={onInput}
                onPaste={(e) => handleInputChange(e, true)}
                required={props.required}
                tooltip={props.tooltip}
                tooltipOptions={props.tooltipOptions}
                pt={props.pt}
                unstyled={props.unstyled}
                __parentMetadata={{ parent: metaData }}
            />
        );
    })
);

InputMask.displayName = 'InputMask';
