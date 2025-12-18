/**
 *
 * TreeHeader is a component that represents the header section of the tree.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treeheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';

/**
 * Defines passthrough(pt) options type in TreeHeader component.
 */
export type TreeHeaderPassThroughType<E> = PassThroughType<TreeHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of TreeHeader component.
 */
export interface TreeHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TreeHeader component.
 */
export interface TreeHeaderProps extends BaseComponentProps<TreeHeaderInstance, unknown, TreeHeaderPassThrough> {}

/**
 * Defines valid state in TreeHeader component.
 */
export interface TreeHeaderState {}

/**
 * Defines the methods and properties exposed by TreeHeader component.
 */
export interface TreeHeaderExposes {
    /**
     * The TreeHeader component instance.
     */
    tree: TreeInstance | undefined | null;
}

/**
 * Instance of TreeHeader component.
 */
export type TreeHeaderInstance = ComponentInstance<TreeHeaderProps, TreeHeaderState, TreeHeaderExposes>;
