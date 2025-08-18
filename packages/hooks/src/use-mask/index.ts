import { useMountEffect } from '@primereact/hooks';
import { getUserAgent } from '@primeuix/utils';
import * as React from 'react';

/**
 * Event fired when the component's state changes.
 */
export interface UseMaskChangeEvent {
    /**
     * The value of the component.
     */
    value: string | undefined;
}

/**
 * The options for the `useMask` hook.
 */
export interface UseMaskOptions {
    /**
     * Mask pattern.
     */
    mask: string;
    /**
     * Defines if model sets the raw unmasked value to bound value or the formatted mask value.
     * @default false
     */
    unmask?: string;
    /**
     * Placeholder character in mask, default is underscore.
     * @default _
     */
    slotChar?: string;
    /**
     * Clears the incomplete value on blur.
     * @default true
     */
    autoClear?: boolean;
    /**
     * Whether the components are clickable or not.
     * @default false
     */
    readOnly?: boolean;
    /**
     * Callback function that is called when the value is changed.
     * @param event The event that triggered the change.
     * @param event.value The value of the component.
     * @returns void
     */
    onMaskChange?: (event: UseMaskChangeEvent) => void;
    /**
     * Reference to the mask element.
     */
    inputRef: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> } | null>;
}

export interface UseMaskExposes {
    /**
     * Handles input events for the masked input field.
     * Processes character input and composition events while applying the mask pattern.
     * @param event - The form or composition event from the input element
     */
    onMaskInput: (event: React.FormEvent<HTMLInputElement> | React.CompositionEvent<HTMLInputElement>) => void;
    /**
     * Handles keydown events for special key operations.
     * Manages backspace, delete, escape, and enter key behaviors.
     * @param event - The keyboard event from the input element
     */
    onMaskKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Handles keypress events for character input validation.
     * Validates and places characters according to the mask pattern.
     * @param event - The keyboard event from the input element
     */
    onMaskKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Handles focus events when the input gains focus.
     * Initializes the mask display and sets the cursor position.
     * @param event - The focus event from the input element
     */
    onMaskFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handles blur events when the input loses focus.
     * Validates the final value and triggers change events if needed.
     * @param event - The focus event from the input element
     */
    onMaskBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handles paste events for clipboard content insertion.
     * Processes pasted content according to the mask pattern.
     * @param event - The clipboard event from the input element
     */
    onMaskPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}

/**
 * useMask hook is used to enter input in a certain format such as numeric, date, currency, email and phone.
 *
 * @param {UseMaskOptions} options - The options for the mask.
 * @returns {UseMaskExposes} - The exposed methods for the mask.
 *
 * @example
 * ```tsx
 * const { onMaskInput, onMaskKeyDown, onMaskKeyPress, onMaskFocus, onMaskBlur, onMaskPaste } = useMask({
 *        mask: '99/99/9999',
 *        onMaskChange: (event: UseMaskChangeEvent) => setValue(event.value ?? ''),
 *        inputRef: ref
 *    });
 *
 *    return (
 *       <div className="card flex justify-center">
 *           <InputText ref={ref} value={value} placeholder="99/99/9999" onInput={onMaskInput} onKeyDown={onMaskKeyDown} onKeyPress={onMaskKeyPress} onFocus={onMaskFocus} onBlur={onMaskBlur} onPaste={onMaskPaste} />
 *       </div>
 *    );
 */
