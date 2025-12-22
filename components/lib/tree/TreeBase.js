import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames('p-tree p-component', {
            'p-tree-selectable': props.selectionMode,
            'p-tree-loading': props.loading,
            'p-disabled': props.disabled
        }),
    loadingOverlay: 'p-tree-loading-overlay p-component-overlay',
    loadingIcon: 'p-tree-loading-icon',
    filterContainer: 'p-tree-filter-container',
    input: 'p-tree-filter p-inputtext p-component',
    searchIcon: 'p-tree-filter-icon',
    container: 'p-tree-container',
    node: ({ leaf }) =>
        classNames('p-treenode', {
            'p-treenode-leaf': leaf
        }),
    content: ({ nodeProps: props, checked, selected, isCheckboxSelectionMode }) =>
        classNames('p-treenode-content', {
            'p-treenode-selectable': props.selectionMode && props.node.selectable !== false,
            'p-highlight': isCheckboxSelectionMode() ? checked : selected,
            'p-highlight-contextmenu': props.contextMenuSelectionKey && props.contextMenuSelectionKey === props.node.key,
            'p-disabled': props.disabled
        }),
    toggler: 'p-tree-toggler p-link',
    togglerIcon: 'p-tree-toggler-icon',
    nodeCheckbox: ({ partialChecked }) => classNames({ 'p-indeterminate': partialChecked }),
    nodeIcon: 'p-treenode-icon',
    label: 'p-treenode-label',
    subgroup: 'p-treenode-children',
    checkIcon: 'p-checkbox-icon',
    emptyMessage: 'p-treenode p-tree-empty-message',
    droppoint: 'p-treenode-droppoint',
    header: 'p-tree-header',
    footer: 'p-tree-footer'
};

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
        filterDelay: 300,
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
        classes
    }
});
