import { ObjectUtils } from '../utils/Utils';

export const DropdownBase = {
    defaultProps: {
        __TYPE: 'Dropdown',
        appendTo: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        autoFocus: false,
        className: null,
        clearIcon: null,
        dataKey: null,
        disabled: false,
        dropdownIcon: null,
        editable: false,
        emptyFilterMessage: null,
        emptyMessage: null,
        filter: false,
        filterIcon: null,
        filterBy: null,
        filterClearIcon: null,
        filterInputAutoFocus: true,
        filterLocale: undefined,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterTemplate: null,
        focusInputRef: null,
        id: null,
        inputId: null,
        inputRef: null,
        itemTemplate: null,
        maxLength: null,
        name: null,
        onBlur: null,
        onChange: null,
        onContextMenu: null,
        onFilter: null,
        onFocus: null,
        onHide: null,
        onMouseDown: null,
        onShow: null,
        optionDisabled: null,
        optionGroupChildren: null,
        optionGroupLabel: null,
        optionGroupTemplate: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        panelClassName: null,
        panelStyle: null,
        placeholder: null,
        required: false,
        resetFilterOnHide: false,
        scrollHeight: '200px',
        showClear: false,
        showFilterClear: false,
        showOnFocus: false,
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        transitionOptions: null,
        value: null,
        valueTemplate: null,
        virtualScrollerOptions: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, DropdownBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, DropdownBase.defaultProps)
};