export function useMask(options: UseMaskOptions): UseMaskExposes {
    const { mask, unmask, slotChar = '_', autoClear = true, readOnly = false, onMaskChange, inputRef } = options;

    const len = React.useRef(0);
    const tests = React.useRef<Array<RegExp | null>>([]);
    const buffer = React.useRef<string[]>([]);
    const defaultBuffer = React.useRef<string | null>(null);
    const partialPosition = React.useRef<number>(0);
    const androidChrome = React.useRef(false);
    const focus = React.useRef(false);
    const focusText = React.useRef<string | null>(null);
    const firstNonMaskPos = React.useRef<number | null>(null);
    const lastRequiredNonMaskPos = React.useRef<number>(0);
    const caretTimeoutId = React.useRef<NodeJS.Timeout | null>(null);
    const oldVal = React.useRef<string | null>(null);
    const currentVal = React.useRef<string | null>(null);

    const onMaskInput = (event: React.FormEvent<HTMLInputElement> | React.CompositionEvent<HTMLInputElement>) => {
        // Check if the event is part of a text composition process (e.g., for Asian languages).
        // If event.isComposing is true, it means the user is still composing text and the input is not finalized.
        if ('isComposing' in event && event.isComposing) {
            return;
        }

        if (androidChrome.current) handleAndroidInput();
        else handleInputChange(event);
    };

    const onMaskKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (readOnly) {
            return;
        }

        const k = event.code;
        let pos, begin, end;
        const iPhone = /iphone/i.test(getUserAgent());

        oldVal.current = inputRef.current?.elementRef.current?.value as string;

        //backspace, delete, and escape get special treatment
        if (k === 'Backspace' || k === 'Delete' || (iPhone && k === 'Escape')) {
            pos = caret();

            if (!pos) {
                return;
            }

            begin = pos.begin;
            end = pos.end;

            if (end - begin === 0) {
                begin = k !== 'Delete' ? seekPrev(begin) : (end = seekNext(begin - 1));
                end = k === 'Delete' ? seekNext(end) : end;
            }

            clearBuffer(begin, end);
            shiftL(begin, end - 1);
            updateModelValue((event.target as HTMLInputElement).value);

            event.preventDefault();
        } else if (k === 'Enter') {
            // enter
            inputRef.current?.elementRef.current?.blur();
            updateModelValue((event.target as HTMLInputElement).value);
        } else if (k === 'Escape') {
            // escape
            if (inputRef.current?.elementRef.current) {
                inputRef.current.elementRef.current.value = focusText.current ?? '';
            }

            caret(0, checkVal());
            updateModelValue((event.target as HTMLInputElement).value);
            event.preventDefault();
        }
    };

    const onMaskKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (readOnly) {
            return;
        }

        const k = event.code,
            pos = caret();
        let p: number, c: string, next: number;

        if (!pos) {
            return;
        }

        if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey || event.key === 'CapsLock' || event.key === 'Escape' || event.key === 'Tab') {
            //Ignore
            return;
        } else if (k && k !== 'Enter') {
            if (pos.end - pos.begin !== 0) {
                clearBuffer(pos.begin, pos.end);
                shiftL(pos.begin, pos.end - 1);
            }

            p = seekNext(pos.begin - 1);

            if (p < len.current) {
                c = event.key;

                if (tests.current[p]?.test(c)) {
                    shiftR(p);

                    buffer.current[p] = c;
                    writeBuffer();
                    next = seekNext(p);

                    if (/android/i.test(getUserAgent())) {
                        //Path for CSP Violation on FireFox OS 1.1
                        const proxy = () => {
                            caret(next);
                        };

                        setTimeout(proxy, 0);
                    } else {
                        caret(next);
                    }
                }
            }

            event.preventDefault();
        }

        updateModelValue((event.target as HTMLInputElement).value);
    };

    const onMaskFocus = () => {
        if (readOnly) {
            return;
        }

        if (caretTimeoutId.current) {
            clearTimeout(caretTimeoutId.current as NodeJS.Timeout);
        }

        focus.current = true;
        focusText.current = inputRef.current?.elementRef.current?.value as string;

        if (!inputRef.current?.elementRef.current?.value || inputRef.current.elementRef.current.value === defaultBuffer.current) {
            requestAnimationFrame(() => {
                if (inputRef.current?.elementRef.current === document.activeElement) {
                    caret(0, 0);
                }
            });
        } else {
            const pos = checkVal();

            caretTimeoutId.current = setTimeout(() => {
                if (inputRef.current?.elementRef.current !== document.activeElement) {
                    return;
                }

                writeBuffer();

                if (pos === mask?.replace('?', '').length) {
                    caret(0, pos);
                } else {
                    caret(pos);
                }
            }, 10);
        }
    };

    const onMaskBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        focus.current = false;
        checkVal();
        updateModelValue(event.target.value);

        if (inputRef.current?.elementRef.current?.value !== focusText.current) {
            const e = new Event('change', { bubbles: true, cancelable: false });

            inputRef.current?.elementRef.current?.dispatchEvent(e);
        }
    };

    const onMaskPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        handleInputChange(event);
    };

    const caret = (first?: number, last?: number): { begin: number; end: number } | undefined => {
        let begin = 0,
            end = 0;

        if (typeof first === 'number') {
            begin = first;
            end = typeof last === 'number' ? last : begin;

            inputRef.current?.elementRef.current?.setSelectionRange(begin, end);
        } else {
            if (inputRef.current?.elementRef.current) {
                begin = inputRef.current.elementRef.current.selectionStart ?? 0;
                end = inputRef.current.elementRef.current.selectionEnd ?? 0;
            }
        }

        return { begin, end };
    };

    const getPlaceholder = (i: number) => {
        if (i < slotChar.length) {
            return slotChar.charAt(i);
        }

        return slotChar.charAt(0);
    };

    const seekNext = (pos: number) => {
        while (++pos < len.current && !tests.current[pos]);

        return pos;
    };

    const seekPrev = (pos: number) => {
        while (--pos >= 0 && !tests.current[pos]);

        return pos;
    };

    const shiftL = (begin: number, end: number) => {
        let i, j;

        if (begin < 0) {
            return;
        }

        for (i = begin, j = seekNext(end); i < len.current; i++) {
            if (tests.current[i]) {
                if (j < len.current && tests.current[i]?.test(buffer.current[j])) {
                    buffer.current[i] = buffer.current[j];
                    buffer.current[j] = getPlaceholder(j);
                } else {
                    break;
                }

                j = seekNext(j);
            }
        }

        writeBuffer();
        caret(Math.max(firstNonMaskPos.current ?? 0, begin));
    };

    const shiftR = (pos: number) => {
        let i, c, j, t;

        for (i = pos, c = getPlaceholder(pos); i < len.current; i++) {
            if (tests.current[i]) {
                j = seekNext(i);
                t = buffer.current[i];
                buffer.current[i] = c;

                if (j < len.current && tests.current[j]?.test(t)) {
                    c = t;
                } else {
                    break;
                }
            }
        }
    };

    const handleAndroidInput = () => {
        const curVal = inputRef.current?.elementRef.current?.value as string;
        const pos = caret();

        if (!pos) {
            return;
        }

        if (oldVal.current && oldVal.current.length && oldVal.current.length > curVal.length) {
            // a deletion or backspace happened
            checkVal(true);
            while (pos.begin > 0 && !tests.current[pos.begin - 1]) pos.begin--;

            if (pos.begin === 0) {
                while (pos.begin < (firstNonMaskPos.current ?? 0) && !tests.current[pos.begin]) pos.begin++;
            }

            caret(pos.begin, pos.begin);
        } else {
            checkVal(true);
            while (pos.begin < len.current && !tests.current[pos.begin]) pos.begin++;

            caret(pos.begin, pos.begin);
        }
    };

    const clearBuffer = (start: number, end: number) => {
        let i;

        for (i = start; i < end && i < len.current; i++) {
            if (tests.current[i]) {
                buffer.current[i] = getPlaceholder(i);
            }
        }
    };

    const writeBuffer = () => {
        if (inputRef.current?.elementRef.current) {
            inputRef.current.elementRef.current.value = buffer.current.join('');
        }
    };

    const checkVal = (allow = false): number => {
        //try to place characters where they belong
        const test = inputRef.current?.elementRef.current?.value;
        let lastMatch = -1,
            i,
            c,
            pos;

        for (i = 0, pos = 0; i < len.current; i++) {
            const currentTest = tests.current[i];

            if (currentTest !== null) {
                buffer.current[i] = getPlaceholder(i);

                while (pos++ < (test?.length ?? 0)) {
                    c = test?.charAt(pos - 1) ?? '';

                    if (currentTest.test(c)) {
                        buffer.current[i] = c;
                        lastMatch = i;
                        break;
                    }
                }

                if (pos > (test?.length ?? 0)) {
                    clearBuffer(i + 1, len.current);
                    break;
                }
            } else {
                if (buffer.current[i] === test?.charAt(pos)) {
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
            if (autoClear || buffer.current.join('') === defaultBuffer.current) {
                // Invalid value. Remove it and replace it with the
                // mask, which is the default behavior.
                if (inputRef.current?.elementRef.current?.value) {
                    inputRef.current.elementRef.current.value = '';
                }

                clearBuffer(0, len.current);
            } else {
                // Invalid value, but we opt to show the value to the
                // user and allow them to correct their mistake.
                writeBuffer();
            }
        } else {
            writeBuffer();

            if (inputRef.current?.elementRef.current) {
                inputRef.current.elementRef.current.value = inputRef.current.elementRef.current.value.substring(0, lastMatch + 1);
            }
        }

        return partialPosition.current ? i : (firstNonMaskPos.current ?? 0);
    };

    const handleInputChange = (event: React.FormEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
        const isPasteEvent = event.type === 'paste';

        if (readOnly || isPasteEvent) {
            return;
        }

        const pos = checkVal(true);

        caret(pos);
        updateModelValue((event.target as HTMLInputElement).value);
    };

    const unmaskValue = (value: string) => {
        const unmaskedBuffer = [];
        const thisbuffer = value.split('');

        for (let i = 0; i < thisbuffer.length; i++) {
            const c = thisbuffer[i];

            if (tests.current[i] && c !== getPlaceholder(i)) {
                unmaskedBuffer.push(c);
            }
        }

        return unmaskedBuffer.join('');
    };

    const updateModelValue = (value: string) => {
        if (currentVal.current === value) return;

        const val = unmask ? unmaskValue(value) : value;
        const finalValue = defaultBuffer.current !== val ? val : '';

        currentVal.current = value;

        if (inputRef.current?.elementRef.current) {
            inputRef.current.elementRef.current.value = finalValue;
        }

        // Call the onMaskChange callback to update React state
        if (onMaskChange) {
            onMaskChange({ value: finalValue });
        }
    };

    const updateValue = (updateModel = true) => {
        if (inputRef.current?.elementRef.current) {
            if (inputRef.current.elementRef.current.value == null) {
                inputRef.current.elementRef.current.value = '';

                if (updateModel) {
                    updateModelValue('');
                }
            } else {
                checkVal();

                setTimeout(() => {
                    if (inputRef.current?.elementRef.current) {
                        writeBuffer();
                        checkVal();

                        if (updateModel) updateModelValue(inputRef.current.elementRef.current.value);
                    }
                }, 10);
            }

            focusText.current = inputRef.current.elementRef.current.value;
        }
    };

    const initMask = () => {
        tests.current = [];
        partialPosition.current = mask ? mask.length : 0;
        len.current = mask ? mask.length : 0;
        firstNonMaskPos.current = null;
        const defs = {
            9: '[0-9]',
            a: '[A-Za-z]',
            '*': '[A-Za-z0-9]'
        } as Record<string, string>;

        const ua = getUserAgent();

        androidChrome.current = /chrome/i.test(ua) && /android/i.test(ua);

        const maskTokens = mask ? mask.split('') : '';

        for (let i = 0; i < maskTokens.length; i++) {
            const c = maskTokens[i];

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
            const c = maskTokens[i];

            if (c !== '?') {
                if (defs[c]) buffer.current.push(getPlaceholder(i));
                else buffer.current.push(c);
            }
        }

        defaultBuffer.current = buffer.current.join('');

        updateValue(false);
    };

    useMountEffect(() => {
        initMask();
    });

    return {
        onMaskInput,
        onMaskKeyDown,
        onMaskKeyPress,
        onMaskFocus,
        onMaskBlur,
        onMaskPaste
    };
}
