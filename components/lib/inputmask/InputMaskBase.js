import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, context }) =>
        classNames('p-inputmask', {
            'p-filled': props.filled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : context && context.inputStyle === 'filled'
        })
};

export const InputMaskBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputMask',
        autoClear: true,
        autoFocus: false,
        className: null,
        disabled: false,
        id: null,
        mask: null,
        maxLength: null,
        invalid: false,
        variant: null,
        name: null,
        onBlur: null,
        onChange: null,
        onComplete: null,
        onFocus: null,
        placeholder: null,
        readOnly: false,
        required: false,
        size: null,
        slotChar: '_',
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        type: 'text',
        unmask: false,
        value: null,
        children: undefined
    },
    css: {
        classes
    }
});
