import type { TreeNodeProps } from '@primereact/types/shared/tree';

export const defaultNodeProps: TreeNodeProps = {
    as: 'li',
    node: undefined,
    index: undefined,
    draggableNodes: undefined,
    droppableNodes: undefined,
    draggableScope: undefined,
    droppableScope: undefined,
    validateDrop: false,
    onNodeDrop: undefined,
    onNodeDragEnter: undefined,
    onNodeDragLeave: undefined,
    onValueChange: undefined
};
