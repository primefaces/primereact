import { ObjectUtils } from '../utils/Utils';

export const ColorPickerBase = {
    defaultProps: {
        __TYPE: 'ColorPicker',
        appendTo: null,
        children: undefined,
        className: null,
        defaultColor: 'ff0000',
        disabled: false,
        format: 'hex',
        id: null,
        inline: false,
        inputClassName: null,
        inputId: null,
        inputRef: null,
        inputStyle: null,
        onChange: null,
        onHide: null,
        onShow: null,
        panelClassName: null,
        panelStyle: null,
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        transitionOptions: null,
        value: null
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ColorPickerBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ColorPickerBase.defaultProps)
};
