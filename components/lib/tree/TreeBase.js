import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    container: 'p-tree-container',
    loadingIcon: 'p-tree-loading-icon',
    loadingOverlay: 'p-tree-loading-overlay p-component-overlay',
    searchIcon: 'p-tree-filter-icon',
    emptyMessage: 'p-treenode p-tree-empty-message',
    filterContainer: 'p-tree-filter-container',
    input: 'p-tree-filter p-inputtext p-component',
    header: 'p-tree-header',
    footer: 'p-tree-footer',
    root: ({ props }) =>
        classNames('p-tree p-component', {
            'p-tree-selectable': props.selectionMode,
            'p-tree-loading': props.loading,
            'p-disabled': props.disabled
        }),
    label: 'p-treenode-label',
    checkboxIcon: 'p-checkbox-icon p-c',
    checkboxContainer: 'p-checkbox p-component',
    checkbox: ({ nodeProps: props, checked, partialChecked }) => classNames('p-checkbox-box', { 'p-highlight': checked, 'p-indeterminate': partialChecked, 'p-disabled': props.disabled }),
    nodeIcon: 'p-treenode-icon',
    togglerIcon: 'p-tree-toggler-icon',
    toggler: 'p-tree-toggler p-link',
    droppoint: 'p-treenode-droppoint',
    content: ({ nodeProps: props, checked, selected, isCheckboxSelectionMode }) =>
        classNames('p-treenode-content', {
            'p-treenode-selectable': props.selectionMode && props.node.selectable !== false,
            'p-highlight': isCheckboxSelectionMode() ? checked : selected,
            'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
            'p-disabled': props.disabled
        }),
    subgroup: 'p-treenode-children',
    node: ({ isLeaf }) =>
        classNames('p-treenode', {
            'p-treenode-leaf': isLeaf
        })
};

const styles = `
@layer primereact {
    .p-tree-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow: auto;
    }

    .p-treenode-children {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-treenode-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-toggler {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
    }

    .p-treenode-leaf > .p-treenode-content .p-tree-toggler {
        visibility: hidden;
    }

    .p-treenode-content {
        display: flex;
        align-items: center;
    }

    .p-tree-filter {
        width: 100%;
    }

    .p-tree-filter-container {
        position: relative;
        display: block;
        width: 100%;
    }

    .p-tree-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-tree-loading {
        position: relative;
        min-height: 4rem;
    }

    .p-tree .p-tree-loading-overlay {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`;

export const TreeBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Tree',
        __parentMetadata: null,
        id: null,
        value: null,
        ariaLabel: null,
        ariaLabelledBy: null,
        checkboxIcon: null,
        className: null,
        collapseIcon: null,
        contentClassName: null,
        contentStyle: null,
        contextMenuSelectionKey: null,
        disabled: false,
        dragdropScope: null,
        emptyMessage: null,
        expandIcon: null,
        expandedKeys: null,
        filter: false,
        filterBy: 'label',
        filterIcon: null,
        filterLocale: undefined,
        filterMode: 'lenient',
        filterPlaceholder: null,
        filterTemplate: null,
        filterValue: null,
        footer: null,
        header: null,
        level: 0,
        loading: false,
        loadingIcon: null,
        metaKeySelection: false,
        nodeTemplate: null,
        onCollapse: null,
        onContextMenu: null,
        onContextMenuSelectionChange: null,
        onDragDrop: null,
        onExpand: null,
        onFilterValueChange: null,
        onNodeClick: null,
        onNodeDoubleClick: null,
        onSelect: null,
        onSelectionChange: null,
        onToggle: null,
        onUnselect: null,
        propagateSelectionDown: true,
        propagateSelectionUp: true,
        selectionKeys: null,
        selectionMode: null,
        showHeader: true,
        style: null,
        togglerTemplate: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
