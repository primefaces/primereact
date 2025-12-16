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
    root?: TreeNodePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
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
