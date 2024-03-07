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

const styles = `
@layer primereact {
    .p-radiobutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        vertical-align: bottom;
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
    
    .p-radiobutton-box.p-highlight .p-radiobutton-icon {
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
