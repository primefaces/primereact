import { createStyles } from '@primereact/styles/utils';
import type { TreeInstance } from '@primereact/types/shared/tree';
import { style } from '@primeuix/styles/tree';

export const styles = createStyles<TreeInstance>({
    name: 'tree',
    style,
    classes: {
        root: ({ props, state }) => [
            'p-tree p-component',
            {
                'p-tree-selectable': props.selectionMode != null,
                'p-tree-flex-scrollable': props.scrollHeight === 'flex',
                'p-tree-node-dragover': state.dragHover
            }
        ],
        pcFilter: 'p-tree-filter-input',
        wrapper: 'p-tree-root',
        header: 'p-tree-header',
        footer: 'p-tree-footer',
        rootChildren: 'p-tree-root-children',
        node: ({ context }) => ['p-tree-node', { 'p-tree-node-leaf': context.leaf }],
        content: ({ props, context }) => [
            'p-tree-node-content',
            {
                'p-tree-node-selectable': context.selectable,
                'p-tree-node-selected': props.selectionMode === 'checkbox' ? props.highlightOnSelect && context.checked : context.selected,
                'p-tree-node-dragover': context.isNodeDropActive
            }
        ],
        toggle: 'p-tree-node-toggle-button',
        toggleIcon: 'p-tree-node-toggle-icon',
        icon: 'p-tree-node-icon',
        pcCheckbox: 'p-tree-node-checkbox',
        label: 'p-tree-node-label',
        nodeChildren: 'p-tree-node-children',
        empty: 'p-tree-empty-message',
        dropPoint: 'p-tree-node-drop-point'
    }
});
