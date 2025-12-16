/**
 *
 * TreeEmpty is a component that displays a message when the tree is empty.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treeempty
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';

/**
 * Defines passthrough(pt) options type in TreeEmpty component.
 */
export type TreeEmptyPassThroughType<E> = PassThroughType<TreeEmptyInstance, E>;

/**
 * Defines passthrough(pt) options of TreeEmpty component.
 */
export interface TreeEmptyPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeEmptyPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TreeEmpty component.
 */
export interface TreeEmptyProps extends BaseComponentProps<TreeEmptyInstance, unknown, TreeEmptyPassThrough> {}

/**
 * Defines valid state in TreeEmpty component.
 */
export interface TreeEmptyState {}

/**
 * Defines the methods and properties exposed by TreeEmpty component.
 */
export interface TreeEmptyExposes {
    /**
     * The TreeEmpty component instance.
     */
    tree: TreeInstance | undefined | null;
}

/**
 * Instance of TreeEmpty component.
 */
export type TreeEmptyInstance = ComponentInstance<TreeEmptyProps, TreeEmptyState, TreeEmptyExposes>;
