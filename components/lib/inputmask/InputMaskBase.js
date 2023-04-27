import { ObjectUtils } from '../utils/Utils';

export const InputMaskBase = {
    defaultProps: {
        __TYPE: 'InputMask',
        id: null,
        value: null,
        type: 'text',
        mask: null,
        slotChar: '_',
        autoClear: true,
        unmask: false,
        style: null,
        className: null,
        placeholder: null,
        size: null,
        maxLength: null,
        tabIndex: null,
        disabled: false,
        readOnly: false,
        name: null,
        required: false,
        tooltip: null,
        tooltipOptions: null,
        onComplete: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, InputMaskBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InputMaskBase.defaultProps)
};
