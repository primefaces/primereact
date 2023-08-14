import { ComponentBase } from '../componentbase/ComponentBase';

export const InputTextareaBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputTextarea',
        autoResize: false,
        keyfilter: null,
        onBlur: null,
        onFocus: null,
        onBeforeInput: null,
        onInput: null,
        onKeyDown: null,
        onKeyUp: null,
        onPaste: null,
        tooltip: null,
        tooltipOptions: null,
        validateOnly: false,
        children: undefined
    }
});
