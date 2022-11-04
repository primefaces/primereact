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

    onKeyPress(e, keyfilter, validateOnly) {
        if (validateOnly) {
            return;
        }

        if (e.ctrlKey || e.altKey) {
            return;
        }

        const isPrintableKey = e.key.length === 1;

        if (!isPrintableKey) {
            return;
        }

        const regex = this.getRegex(keyfilter);

        if (!regex.test(e.key)) {
            e.preventDefault();
        }
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

    validate(e, keyfilter) {
        let value = e.target.value,
            validatePattern = true;

        const regex = this.getRegex(keyfilter);

        if (value && !regex.test(value)) {
            validatePattern = false;
        }

        return validatePattern;
    }
};
