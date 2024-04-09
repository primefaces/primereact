import { ComponentBase } from '../componentbase/ComponentBase';

const classes = {
    root: 'p-inputotp p-component',
    input: 'p-inputotp-input'
};

export const InputOtpBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputOtp',
        __parentMetadata: null,
        className: null,
        modelValue: false,
        invalid: false,
        disabled: false,
        readOnly: false,
        variant: null,
        tabIndex: null,
        length: 4,
        mask: false,
        integerOnly: false
    },
    css: {
        classes
    }
});
