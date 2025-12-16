/**
 *
 * TreeList is a container component that displays list at the list of a Tree.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treelist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';
import type { TreeNodeInstance } from './TreeNode.types';

/**
 * Defines passthrough(pt) options type in TreeList component.
 */
export type TreeListPassThroughType<E> = PassThroughType<TreeListInstance, E>;

/**
 * Defines passthrough(pt) options of TreeList component.
 */
export interface TreeListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TreeList component.
 */
export interface TreeListProps extends BaseComponentProps<TreeListInstance, unknown, TreeListPassThrough> {}

/**
 * Defines valid state in TreeList component.
 */
export interface TreeListState {}

/**
 * Defines the methods and properties exposed by TreeList component.
 */
export interface TreeListExposes {
    /**
     * The Tree component instance.
     */
    tree: TreeInstance | undefined | null;
    /**
     * The TreeNode component instance.
     */
    treenode: TreeNodeInstance | undefined | null;
    /**
     * Array of nodes.
     */
    nodes: unknown[] | undefined | null;
}

/**
 * Instance of TreeList component.
 */
export type TreeListInstance = ComponentInstance<TreeListProps, TreeListState, TreeListExposes>;
