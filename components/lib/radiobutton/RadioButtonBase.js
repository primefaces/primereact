import { ObjectUtils } from '../utils/Utils';

export const RadioButtonBase = {
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
    getProps: (props) => ObjectUtils.getMergedProps(props, RadioButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RadioButtonBase.defaultProps)
};
