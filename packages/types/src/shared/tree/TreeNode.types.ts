/**
 *
 * TreeNode is a container component that displays node at the node of a Tree.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treenode
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';
import type { TreeNode } from './useTree.types';

/**
 * Defines passthrough(pt) options type in TreeNode component.
 */
export type TreeNodePassThroughType<E> = PassThroughType<TreeNodeInstance, E>;

/**
 * Defines passthrough(pt) options of TreeNode component.
 */
export interface TreeNodePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeNodePassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Event fired when a node is dropped on this node.
 */
export interface TreeNodeDropEvent {
    /**
     * The original drag event.
     */
    originalEvent: React.DragEvent;
    /**
     * The value of the tree.
     */
    value: TreeNode[];
    /**
     * The dragged node.
     */
    dragNode: TreeNode;
    /**
     * The drop target node.
     */
    dropNode: TreeNode;
    /**
     * The index of the dropped node.
     */
    index: number;
    /**
     * Accept callback for validateDrop mode.
     */
    accept?: () => void;
}

/**
 * Event fired when drag enters a node.
 */
export interface TreeNodeDragEnterEvent {
    /**
     * The node being entered.
     */
    node: TreeNode;
}

/**
 * Event fired when drag leaves a node.
 */
export interface TreeNodeDragLeaveEvent {
    /**
     * The node being left.
     */
    node: TreeNode;
}

/**
 * Event fired when the tree value changes due to drag-drop.
 */
export interface TreeNodeValueChangeEvent {
    /**
     * The updated tree nodes.
     */
    nodes: TreeNode[];
}

/**
 * Defines valid properties in TreeNode component.
 */
export interface TreeNodeProps extends BaseComponentProps<TreeNodeInstance, unknown, TreeNodePassThrough> {
    /**
     * Node data. See TreeNode interface for more information.
     */
    node?: TreeNode | undefined;
    /**
     * Index of the node in the list of siblings.
     */
    index?: number | undefined;
    /**
     * Whether nodes can be dragged.
     */
    draggableNodes?: boolean | undefined;
    /**
     * Whether nodes can accept drops.
     */
    droppableNodes?: boolean | undefined;
    /**
     * Draggable scope identifier.
     */
    draggableScope?: string | string[] | undefined;
    /**
     * Droppable scope identifier.
     */
    droppableScope?: string | string[] | undefined;
    /**
     * Whether to validate drops before processing.
     * @default false
     */
    validateDrop?: boolean;
    /**
     * Callback fired when a node is dropped on this node.
     */
    onNodeDrop?: (event: TreeNodeDropEvent) => void;
    /**
     * Callback fired when drag enters this node.
     */
    onNodeDragEnter?: (event: TreeNodeDragEnterEvent) => void;
    /**
     * Callback fired when drag leaves this node.
     */
    onNodeDragLeave?: (event: TreeNodeDragLeaveEvent) => void;
    /**
     * Callback fired when the tree value changes.
     */
    onValueChange?: (event: TreeNodeValueChangeEvent) => void;
}

/**
 * Defines valid state in TreeNode component.
 */
export interface TreeNodeState {}

/**
 * Defines the methods and properties exposed by TreeNode component.
 */
export interface TreeNodeExposes {
    /**
     * The Tree component instance.
     */
    tree: TreeInstance | undefined | null;
    /**
     * The parent TreeNode component instance.
     */
    parentNode: TreeNodeInstance | undefined | null;
    /**
     * Whether the node is expanded.
     */
    expanded: boolean;
    /**
     * Whether the node is checked (for checkbox mode).
     */
    checked: boolean;
    /**
     * Whether the node is partially checked (for checkbox mode).
     */
    partialChecked: boolean;
    /**
     * Whether the node is selected (for single/multiple mode).
     */
    selected: boolean | undefined;
    /**
     * Whether the node is a leaf node (has no children).
     */
    leaf: boolean;
    /**
     * The total number of siblings at this level.
     */
    setSize: number;
    /**
     * The position of this node among its siblings (1-based).
     */
    posInSet: number;
    /**
     * The depth level of the node in the tree (1-based).
     */
    level: number;
}

/**
 * Instance of TreeNode component.
 */
export type TreeNodeInstance = ComponentInstance<TreeNodeProps, TreeNodeState, TreeNodeExposes>;
