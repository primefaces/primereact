/**
 *
 * TreeFooter is a component that represents the footer section of the tree.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treefooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';

/**
 * Defines passthrough(pt) options type in TreeFooter component.
 */
export type TreeFooterPassThroughType<E> = PassThroughType<TreeFooterInstance, E>;

/**
 * Defines passthrough(pt) options of TreeFooter component.
 */
export interface TreeFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TreeFooter component.
 */
export interface TreeFooterProps extends BaseComponentProps<TreeFooterInstance, unknown, TreeFooterPassThrough> {}

/**
 * Defines valid state in TreeFooter component.
 */
export interface TreeFooterState {}

/**
 * Defines the methods and properties exposed by TreeFooter component.
 */
export interface TreeFooterExposes {
    /**
     * The TreeFooter component instance.
     */
    tree: TreeInstance | undefined | null;
}

/**
 * Instance of TreeFooter component.
 */
export type TreeFooterInstance = ComponentInstance<TreeFooterProps, TreeFooterState, TreeFooterExposes>;
