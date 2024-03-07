import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    icon: 'p-checkbox-icon p-c',
    input: ({ props, checked, focusedState }) =>
        classNames('p-checkbox-box', {
            'p-highlight': checked,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        }),
    root: ({ props, checked, focusedState }) =>
        classNames('p-checkbox p-component', {
            'p-checkbox-checked': checked,
            'p-checkbox-disabled': props.disabled,
            'p-checkbox-focused': focusedState
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
        name: null,
        onChange: null,
        onClick: null,
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
