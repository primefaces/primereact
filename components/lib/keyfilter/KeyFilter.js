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

    KEYS: {
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        BACKSPACE: 8,
        DELETE: 46
    },

    SAFARI_KEYS: {
        63234: 37, // left
        63235: 39, // right
        63232: 38, // up
        63233: 40, // down
        63276: 33, // page up
        63277: 34, // page down
        63272: 46, // delete
        63273: 36, // home
        63275: 35  // end
    },

    isNavKeyPress(e) {
        let k = e.keyCode;
        k = DomHandler.getBrowser().safari ? (KeyFilter.SAFARI_KEYS[k] || k) : k;

        return (k >= 33 && k <= 40) || k === KeyFilter.KEYS.RETURN || k === KeyFilter.KEYS.TAB || k === KeyFilter.KEYS.ESC;
    },

    isSpecialKey(e) {
        let k = e.keyCode;

        return k === 9 || k === 13 || k === 27 || k === 16 || k === 17 || (k >= 18 && k <= 20) ||
            (DomHandler.getBrowser().opera && !e.shiftKey && (k === 8 || (k >= 33 && k <= 35) || (k >= 36 && k <= 39) || (k >= 44 && k <= 45)));
    },

    getKey(e) {
        let k = e.keyCode || e.charCode;
        return DomHandler.getBrowser().safari ? (KeyFilter.SAFARI_KEYS[k] || k) : k;
    },

    getCharCode(e) {
        return e.charCode || e.keyCode || e.which;
    },

    getRegex(keyfilter) {
        return KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;
    },

    onKeyPress(e, keyfilter, validateOnly) {
        if (validateOnly) {
            return;
        }

        const regex = this.getRegex(keyfilter);
        const browser = DomHandler.getBrowser();

        if (e.ctrlKey || e.altKey) {
            return;
        }

        const k = this.getKey(e);
        if (browser.mozilla && (this.isNavKeyPress(e) || k === KeyFilter.KEYS.BACKSPACE || (k === KeyFilter.KEYS.DELETE && e.charCode === 0))) {
            return;
        }

        const c = this.getCharCode(e);
        const cc = String.fromCharCode(c);

        if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
            return;
        }

        if (!regex.test(cc)) {
            e.preventDefault();
        }
    },

    onPaste(e, keyfilter, validateOnly) {
        if (validateOnly) {
            return;
        }

        const regex = this.getRegex(keyfilter);
        const clipboard = e.clipboardData.getData("text");
        
        // loop over each letter pasted and if any fail prevent the paste
        [...clipboard].forEach(c => {
            if (!regex.test(c)) {
               e.preventDefault();
               return false;
            }
        });
    },

    validate(e, keyfilter) {
        let value = e.target.value,
            validatePattern = true;

        if (value && !keyfilter.test(value)) {
            validatePattern = false;
        }

        return validatePattern;
    }
}
