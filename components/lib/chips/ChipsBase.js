import { ComponentBase } from '../componentbase/ComponentBase';

export const ChipsBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Chips',
        addOnBlur: null,
        allowDuplicate: true,
        ariaLabelledBy: null,
        autoFocus: false,
        className: null,
        disabled: null,
        id: null,
        inputId: null,
        inputRef: null,
        itemTemplate: null,
        keyfilter: null,
        max: null,
        name: null,
        onAdd: null,
        onBlur: null,
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onRemove: null,
        placeholder: null,
        readOnly: false,
        removable: true,
        removeIcon: null,
        separator: null,
        style: null,
        tooltip: null,
        tooltipOptions: null,
        value: null,
        children: undefined
    }
});
