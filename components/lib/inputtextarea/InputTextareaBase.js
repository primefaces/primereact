import { ObjectUtils } from '../utils/Utils';

export const InputTextareaBase = {
    defaultProps: {
        __TYPE: 'InputTextarea',
        autoResize: false,
        keyfilter: null,
        onBlur: null,
        onFocus: null,
        onInput: null,
        onKeyDown: null,
        onKeyUp: null,
        onPaste: null,
        tooltip: null,
        tooltipOptions: null,
        validateOnly: false,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, InputTextareaBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InputTextareaBase.defaultProps)
};
