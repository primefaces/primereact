import { ComponentBase } from '../componentbase/ComponentBase';

export const ColorPickerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ColorPicker',
        appendTo: null,
        autoFocus: false,
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
    }
});
