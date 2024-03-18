import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, isFilled }) =>
        classNames(
            'p-inputtext p-component',
            {
                'p-disabled': props.disabled,
                'p-filled': isFilled,
                'p-invalid': props.invalid
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
