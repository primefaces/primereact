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

const styles = `
@layer primereact {
    .p-inputswitch {
        position: relative;
        display: inline-block;
    }

    .p-inputswitch-input {
        appearance: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        cursor: pointer;
    }

    .p-inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
    }

    .p-inputswitch-slider:before {
        position: absolute;
        content: '';
        top: 50%;
    }
}
`;

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
        classes,
        styles
    }
});
