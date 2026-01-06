/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module treeroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TreeCheckboxSelectionKeys, TreeExpandedKeys, TreeNode, TreeSelectionKeys, useTreeExpandedChangeEvent, useTreeExposes, useTreeProps, useTreeSelectionChangeEvent, useTreeState, useTreeValueChangeEvent } from './useTree.types';

/**
 * Defines passthrough(pt) options type in Tree component.
 */
export type TreeRootPassThroughType<E> = PassThroughType<TreeRootInstance, E>;

/**
 * Defines passthrough(pt) options of Tree component.
 */
export interface TreeRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the wrapper's DOM element.
     */
    wrapper?: TreeRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: TreeRootPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Used to pass attributes to the node's DOM element.
     */
    node?: TreeRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TreeRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: TreeRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the toggle button's DOM element.
     */
    toggle?: TreeRootPassThroughType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the toggle icon's DOM element.
     */
    toggleIcon?: TreeRootPassThroughType<React.SVGProps<SVGSVGElement>>;
    /**
     * Used to pass attributes to the checkbox's DOM element.
     */
    pcCheckbox?: TreeRootPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the filter's DOM element.
     */
    pcFilter?: TreeRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: TreeRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: TreeRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    empty?: TreeRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the drop point's DOM element.
     */
    dropPoint?: TreeRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the tree's expanded keys state changes.
 * @extends useTreeExpandedChangeEvent
 */
export interface TreeRootExpandedChangeEvent extends useTreeExpandedChangeEvent {
    /**
     * The new expanded keys.
     */
    value: TreeExpandedKeys;
}

/**
 * Event fired when the tree's selection keys state changes.
 * @extends useTreeSelectionChangeEvent
 */
export interface TreeRootSelectionChangeEvent extends useTreeSelectionChangeEvent {
    /**
     * The new selection keys.
     */
    value: TreeSelectionKeys | TreeCheckboxSelectionKeys;
}

/**
 * Event fired when the tree's value state changes.
 * @extends useTreeValueChangeEvent
 */
export interface TreeRootValueChangeEvent extends useTreeValueChangeEvent {
    /**
     * The new value.
     */
    value: TreeNode[];
}

/**
 * Defines valid properties in Tree component.
 */
export interface TreeRootProps extends BaseComponentProps<TreeRootInstance, Omit<useTreeProps, 'onExpandedChange' | 'onSelectionChange' | 'onValueChange'>, TreeRootPassThrough> {
    /**
     * Callback fired when the tree's expanded keys state changes.
     * @param event The event that expanded keys the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The expanded keys of the tree.
     * @returns void
     */
    onExpandedChange?: (event: TreeRootExpandedChangeEvent) => void;
    /**
     * Callback fired when the tree's selection keys state changes.
     * @param event The event that selection keys the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The selection keys of the tree.
     * @returns void
     */
    onSelectionChange?: (event: TreeRootSelectionChangeEvent) => void;
    /**
     * Callback fired when the tree's value state changes.
     * @param event The event that value the change.
     * @param event.value The value of the tree.
     * @returns void
     */
    onValueChange?: (event: TreeRootValueChangeEvent) => void;
}

/**
 * Defines valid state in Tree component.
 * @extends useTreeState
 */
export interface TreeRootState extends useTreeState {}

/**
 * Defines the methods and properties exposed by Tree component.
 * @extends useTreeExposes
 */
export interface TreeRootExposes extends useTreeExposes {}

/**
 * Instance of Tree component.
 */
export type TreeRootInstance = ComponentInstance<TreeRootProps, TreeRootState, TreeRootExposes>;
