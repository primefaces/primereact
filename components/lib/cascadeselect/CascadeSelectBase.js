import { ComponentBase } from '../componentbase/ComponentBase';

export const CascadeSelectBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'CascadeSelect',
        appendTo: null,
        ariaLabelledBy: null,
        autoFocus: false,
        breakpoint: undefined,
        className: null,
        dataKey: null,
        disabled: false,
        dropdownIcon: null,
        id: null,
        inputId: null,
        inputRef: null,
        itemTemplate: null,
        name: null,
        onBeforeHide: null,
        onBeforeShow: null,
        onChange: null,
        onGroupChange: null,
        onHide: null,
        onShow: null,
        optionGroupChildren: null,
        optionGroupIcon: null,
        optionGroupLabel: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        placeholder: null,
        scrollHeight: '400px',
        style: null,
        tabIndex: null,
        transitionOptions: null,
        value: null,
        children: undefined
    }
});
