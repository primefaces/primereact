import type { TreeNode } from '@primereact/types/shared/tree';

type DragState = {
    isDragging: boolean;
    dragNode: TreeNode | null;
    dragScope: string | string[] | null;
    dragNodeSubNodes: TreeNode[] | null;
    dragNodeIndex: number | null;
    sourceTreeId: string | null;
};

type DragEvent = {
    node: TreeNode;
    scope?: string | string[] | null;
    subNodes?: TreeNode[];
    index?: number;
    sourceTreeId?: string;
};

const dragState: DragState = {
    isDragging: false,
    dragNode: null,
    dragScope: null,
    dragNodeSubNodes: null,
    dragNodeIndex: null,
    sourceTreeId: null
};

const dragStartHandlers = new Set<(event: DragEvent) => void>();
const dragStopHandlers = new Set<(event: DragEvent) => void>();

export const TreeDragDropService = {
    getDragState() {
        return dragState;
    },

    startDrag(event: DragEvent) {
        dragState.isDragging = true;
        dragState.dragNode = event.node;
        dragState.dragScope = event.scope ?? null;
        dragState.dragNodeSubNodes = event.subNodes ?? null;
        dragState.dragNodeIndex = event.index ?? null;
        dragState.sourceTreeId = event.sourceTreeId ?? null;

        dragStartHandlers.forEach((handler) => handler(event));
    },

    stopDrag(event: DragEvent) {
        dragState.isDragging = false;
        dragState.dragNode = null;
        dragState.dragScope = null;
        dragState.dragNodeSubNodes = null;
        dragState.dragNodeIndex = null;
        dragState.sourceTreeId = null;

        dragStopHandlers.forEach((handler) => handler(event));
    },

    onDragStart(handler: (event: DragEvent) => void) {
        dragStartHandlers.add(handler);

        return () => dragStartHandlers.delete(handler);
    },

    onDragStop(handler: (event: DragEvent) => void) {
        dragStopHandlers.add(handler);

        return () => dragStopHandlers.delete(handler);
    }
};
