import { ObjectUtils } from '../utils/Utils';

export const InputTextBase = {
    defaultProps: {
        __TYPE: 'InputText',
        keyfilter: null,
        validateOnly: false,
        tooltip: null,
        tooltipOptions: null,
        onInput: null,
        onKeyDown: null,
        onPaste: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, InputTextBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, InputTextBase.defaultProps)
};
