import { ObjectUtils } from '../utils/Utils';

export const MultiSelectBase = {
    defaultProps: {
        __TYPE: 'MultiSelect',
        appendTo: null,
        ariaLabelledBy: null,
        className: null,
        closeIcon: null,
        checkboxIcon: null,
        dataKey: null,
        disabled: false,
        display: 'comma',
        dropdownIcon: null,
        emptyFilterMessage: null,
        filter: false,
        filterBy: null,
        filterInputAutoFocus: true,
        filterLocale: undefined,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterTemplate: null,
        fixedPlaceholder: false,
        flex: false,
        id: null,
        itemCheckboxIcon: null,
        inline: false,
        inputId: null,
        inputRef: null,
        itemClassName: null,
        itemTemplate: null,
        maxSelectedLabels: null,
        name: null,
        onBlur: null,
        onChange: null,
        onFilter: null,
        onFocus: null,
        onHide: null,
        onSelectAll: null,
        onShow: null,
        optionDisabled: null,
        optionGroupChildren: null,
        optionGroupLabel: null,
        optionGroupTemplate: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        overlayVisible: false,
        panelClassName: null,
        panelFooterTemplate: null,
        panelHeaderTemplate: null,
        panelStyle: null,
        placeholder: null,
        removeIcon: null,
        resetFilterOnHide: false,
        scrollHeight: '200px',
        selectAll: false,
        selectedItemTemplate: null,
        selectedItemsLabel: '{0} items selected',
        selectionLimit: null,
        showClear: false,
        showSelectAll: true,
        style: null,
        tabIndex: 0,
        tooltip: null,
        tooltipOptions: null,
        transitionOptions: null,
        useOptionAsValue: false,
        value: null,
        virtualScrollerOptions: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MultiSelectBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MultiSelectBase.defaultProps)
};
