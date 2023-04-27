import { ObjectUtils } from '../utils/Utils';

export const ColorPickerBase = {
    defaultProps: {
        __TYPE: 'ColorPicker',
        appendTo: null,
        className: null,
        defaultColor: 'ff0000',
        disabled: false,
        format: 'hex',
        id: null,
        inline: false,
        inputId: null,
        inputRef: null,
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
        value: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ColorPickerBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ColorPickerBase.defaultProps)
};
