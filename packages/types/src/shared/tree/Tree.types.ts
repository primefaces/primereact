/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module tree
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useTreeExposes, useTreeProps, useTreeState } from './useTree.types';

/**
 * Defines passthrough(pt) options type in Tree component.
 */
export type TreePassThroughType<E> = PassThroughType<TreeInstance, E>;

/**
 * Defines passthrough(pt) options of Tree component.
 */
export interface TreePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the wrapper's DOM element.
     */
    wrapper?: TreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: TreePassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the node's DOM element.
     */
    node?: TreePassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the toggle button's DOM element.
     */
    toggle?: TreePassThroughType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the toggle icon's DOM element.
     */
    toggleIcon?: TreePassThroughType<React.SVGProps<SVGSVGElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: TreePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Tree component.
 */
export interface TreeProps extends BaseComponentProps<TreeInstance, useTreeProps, TreePassThrough> {}

/**
 * Defines valid state in Tree component.
 * @extends useTreeState
 */
export interface TreeState extends useTreeState {}

/**
 * Defines the methods and properties exposed by Tree component.
 * @extends useTreeExposes
 */
export interface TreeExposes extends useTreeExposes {}

/**
 * Defines the CSS class names used in the Tree component.
 */
export const TreeClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-tree',
    /**
     * Class name of the wrapper element
     */
    wrapper: 'p-tree-root',
    /**
     * Class name of the root children element
     */
    rootChildren: 'p-tree-root-children',
    /**
     * Class name of the node element
     */
    node: 'p-tree-node',
    /**
     * Class name of the node content element
     */
    content: 'p-tree-node-content',
    /**
     * Class name of the toggle button element
     */
    toggle: 'p-tree-node-toggle-button',
    /**
     * Class name of the toggle icon element
     */
    toggleIcon: 'p-tree-node-toggle-icon',
    /**
     * Class name of the label element
     */
    label: 'p-tree-node-label',
    /**
     * Class name of the node children element
     */
    nodeChildren: 'p-tree-node-children'
} as const;

/**
 * Type representing the CSS class names used in the Tree component.
 */
export type TreeClassNamesType = (typeof TreeClassNames)[keyof typeof TreeClassNames];

/**
 * Instance of Tree component.
 */
export type TreeInstance = ComponentInstance<TreeProps, TreeState, TreeExposes>;
