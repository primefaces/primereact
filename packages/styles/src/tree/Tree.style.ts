import { createStyles } from '@primereact/styles/utils';
import type { TreeInstance } from '@primereact/types/shared/tree';
import { style } from '@primeuix/styles/tree';

export const styles = createStyles<TreeInstance>({
    name: 'tree',
    style,
    classes: {
        root: ({ props }) => [
            'p-tree p-component',
            {
                //     'p-tree-selectable': props.selectionMode != null,
                //     'p-tree-loading': props.loading,
                'p-tree-flex-scrollable': props.scrollHeight === 'flex'
                //     'p-tree-node-dragover': state.dragHover
            }
        ],
        // mask: 'p-tree-mask p-overlay-mask',
        // loadingIcon: 'p-tree-loading-icon',
        pcFilter: 'p-tree-filter-input',
        wrapper: 'p-tree-root',
        header: 'p-tree-header',
        footer: 'p-tree-footer',
        rootChildren: 'p-tree-root-children',
        node: ({ context }) => ['p-tree-node', { 'p-tree-node-leaf': context.leaf }],
        content: ({ props, context }) => [
            'p-tree-node-content',
            // instance.node.styleClass,
            {
                'p-tree-node-selectable': context.selectable,
                'p-tree-node-selected': props.selectionMode === 'checkbox' ? props.highlightOnSelect && context.checked : context.selected
                // 'p-tree-node-dragover': instance.isNodeDropActive
            }
        ],
        toggle: 'p-tree-node-toggle-button',
        toggleIcon: 'p-tree-node-toggle-icon',
        // nodeCheckbox: 'p-tree-node-checkbox',
        // nodeIcon: 'p-tree-node-icon',
        label: 'p-tree-node-label',
        nodeChildren: 'p-tree-node-children',
        empty: 'p-tree-empty-message'
        // dropPoint: 'p-tree-node-drop-point'
    }
});
