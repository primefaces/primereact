import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
