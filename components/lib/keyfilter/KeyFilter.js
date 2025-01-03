import { DomHandler } from '../utils/Utils';

export const KeyFilter = {
    /* eslint-disable */
    DEFAULT_MASKS: {
        pint: /[\d]/,
        int: /[\d\-]/,
        pnum: /[\d\.]/,
        money: /[\d\.\s,]/,
        num: /[\d\-\.]/,
        hex: /[0-9a-f]/i,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/i
    },
    /* eslint-enable */

    getRegex(keyfilter) {
        return KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;
    },

    onBeforeInput(e, keyfilter, validateOnly) {
        // android devices must use beforeinput https://stackoverflow.com/questions/36753548/keycode-on-android-is-always-229
        if (validateOnly || !DomHandler.isAndroid()) {
            return;
        }

        this.validateKey(e, e.data, keyfilter);
    },

    onKeyPress(e, keyfilter, validateOnly) {
        // non android devices use keydown
        if (validateOnly || DomHandler.isAndroid()) {
            return;
        }

        if (e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        this.validateKey(e, e.key, keyfilter);
    },

    onPaste(e, keyfilter, validateOnly) {
        if (validateOnly) {
            return;
        }

        const regex = this.getRegex(keyfilter);
        const clipboard = e.clipboardData.getData('text');

        // loop over each letter pasted and if any fail prevent the paste
        [...clipboard].forEach((c) => {
            if (!regex.test(c)) {
                e.preventDefault();

                return false;
            }
        });
    },

    validateKey(e, key, keyfilter) {
        if (key === null || key === undefined) {
            return;
        }

        // some AZERTY keys come in with 2 chars like ´ç if Dead key is pressed first
        const isPrintableKey = key.length <= 2;

        if (!isPrintableKey) {
            return;
        }

        const value = e.target.value;
        const regex = this.getRegex(keyfilter);

        this.validateSpecialKey(e, key, keyfilter, regex, value)
    },

    validate(e, keyfilter) {
        let value = e.target.value;
        let validatePattern = true;

        const regex = this.getRegex(keyfilter);

        if (value && !regex.test(value)) {
            validatePattern = false;
        }

        return validatePattern;
    },

    validateSpecialKey(e, key, keyfilter, regex, value) {
        if (['int', 'num'].includes(keyfilter)) {
            const isDash = key === '-';
            const isDot = key === '.';

            if (
                (isDash && (value.includes('-') || value.length > 0)) ||
                (keyfilter === 'num' && isDot && value.includes('.')) ||
                !regex.test(key)
            ) {
                e.preventDefault();
            }
        } else {
            if (!regex.test(key)) {
                e.preventDefault();
            }
        }
    }
};
