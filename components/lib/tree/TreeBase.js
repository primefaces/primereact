import { ObjectUtils } from '../utils/Utils';

export const TreeBase = {
    defaultProps: {
        __TYPE: 'Tree',
        id: null,
        value: null,
        checkboxIcon: null,
        disabled: false,
        selectionMode: null,
        selectionKeys: null,
        onSelectionChange: null,
        contextMenuSelectionKey: null,
        onContextMenuSelectionChange: null,
        expandedKeys: null,
        style: null,
        className: null,
        contentStyle: null,
        contentClassName: null,
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        loading: false,
        loadingIcon: null,
        expandIcon: null,
        collapseIcon: null,
        dragdropScope: null,
        header: null,
        footer: null,
        showHeader: true,
        filter: false,
        filterIcon: null,
        filterValue: null,
        filterBy: 'label',
        filterMode: 'lenient',
        filterPlaceholder: null,
        filterLocale: undefined,
        filterTemplate: null,
        nodeTemplate: null,
        togglerTemplate: null,
        onSelect: null,
        onUnselect: null,
        onExpand: null,
        onCollapse: null,
        onToggle: null,
        onDragDrop: null,
        onContextMenu: null,
        onFilterValueChange: null,
        onNodeClick: null,
        onNodeDoubleClick: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TreeBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TreeBase.defaultProps)
};
