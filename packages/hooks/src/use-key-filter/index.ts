import { isAndroid } from '@primeuix/utils';

/**
 * The options for the `useKeyFilter` hook.
 */
export interface UseKeyFilterOptions {
    /**
     * Sets the pattern for key filtering.
     * @default /./
     */
    pattern?: 'pint' | 'int' | 'pnum' | 'money' | 'num' | 'hex' | 'email' | 'alpha' | 'alphanum' | RegExp;
    /**
     * When enabled, instead of blocking keys, input is validated internally to test against the regular expression.
     * @default false
     */
    validateOnly?: boolean;
}

export interface UseKeyFilterExposes {
    /**
     * Handles input events for key filter.
     * Processes character input and composition events while applying the filter pattern.
     * @param event - The form or composition event from the input element
     */
    onBeforeInput: (event: React.CompositionEvent<HTMLInputElement>) => void;
    /**
     * Handles keypress events for character input validation.
     * Validates and places characters according to the filter pattern.
     * @param event - The keyboard event from the input element
     */
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Handles paste events for clipboard content insertion.
     * Processes pasted content according to the mask pattern.
     * @param event - The clipboard event from the input element
     */
    onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
    /**
     * Validates the current input value against the filter pattern.
     * @param event - The form event from the input element
     * @returns true if the value matches the pattern, false otherwise
     */
    validate: (event: React.FormEvent<HTMLInputElement>) => boolean;
}

export function useKeyFilter(options: UseKeyFilterOptions): UseKeyFilterExposes {
    const { pattern = /./, validateOnly = false } = options;

    const DEFAULT_MASKS = {
        pint: /[\d]/,
        int: /[\d-]/,
        pnum: /[\d.]/,
        money: /[\d.\s,]/,
        num: /[\d-.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_.-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/
    };

    const getRegex = (): RegExp => {
        return typeof pattern === 'string' ? DEFAULT_MASKS[pattern] : pattern;
    };

    const onBeforeInput = (event: React.CompositionEvent<HTMLInputElement>) => {
        // android devices must use beforeinput https://stackoverflow.com/questions/36753548/keycode-on-android-is-always-229
        if (validateOnly || !isAndroid()) {
            return;
        }

        validateKey(event, event.data);
    };

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // non android devices use keydown
        if (validateOnly || isAndroid()) {
            return;
        }

        if (event.ctrlKey || event.altKey || event.metaKey) {
            return;
        }

        validateKey(event, event.key);
    };

    const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        if (validateOnly) {
            return;
        }

        const regex = getRegex();
        const clipboard = event.clipboardData.getData('text');

        // loop over each letter pasted and if any fail prevent the paste
        [...clipboard].forEach((c) => {
            if (!regex.test(c)) {
                event.preventDefault();

                return false;
            }
        });
    };

    const validateKey = (event: React.CompositionEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>, key: string) => {
        if (key === null || key === undefined) {
            return;
        }

        // some AZERTY keys come in with 2 chars like ´ç if Dead key is pressed first
        const isPrintableKey = key.length <= 2;

        if (!isPrintableKey) {
            return;
        }

        const regex = getRegex();

        if (!regex.test(key)) {
            event.preventDefault();
        }
    };

    const validate = (event: React.FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        let validatePattern = true;

        const regex = getRegex();

        if (value && !regex.test(value)) {
            validatePattern = false;
        }

        return validatePattern;
    };

    return {
        onBeforeInput,
        onKeyPress,
        onPaste,
        validate
    };
}
