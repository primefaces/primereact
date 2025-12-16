/**
 *
 * TreeToggle is a container component that displays toggle at the toggle of a Tree.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treetoggle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';
import type { TreeNodeInstance } from './TreeNode.types';

/**
 * Defines passthrough(pt) options type in TreeToggle component.
 */
export type TreeTogglePassThroughType<E> = PassThroughType<TreeToggleInstance, E>;

/**
 * Defines passthrough(pt) options of TreeToggle component.
 */
export interface TreeTogglePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeTogglePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TreeToggle component.
 */
export interface TreeToggleProps extends BaseComponentProps<TreeToggleInstance, unknown, TreeTogglePassThrough> {}

/**
 * Defines valid state in TreeToggle component.
 */
export interface TreeToggleState {}

/**
 * Defines the methods and properties exposed by TreeToggle component.
 */
export interface TreeToggleExposes {
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
 * Instance of TreeToggle component.
 */
export type TreeToggleInstance = ComponentInstance<TreeToggleProps, TreeToggleState, TreeToggleExposes>;
