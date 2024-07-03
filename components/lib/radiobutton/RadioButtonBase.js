import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, context }) =>
        classNames('p-radiobutton p-component', {
            'p-highlight': props.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : context && context.inputStyle === 'filled'
        }),
    radiobuttonbox: 'p-radiobutton-box',
    radiobuttoninput: 'p-radiobutton-input',
    radiobuttonicon: 'p-radiobutton-icon'
};

export const RadioButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'RadioButton',
        autoFocus: false,
        checked: false,
        className: null,
        disabled: false,
        id: null,
        inputId: null,
        inputRef: null,
        invalid: false,
        variant: null,
        name: null,
        onChange: null,
        onClick: null,
        required: false,
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        value: null,
        children: undefined
    },
    css: {
        classes
    }
});
