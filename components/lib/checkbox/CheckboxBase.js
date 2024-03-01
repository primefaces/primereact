import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon',
    root: ({ props, checked, focusedState }) =>
        classNames('p-checkbox p-component', {
            'p-highlight': checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-variant-filled': props.variant === 'filled'
        })
};

const styles = `
@layer primereact {
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
    }

    .p-checkbox-input {
        cursor: pointer;
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`;

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
        classes,
        styles
    }
});
