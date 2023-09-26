import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState }) =>
        classNames('p-autocomplete p-component p-inputwrapper', {
            'p-autocomplete-dd': props.dropdown,
            'p-autocomplete-multiple': props.multiple,
            'p-inputwrapper-filled': props.value,
            'p-inputwrapper-focus': focusedState
        }),
    container: ({ props }) =>
        classNames('p-autocomplete-multiple-container p-component p-inputtext', {
            'p-disabled': props.disabled
        }),
    loadingIcon: 'p-autocomplete-loader',
    dropdownButton: 'p-autocomplete-dropdown',
    removeTokenIcon: 'p-autocomplete-token-icon',
    token: 'p-autocomplete-token p-highlight',
    tokenLabel: 'p-autocomplete-token-label',
    inputToken: 'p-autocomplete-input-token',
    input: ({ props }) =>
        classNames('p-autocomplete-input', {
            'p-autocomplete-dd-input': props.dropdown
        }),
    panel: ({ context }) =>
        classNames('p-autocomplete-panel p-component', {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    listWrapper: 'p-autocomplete-items-wrapper',
    list: ({ virtualScrollerOptions, options }) => (virtualScrollerOptions ? classNames('p-autocomplete-items', options.className) : 'p-autocomplete-items'),
    emptyMessage: 'p-autocomplete-item',
    item: ({ suggestion, optionGroupLabel }) => (optionGroupLabel ? classNames('p-autocomplete-item', { 'p-disabled': suggestion.disabled }) : classNames('p-autocomplete-item', { 'p-disabled': suggestion.disabled })),
    itemGroup: 'p-autocomplete-item-group',
    footer: 'p-autocomplete-footer',
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-autocomplete {
        display: inline-flex;
        position: relative;
    }
    
    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-autocomplete-dd .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }
    
    .p-autocomplete-dd .p-autocomplete-input,
    .p-autocomplete-dd .p-autocomplete-multiple-container {
         border-top-right-radius: 0;
         border-bottom-right-radius: 0;
     }
    
    .p-autocomplete-dd .p-autocomplete-dropdown {
         border-top-left-radius: 0;
         border-bottom-left-radius: 0px;
    }
    
    .p-autocomplete .p-autocomplete-panel {
        min-width: 100%;
    }
    
    .p-autocomplete-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-autocomplete-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-autocomplete-item {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    
    .p-autocomplete-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-autocomplete-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }
    
    .p-autocomplete-token-icon {
        cursor: pointer;
    }
    
    .p-autocomplete-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }
    
    .p-autocomplete-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }
    
    .p-fluid .p-autocomplete {
        display: flex;
    }
    
    .p-fluid .p-autocomplete-dd .p-autocomplete-input {
        width: 1%;
    }
    
    .p-autocomplete-items-wrapper {
        overflow: auto;
    } 
}
`;

export const AutoCompleteBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'AutoComplete',
        id: null,
        appendTo: null,
        autoFocus: false,
        autoHighlight: false,
        className: null,
        completeMethod: null,
        delay: 300,
        disabled: false,
        dropdown: false,
        dropdownAriaLabel: null,
        dropdownAutoFocus: true,
        dropdownIcon: null,
        dropdownMode: 'blank',
        emptyMessage: null,
        field: null,
        forceSelection: false,
        inputClassName: null,
        inputId: null,
        inputRef: null,
        inputStyle: null,
        itemTemplate: null,
        loadingIcon: null,
        maxLength: null,
        minLength: 1,
        multiple: false,
        name: null,
        onBlur: null,
        onChange: null,
        onClear: null,
        onClick: null,
        onContextMenu: null,
        onDblClick: null,
        onDropdownClick: null,
        onFocus: null,
        onHide: null,
        onKeyPress: null,
        onKeyUp: null,
        onMouseDown: null,
        onSelect: null,
        onShow: null,
        onUnselect: null,
        optionGroupChildren: null,
        optionGroupLabel: null,
        optionGroupTemplate: null,
        panelClassName: null,
        panelFooterTemplate: null,
        panelStyle: null,
        placeholder: null,
        readOnly: false,
        removeTokenIcon: null,
        scrollHeight: '200px',
        selectedItemTemplate: null,
        selectionLimit: null,
        showEmptyMessage: false,
        size: null,
        style: null,
        suggestions: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        transitionOptions: null,
        type: 'text',
        value: null,
        virtualScrollerOptions: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
