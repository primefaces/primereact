import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, checked }) =>
        classNames('p-inputswitch p-component', {
            'p-highlight': checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }),
    input: 'p-inputswitch-input',
    slider: 'p-inputswitch-slider'
};

export const InputSwitchBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputSwitch',
        autoFocus: false,
        checked: false,
        className: null,
        disabled: false,
        falseValue: false,
        id: null,
        inputId: null,
        inputRef: null,
        invalid: false,
        name: null,
        onBlur: null,
        onChange: null,
        onFocus: null,
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        trueValue: true,
        children: undefined
    },
    css: {
        classes
    }
});
