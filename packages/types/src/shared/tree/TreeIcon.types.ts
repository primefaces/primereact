/**
 *
 * TreeIcon is a component that displays an icon.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treeicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';

/**
 * Defines passthrough(pt) options type in TreeIcon component.
 */
export type TreeIconPassThroughType<E> = PassThroughType<TreeIconInstance, E>;

/**
 * Defines passthrough(pt) options of TreeIcon component.
 */
export interface TreeIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeIconPassThroughType<React.SVGAttributes<SVGElement>>;
}

/**
 * Defines valid properties in TreeIcon component.
 */
export interface TreeIconProps extends BaseComponentProps<TreeIconInstance, unknown, TreeIconPassThrough> {}

/**
 * Defines valid state in TreeIcon component.
 */
export interface TreeIconState {}

/**
 * Defines the methods and properties exposed by TreeIcon component.
 */
export interface TreeIconExposes {
    /**
     * The Tree component instance.
     */
    tree: TreeInstance | undefined | null;
}

/**
 * Instance of TreeIcon component.
 */
export type TreeIconInstance = ComponentInstance<TreeIconProps, TreeIconState, TreeIconExposes>;
