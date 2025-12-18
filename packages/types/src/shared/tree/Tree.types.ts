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
import type { TreeCheckboxSelectionKeys, TreeExpandedKeys, TreeNode, TreeSelectionKeys, useTreeExpandedChangeEvent, useTreeExposes, useTreeProps, useTreeSelectionChangeEvent, useTreeState, useTreeValueChangeEvent } from './useTree.types';

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
     * Used to pass attributes to the label's DOM element.
     */
    label?: TreePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the toggle button's DOM element.
     */
    toggle?: TreePassThroughType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the toggle icon's DOM element.
     */
    toggleIcon?: TreePassThroughType<React.SVGProps<SVGSVGElement>>;
    /**
     * Used to pass attributes to the checkbox's DOM element.
     */
    pcCheckbox?: TreePassThroughType<React.HTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the filter's DOM element.
     */
    pcFilter?: TreePassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: TreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: TreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    empty?: TreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the drop point's DOM element.
     */
    dropPoint?: TreePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the tree's expanded keys state changes.
 * @extends useTreeExpandedChangeEvent
 */
export interface TreeExpandedChangeEvent extends useTreeExpandedChangeEvent {
    /**
     * The new expanded keys.
     */
    value: TreeExpandedKeys;
}

/**
 * Event fired when the tree's selection keys state changes.
 * @extends useTreeSelectionChangeEvent
 */
export interface TreeSelectionChangeEvent extends useTreeSelectionChangeEvent {
    /**
     * The new selection keys.
     */
    value: TreeSelectionKeys | TreeCheckboxSelectionKeys;
}

/**
 * Event fired when the tree's value state changes.
 * @extends useTreeValueChangeEvent
 */
export interface TreeValueChangeEvent extends useTreeValueChangeEvent {
    /**
     * The new value.
     */
    value: TreeNode[];
}

/**
 * Defines valid properties in Tree component.
 */
export interface TreeProps extends BaseComponentProps<TreeInstance, Omit<useTreeProps, 'onExpandedChange' | 'onSelectionChange' | 'onValueChange'>, TreePassThrough> {
    /**
     * Callback fired when the tree's expanded keys state changes.
     * @param event The event that expanded keys the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The expanded keys of the tree.
     * @returns void
     */
    onExpandedChange?: (event: TreeExpandedChangeEvent) => void;
    /**
     * Callback fired when the tree's selection keys state changes.
     * @param event The event that selection keys the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The selection keys of the tree.
     * @returns void
     */
    onSelectionChange?: (event: TreeSelectionChangeEvent) => void;
    /**
     * Callback fired when the tree's value state changes.
     * @param event The event that value the change.
     * @param event.value The value of the tree.
     * @returns void
     */
    onValueChange?: (event: TreeValueChangeEvent) => void;
}

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
