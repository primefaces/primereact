import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState }) =>
        classNames('p-radiobutton p-component', {
            'p-radiobutton-checked': props.checked,
            'p-radiobutton-disabled': props.disabled,
            'p-radiobutton-focused': focusedState
        }),
    input: ({ props, focusedState }) =>
        classNames('p-radiobutton-box', {
            'p-highlight': props.checked,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        }),
    icon: 'p-radiobutton-icon'
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
