import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState, checked }) =>
        classNames('p-inputswitch p-component', {
            'p-inputswitch-checked': checked,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        }),
    slider: 'p-inputswitch-slider'
};

const styles = `
@layer primereact {
    .p-inputswitch {
        position: relative;
        display: inline-block;
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
        content: "";
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
