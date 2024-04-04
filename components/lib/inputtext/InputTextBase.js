import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, isFilled, context }) =>
        classNames(
            'p-inputtext p-component',
            {
                'p-disabled': props.disabled,
                'p-filled': isFilled,
                'p-invalid': props.invalid,
                'p-variant-filled': props.variant ? props.variant === 'filled' : context && context.inputStyle === 'filled'
            },

            props.className
        )
};

export const InputTextBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputText',
        __parentMetadata: null,
        children: undefined,
        className: null,
        invalid: false,
        variant: null,
        keyfilter: null,
        onBeforeInput: null,
        onInput: null,
        onKeyDown: null,
        onPaste: null,
        tooltip: null,
        tooltipOptions: null,
        validateOnly: false
    },

    css: {
        classes
    }
});
