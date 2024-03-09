import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState, overlayVisibleState }) =>
        classNames('p-multiselect p-component p-inputwrapper', {
            'p-multiselect-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-multiselect-clearable': props.showClear && !props.disabled,
            'p-focus': focusedState,
            'p-inputwrapper-filled': ObjectUtils.isNotEmpty(props.value),
            'p-inputwrapper-focus': focusedState || overlayVisibleState
        }),
    label: ({ props, empty }) =>
        classNames('p-multiselect-label', {
            'p-placeholder': empty && props.placeholder,
            'p-multiselect-label-empty': empty && !props.placeholder && !props.selectedItemTemplate,
            'p-multiselect-items-label': !empty && props.display !== 'chip' && props.value.length > props.maxSelectedLabels
        }),
    panel: ({ panelProps: props, context, allowOptionSelect }) =>
        classNames('p-multiselect-panel p-component', {
            'p-multiselect-inline': props.inline,
            'p-multiselect-flex': props.flex,
            'p-multiselect-limited': !allowOptionSelect,
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    list: ({ virtualScrollerOptions }) => (virtualScrollerOptions ? 'p-multiselect-items p-component' : 'p-multiselect-items p-component'),
    labelContainer: 'p-multiselect-label-container',
    triggerIcon: 'p-multiselect-trigger-icon p-c',
    trigger: 'p-multiselect-trigger',
    clearIcon: 'p-multiselect-clear-icon',
    tokenLabel: 'p-multiselect-token-label',
    token: 'p-multiselect-token',
    removeTokenIcon: 'p-multiselect-token-icon',
    wrapper: 'p-multiselect-items-wrapper',
    emptyMessage: 'p-multiselect-empty-message',
    itemGroup: 'p-multiselect-item-group',
    closeButton: 'p-multiselect-close p-link',
    header: 'p-multiselect-header',
    closeIcon: 'p-multiselect-close-icon',
    headerCheckboxContainer: 'p-multiselect-select-all',
    headerCheckboxIcon: 'p-multiselect-select-all p-checkbox-icon p-c',
    headerSelectAllLabel: 'p-multiselect-select-all-label',
    filterContainer: 'p-multiselect-filter-container',
    filterIcon: 'p-multiselect-filter-icon',
    item: ({ itemProps: props }) =>
        classNames('p-multiselect-item', {
            'p-highlight': props.selected,
            'p-disabled': props.disabled,
            'p-focus': props.focusedOptionIndex === props.index
        }),
    checkboxContainer: 'p-checkbox p-component',
    checkboxIcon: 'p-checkbox-icon p-c',
    checkbox: ({ itemProps: props }) =>
        classNames('p-checkbox-box', {
            'p-highlight': props.selected
        }),
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-multiselect {
        display: inline-flex;
        user-select: none;
        cursor: pointer;
    }
    
    .p-multiselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        cursor: pointer;
    }
    
    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }
    
    .p-multiselect-label  {
        display: block;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }
    
    .p-multiselect-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }
    
    .p-multiselect-token-icon {
        cursor: pointer;
    }
    
    .p-multiselect .p-multiselect-panel {
        min-width: 100%;
    }
    
    .p-multiselect-inline.p-multiselect-panel {
        border: none;
        position: initial;
        background: none;
        box-shadow: none;
    }
    
    .p-multiselect-inline.p-multiselect-panel .p-multiselect-items {
        padding: 0;
    }
    
    .p-multiselect-flex.p-multiselect-panel .p-multiselect-items {
        display: flex;
        flex-wrap: wrap;
    }
    
    .p-multiselect-items-wrapper {
        overflow: auto;
    }
    
    .p-multiselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-multiselect-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        outline: none;
    }
    
    .p-multiselect-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .p-multiselect-select-all-label {
        margin-left: 0.5rem;
    }
    
    .p-multiselect-filter-container {
        position: relative;
        flex: 1 1 auto;
    }
    
    .p-multiselect-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-multiselect-filter-container .p-inputtext {
        width: 100%;
    }
    
    .p-multiselect-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
        margin-left: auto;
    }
    
    .p-multiselect-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
        right: 3rem;
    }
    
    .p-fluid .p-multiselect {
        display: flex;
    }
}
`;

const inlineStyles = {
    root: ({ props }) =>
        props.showClear &&
        !props.disabled && {
            position: 'relative'
        },
    itemGroup: ({ scrollerOptions }) => ({ height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined })
};

export const MultiSelectBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'MultiSelect',
        appendTo: null,
        ariaLabelledBy: null,
        checkboxIcon: null,
        className: null,
        clearIcon: null,
        closeIcon: null,
        dataKey: null,
        disabled: false,
        display: 'comma',
        dropdownIcon: null,
        emptyFilterMessage: null,
        emptyMessage: null,
        filter: false,
        filterBy: null,
        filterInputAutoFocus: true,
        filterLocale: undefined,
        selectOnFocus: false,
        autoOptionFocus: false,
        filterMatchMode: 'contains',
        filterPlaceholder: null,
        filterTemplate: null,
        fixedPlaceholder: false,
        flex: false,
        id: null,
        inline: false,
        inputId: null,
        inputRef: null,
        itemCheckboxIcon: null,
        itemClassName: null,
        itemTemplate: null,
        loading: false,
        maxSelectedLabels: null,
        name: null,
        onBlur: null,
        onChange: null,
        onClick: null,
        onFilter: null,
        onFocus: null,
        onHide: null,
        onRemove: null,
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
        selectAllLabel: null,
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
    css: {
        classes,
        styles,
        inlineStyles
    }
});
