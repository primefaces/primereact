import { ComponentBase } from '../componentbase/ComponentBase';

export const InputTextBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputText',
        keyfilter: null,
        validateOnly: false,
        tooltip: null,
        tooltipOptions: null,
        onBeforeInput: null,
        onInput: null,
        onKeyDown: null,
        onPaste: null,
        children: undefined
    }
});
