import { ObjectUtils } from '../utils/Utils';

export const InputNumberBase = {
    defaultProps: {
        __TYPE: 'InputNumber',
        allowEmpty: true,
        ariaLabelledBy: null,
        autoFocus: false,
        buttonLayout: 'stacked',
        className: null,
        currency: undefined,
        currencyDisplay: undefined,
        decrementButtonClassName: null,
        decrementButtonIcon: null,
        disabled: false,
        format: true,
        id: null,
        incrementButtonClassName: null,
        incrementButtonIcon: null,
        inputClassName: null,
        inputId: null,
        inputMode: null,
        inputRef: null,
        inputStyle: null,
        locale: undefined,
        localeMatcher: undefined,
        max: null,
        maxFractionDigits: undefined,
        maxLength: null,
        min: null,
        minFractionDigits: undefined,
        mode: 'decimal',
        name: null,
        onBlur: null,
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onValueChange: null,
        pattern: null,
        placeholder: null,
        prefix: null,
        readOnly: false,
        required: false,
        showButtons: false,
        size: null,
        step: 1,
        style: null,
        suffix: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        type: 'text',
        useGrouping: true,
        value: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, InputNumberBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InputNumberBase.defaultProps)
};
