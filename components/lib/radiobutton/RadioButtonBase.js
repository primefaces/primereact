import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames('p-radiobutton p-component', {
            'p-highlight': props.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }),
    box: 'p-radiobutton-box',
    input: 'p-radiobutton-input',
    icon: 'p-radiobutton-icon'
};

const styles = `
@layer primereact {
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
    }

    .p-radiobutton-input {
        cursor: pointer;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-radiobutton-icon {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0) scale(.1);
        border-radius: 50%;
        visibility: hidden;
    }

    .p-radiobutton.p-highlight .p-radiobutton-icon {
        transform: translateZ(0) scale(1.0, 1.0);
        visibility: visible;
    }
}
`;

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
        classes,
        styles
    }
});
