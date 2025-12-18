/**
 *
 * TreeFilter is a component that provides filtering capabilities to the Tree component.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treefilter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';

/**
 * Defines passthrough(pt) options type in TreeFilter component.
 */
export type TreeFilterPassThroughType<E> = PassThroughType<TreeFilterInstance, E>;

/**
 * Defines passthrough(pt) options of TreeFilter component.
 */
export interface TreeFilterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeFilterPassThroughType<React.HTMLAttributes<HTMLElement>>;
}

/**
 * Defines valid properties in TreeFilter component.
 */
export interface TreeFilterProps extends BaseComponentProps<TreeFilterInstance, unknown, TreeFilterPassThrough> {}

/**
 * Defines valid state in TreeFilter component.
 */
export interface TreeFilterState {}

/**
 * Defines the methods and properties exposed by TreeFilter component.
 */
export interface TreeFilterExposes {
    /**
     * The TreeFilter component instance.
     */
    tree: TreeInstance | undefined | null;
}

/**
 * Instance of TreeFilter component.
 */
export type TreeFilterInstance = ComponentInstance<TreeFilterProps, TreeFilterState, TreeFilterExposes>;
