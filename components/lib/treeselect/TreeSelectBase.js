import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props, focusedState, overlayVisibleState, isValueEmpty }) =>
        classNames(
            'p-treeselect p-component p-inputwrapper',
            {
                'p-treeselect-chip': props.display === 'chip',
                'p-treeselect-clearable': props.showClear && !props.disabled,
                'p-disabled': props.disabled,
                'p-focus': focusedState,
                'p-inputwrapper-filled': !isValueEmpty,
                'p-inputwrapper-focus': focusedState || overlayVisibleState
            },
            props.className
        ),
    label: ({ props, isValueEmpty, getLabel }) =>
        classNames('p-treeselect-label', {
            'p-placeholder': getLabel() === props.placeholder,
            'p-treeselect-label-empty': !props.placeholder && isValueEmpty
        }),
    panel: ({ panelProps: props, context }) =>
        classNames('p-treeselect-panel p-component', props.panelClassName, {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    labelContainer: 'p-treeselect-label-container',
    tokenLabel: 'p-treeselect-token-label',
    token: 'p-treeselect-token',
    trigger: 'p-treeselect-trigger',
    triggerIcon: 'p-treeselect-trigger-icon p-clickable',
    emptyMessage: 'p-treeselect-empty-message',
    filterContainer: 'p-treeselect-filter-container',
    filter: 'p-treeselect-filter p-inputtext p-component',
    filterIcon: 'p-treeselect-filter-icon',
    closeIcon: 'p-treeselect-close-icon',
    clearIcon: 'p-treeselect-clear-icon p-clickable',
    closeButton: 'p-treeselect-close p-link',
    header: 'p-treeselect-header',
    wrapper: 'p-treeselect-items-wrapper',
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-treeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }

    .p-treeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-treeselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-treeselect-label  {
        display: block;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .p-treeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-treeselect-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-treeselect .p-treeselect-panel {
        min-width: 100%;
    }

    .p-treeselect-items-wrapper {
        overflow: auto;
    }

    .p-treeselect-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-treeselect-filter-container {
        position: relative;
        flex: 1 1 auto;
    }

    .p-treeselect-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-treeselect-filter-container .p-inputtext {
        width: 100%;
    }

    .p-treeselect-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
        margin-left: auto;
    }

    .p-treeselect-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-fluid .p-treeselect {
        display: flex;
}
}
`;

export const TreeSelectBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TreeSelect',
        appendTo: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        className: null,
        closeIcon: null,
        clearIcon: null,
        disabled: false,
        display: 'comma',
        dropdownIcon: null,
        emptyMessage: null,
        expandedKeys: null,
        filter: false,
        filterBy: 'label',
        filterIcon: null,
        filterInputAutoFocus: true,
        filterLocale: undefined,
        filterMode: 'lenient',
        filterPlaceholder: null,
        filterTemplate: null,
        filterValue: null,
        inputId: null,
        inputRef: null,
        metaKeySelection: false,
        name: null,
        nodeTemplate: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        onFilterValueChange: null,
        onHide: null,
        onNodeCollapse: null,
        onNodeExpand: null,
        onNodeSelect: null,
        onNodeUnselect: null,
        onShow: null,
        options: null,
        panelClassName: null,
        panelFooterTemplate: null,
        panelHeaderTemplate: null,
        panelStyle: null,
        placeholder: null,
        resetFilterOnHide: false,
        scrollHeight: '400px',
        selectionMode: 'single',
        showClear: false,
        style: null,
        tabIndex: null,
        togglerTemplate: null,
        transitionOptions: null,
        value: null,
        valueTemplate: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
