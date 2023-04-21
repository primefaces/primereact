import { ObjectUtils } from '../utils/Utils';

export const RadioButtonBase = {
    defaultProps: {
        __TYPE: 'RadioButton',
        id: null,
        inputRef: null,
        inputId: null,
        name: null,
        value: null,
        checked: false,
        style: null,
        className: null,
        disabled: false,
        required: false,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, RadioButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RadioButtonBase.defaultProps)
};
