import { ObjectUtils } from '../utils/Utils';

export const InputMaskBase = {
    defaultProps: {
        __TYPE: 'InputMask',
        autoClear: true,
        autoFocus: false,
        className: null,
        disabled: false,
        id: null,
        mask: null,
        maxLength: null,
        name: null,
        onBlur: null,
        onChange: null,
        onComplete: null,
        onFocus: null,
        placeholder: null,
        readOnly: false,
        required: false,
        size: null,
        slotChar: '_',
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        type: 'text',
        unmask: false,
        value: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, InputMaskBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InputMaskBase.defaultProps)
};
