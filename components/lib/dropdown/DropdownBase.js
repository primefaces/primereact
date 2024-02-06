import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState, overlayVisibleState }) =>
        classNames('p-dropdown p-component p-inputwrapper', {
            'p-disabled': props.disabled,
            'p-focus': focusedState,
            'p-dropdown-clearable': props.showClear && !props.disabled,
            'p-inputwrapper-filled': ObjectUtils.isNotEmpty(props.value),
            'p-inputwrapper-focus': focusedState || overlayVisibleState
        }),
    input: ({ props, label }) =>
        props.editable
            ? 'p-dropdown-label p-inputtext'
            : classNames('p-dropdown-label p-inputtext', {
                  'p-placeholder': label === null && props.placeholder,
                  'p-dropdown-label-empty': label === null && !props.placeholder
              }),
    trigger: 'p-dropdown-trigger',
    emptyMessage: 'p-dropdown-empty-message',
    itemGroup: ({ optionGroupLabel }) =>
        classNames('p-dropdown-item-group', {
            'p-dropdown-item-empty': !optionGroupLabel || optionGroupLabel.length === 0
        }),
    dropdownIcon: 'p-dropdown-trigger-icon p-clickable',
    loadingIcon: 'p-dropdown-trigger-icon p-clickable',
    clearIcon: 'p-dropdown-clear-icon p-clickable',
    filterIcon: 'p-dropdown-filter-icon',
    filterClearIcon: 'p-dropdown-filter-clear-icon',
    filterContainer: ({ clearIcon }) => classNames('p-dropdown-filter-container', { 'p-dropdown-clearable-filter': !!clearIcon }),
    filterInput: 'p-dropdown-filter p-inputtext p-component',
    list: ({ virtualScrollerOptions }) => (virtualScrollerOptions ? 'p-dropdown-items' : 'p-dropdown-items'),
    panel: ({ context }) =>
        classNames('p-dropdown-panel p-component', {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    item: ({ selected, disabled, label, index, focusedOptionIndex }) =>
        classNames('p-dropdown-item', {
            'p-highlight': selected,
            'p-disabled': disabled,
            'p-focus': index === focusedOptionIndex,
            'p-dropdown-item-empty': !label || label.length === 0
        }),
    wrapper: 'p-dropdown-items-wrapper',
    header: 'p-dropdown-header',
    footer: 'p-dropdown-footer',
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-dropdown {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }
    
    .p-dropdown-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .p-dropdown-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    
    .p-dropdown-label-empty {
        overflow: hidden;
        visibility: hidden;
    }
    
    input.p-dropdown-label  {
        cursor: default;
    }
    
    .p-dropdown .p-dropdown-panel {
        min-width: 100%;
    }
    
    .p-dropdown-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-dropdown-items-wrapper {
        overflow: auto;
    }
    
    .p-dropdown-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    
    .p-dropdown-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-dropdown-filter {
        width: 100%;
    }
    
    .p-dropdown-filter-container {
        position: relative;
    }
    
    .p-dropdown-clear-icon,
    .p-dropdown-filter-icon,
    .p-dropdown-filter-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-fluid .p-dropdown {
        display: flex;
    }
    
    .p-fluid .p-dropdown .p-dropdown-label {
        width: 1%;
    }
}
`;

const inlineStyles = {
    wrapper: ({ props }) => ({ maxHeight: props.scrollHeight || 'auto' }),
    panel: ({ props }) => {
        props.panelStyle;
    }
};

export const DropdownBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Dropdown',
        __parentMetadata: null,
        appendTo: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        autoFocus: false,
        children: undefined,
        className: null,
        clearIcon: null,
        dataKey: null,
        disabled: false,
        dropdownIcon: null,
        editable: false,
        emptyFilterMessage: null,
        emptyMessage: null,
        filter: false,
        filterBy: null,
        filterClearIcon: null,
        filterIcon: null,
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
        loading: false,
        loadingIcon: null,
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
        optionGroupChildren: 'items',
        selectOnFocus: false,
        autoOptionFocus: false,
        optionGroupLabel: null,
        optionGroupTemplate: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        panelClassName: null,
        panelFooterTemplate: null,
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
        virtualScrollerOptions: null
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
