/**
 *
 * TreeContent is a container component that displays content at the content of a Tree.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treecontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeInstance } from './Tree.types';
import type { TreeNodeInstance } from './TreeNode.types';

/**
 * Defines passthrough(pt) options type in TreeContent component.
 */
export type TreeContentPassThroughType<E> = PassThroughType<TreeContentInstance, E>;

/**
 * Defines passthrough(pt) options of TreeContent component.
 */
export interface TreeContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TreeContent component.
 */
export interface TreeContentProps extends BaseComponentProps<TreeContentInstance, unknown, TreeContentPassThrough> {}

/**
 * Defines valid state in TreeContent component.
 */
export interface TreeContentState {}

/**
 * Defines the methods and properties exposed by TreeContent component.
 */
export interface TreeContentExposes {
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
 * Instance of TreeContent component.
 */
export type TreeContentInstance = ComponentInstance<TreeContentProps, TreeContentState, TreeContentExposes>;
