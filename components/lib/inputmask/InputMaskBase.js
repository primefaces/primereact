import { ComponentBase } from '../componentbase/ComponentBase';

export const InputMaskBase = ComponentBase.extend({
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
    }
});
