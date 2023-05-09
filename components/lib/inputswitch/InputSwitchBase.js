import { ObjectUtils } from '../utils/Utils';

export const InputSwitchBase = {
    defaultProps: {
        __TYPE: 'InputSwitch',
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
    getProps: (props) => ObjectUtils.getMergedProps(props, InputSwitchBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InputSwitchBase.defaultProps)
};
