/**
 *
 * TreeLabel is a container component that displays label at the label of a Tree.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treelabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';
import type { TreeNodeInstance } from './TreeNode.types';

/**
 * Defines passthrough(pt) options type in TreeLabel component.
 */
export type TreeLabelPassThroughType<E> = PassThroughType<TreeLabelInstance, E>;

/**
 * Defines passthrough(pt) options of TreeLabel component.
 */
export interface TreeLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeLabelPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in TreeLabel component.
 */
export interface TreeLabelProps extends BaseComponentProps<TreeLabelInstance, unknown, TreeLabelPassThrough> {}

/**
 * Defines valid state in TreeLabel component.
 */
export interface TreeLabelState {}

/**
 * Defines the methods and properties exposed by TreeLabel component.
 */
export interface TreeLabelExposes {
    /**
     * The Tree component instance.
     */
    tree: TreeInstance | undefined | null;
    /**
     * The TreeNode component instance.
     */
    treenode: TreeNodeInstance | undefined | null;
}

/**
 * Instance of TreeLabel component.
 */
export type TreeLabelInstance = ComponentInstance<TreeLabelProps, TreeLabelState, TreeLabelExposes>;
