import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon',
    root: ({ props, checked, context }) =>
        classNames('p-checkbox p-component', {
            'p-highlight': checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant ? props.variant === 'filled' : context && context.inputStyle === 'filled'
        })
};

export const CheckboxBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Checkbox',
        autoFocus: false,
        checked: false,
        className: null,
        disabled: false,
        falseValue: false,
        icon: null,
        id: null,
        inputId: null,
        inputRef: null,
        invalid: false,
        variant: null,
        name: null,
        onChange: null,
        onContextMenu: null,
        onMouseDown: null,
        readOnly: false,
        required: false,
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        trueValue: true,
        value: null,
        children: undefined
    },
    css: {
        classes
    }
});
