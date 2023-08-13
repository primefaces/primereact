import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, isFilled }) =>
        classNames(
            'p-inputtext p-component',
            {
                'p-disabled': props.disabled,
                'p-filled': isFilled
            },
            props.className
        )
};

export const InputTextBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputText',
        keyfilter: null,
        validateOnly: false,
        tooltip: null,
        tooltipOptions: null,
        onBeforeInput: null,
        onInput: null,
        onKeyDown: null,
        onPaste: null,
        children: undefined
    },

    css: {
        classes
    }
});
