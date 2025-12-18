/**
 *
 * The useTree manages the state and functionality of a tree component.
 *
 * [Live Demo](https://www.primereact.org/tree/)
 *
 * @module usetree
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Defines a tree node structure.
 */
export interface TreeNode {
    /**
     * Mandatory unique key of the node.
     */
    key: string;
    /**
     * Label of the node.
     */
    label?: React.ReactNode;
    /**
     * Icon of the node.
     */
    icon?: string;
    /**
     * Children nodes.
     */
    children?: TreeNode[];
    /**
     * Whether the node is a leaf node (has no children).
     */
    leaf?: boolean;
    /**
     * Specifies the node loading.
     */
    loading?: boolean;
    /**
     * Whether the node is selectable.
     */
    selectable?: boolean;
    /**
     * Whether the node is draggable.
     */
    draggable?: boolean;
    /**
     * Whether the node is droppable.
     */
    droppable?: boolean;
    /**
     * Used to pass all properties of the HTMLDivElement.
     */
    nodeProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Optional properties
     */
    [key: string]: unknown;
}

/**
 * Defines the structure for expanded keys.
 * A record where the key is the node key and the value is true if expanded.
 */
export type TreeExpandedKeys = Record<string, boolean>;

/**
 * Defines the structure for selection keys in single/multiple mode.
 * A record where the key is the node key and the value is true if selected.
 */
export type TreeSelectionKeys = Record<string, boolean>;

/**
 * Defines the structure for selection keys in checkbox mode.
 * A record where the key is the node key and the value is an object containing checked and partialChecked states.
 */
export type TreeCheckboxSelectionKeys = Record<string, { checked: boolean; partialChecked: boolean }>;

/**
 * Event fired when the tree's expanded keys change.
 */
export interface useTreeExpandedChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the expansion change.
     */
    originalEvent: E;
    /**
     * The new expanded keys.
     */
    value: TreeExpandedKeys;
}

/**
 * Event fired when the tree's selected keys change.
 */
export interface useTreeSelectionChangeEvent<E = React.SyntheticEvent> {
    /**
     * The original event that triggered the selection change.
     */
    originalEvent: E;
    /**
     * The new selected keys.
     */
    value: TreeSelectionKeys | TreeCheckboxSelectionKeys;
}

/**
 * Event fired when a node is toggled.
 */
export interface useTreeToggleEvent {
    /**
     * The original event that triggered the toggle.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The toggled node.
     */
    node: TreeNode;
}

/**
 * Event fired when a node is expanded.
 */
export interface useTreeExpandEvent {
    /**
     * The original event that triggered the toggle.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The expanded node.
     */
    node: TreeNode;
}

/**
 * Event fired when a node is collapsed.
 */
export interface useTreeCollapseEvent {
    /**
     * The original event that triggered the collapse.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The collapsed node.
     */
    node: TreeNode;
}

/**
 * Event fired when a node is clicked.
 */
export interface useTreeClickEvent {
    /**
     * The original event that triggered the click.
     */
    originalEvent: React.MouseEvent | React.KeyboardEvent;
    /**
     * The clicked node.
     */
    node: TreeNode;
}

/**
 * Event fired when a node is selected.
 */
export interface useTreeSelectEvent {
    /**
     * The original event that triggered the selection.
     */
    originalEvent: React.MouseEvent | React.KeyboardEvent | React.SyntheticEvent;
    /**
     * The selected node.
     */
    node: TreeNode;
}

/**
 * Event fired when a node is unselected.
 */
export interface useTreeUnselectEvent {
    /**
     * The original event that triggered the unselection.
     */
    originalEvent: React.MouseEvent | React.KeyboardEvent | React.SyntheticEvent;
    /**
     * The unselected node.
     */
    node: TreeNode;
}

/**
 * Event fired when a node is dropped.
 */
export interface useTreeNodeDropEvent {
    /**
     * The original event that triggered the drop.
     */
    originalEvent: React.DragEvent;
    /**
     * The value of the tree.
     */
    value: TreeNode[];
    /**
     * The dragged node.
     */
    dragNode: TreeNode;
    /**
     * The drop target node.
     */
    dropNode: TreeNode | null;
    /**
     * The index of the dragged node.
     */
    index: number;
    /**
     * Accept callback for validateDrop mode.
     */
    accept?: () => void;
}

/**
 * Event fired when drag enters the tree.
 */
export interface useTreeDragEnterEvent {
    /**
     * The original event that triggered the drag enter.
     */
    originalEvent: React.DragEvent;
    /**
     * The value of the tree.
     */
    value: TreeNode[];
    /**
     * The dragged node.
     */
    dragNode: TreeNode | null;
    /**
     * The drag node scope.
     */
    dragNodeScope: string | string[] | null;
}

/**
 * Event fired when drag leaves the tree.
 */
export interface useTreeDragLeaveEvent {
    /**
     * The original event that triggered the drag leave.
     */
    originalEvent: React.DragEvent;
    /**
     * The value of the tree.
     */
    value: TreeNode[];
    /**
     * The dragged node.
     */
    dragNode: TreeNode | null;
    /**
     * The drag node scope.
     */
    dragNodeScope: string | string[] | null;
}

/**
 * Event fired when the tree value changes (for drag-drop).
 */
export interface useTreeValueChangeEvent {
    /**
     * The new value.
     */
    value: TreeNode[];
}

/**
 * Defines valid properties in useTree.
 */
export interface useTreeProps {
    /**
     * An array of treenodes.
     */
    value?: TreeNode[] | undefined;
    /**
     * A record of keys to represent the state of the tree expansion state in controlled mode.
     */
    expandedKeys?: TreeExpandedKeys | undefined;
    /**
     * The default expanded keys when used in uncontrolled mode.
     */
    defaultExpandedKeys?: TreeExpandedKeys | undefined;
    /**
     * A record of keys to represent the selection state in controlled mode.
     * For single/multiple mode: Record<string, boolean>
     * For checkbox mode: Record<string, { checked: boolean, partialChecked: boolean }>
     */
    selectionKeys?: TreeSelectionKeys | TreeCheckboxSelectionKeys | undefined;
    /**
     * The default selected keys when used in uncontrolled mode.
     */
    defaultSelectionKeys?: TreeSelectionKeys | TreeCheckboxSelectionKeys | undefined;
    /**
     * Defines the selection mode.
     */
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect multiple items. When set to false selection of each item can be toggled individually.
     * @default false
     */
    metaKeySelection?: boolean;
    /**
     * Height of the scroll viewport in fixed units or the 'flex' keyword for a dynamic size.
     */
    scrollHeight?: 'flex' | undefined;
    /**
     *  Highlights automatically the first item.
     *  @default false
     */
    highlightOnSelect?: boolean | undefined;
    /**
     * Whether the tree nodes can be dragged.
     */
    draggableNodes?: boolean | undefined;
    /**
     * Whether the tree can accept dropped nodes.
     */
    droppableNodes?: boolean | undefined;
    /**
     * A unique identifier for the draggable scope.
     */
    draggableScope?: string | string[] | undefined;
    /**
     * A unique identifier for the droppable scope.
     */
    droppableScope?: string | string[] | undefined;
    /**
     * Whether to validate drops before processing.
     * @default false
     */
    validateDrop?: boolean;
    /**
     * Callback fired when the tree's expanded keys change.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new expanded keys.
     * @returns void
     */
    onExpandedChange?: (event: useTreeExpandedChangeEvent) => void;
    /**
     * Callback fired when the tree's selection changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new selected keys.
     * @returns void
     */
    onSelectionChange?: (event: useTreeSelectionChangeEvent) => void;
    /**
     * Callback fired when a node is toggled.
     * @param event.originalEvent The event that triggered the toggle.
     * @param event.node The toggled node.
     * @returns void
     */
    onToggle?: (event: useTreeToggleEvent) => void;
    /**
     * Callback fired when a node is toggled.
     * @param event.originalEvent The event that triggered the expand.
     * @param event.node The expanded node.
     * @returns void
     */
    onExpand?: (event: useTreeExpandEvent) => void;
    /**
     * Callback fired when a node is toggled.
     * @param event.originalEvent The event that triggered the collapse.
     * @param event.node The collapsed node.
     * @returns void
     */
    onCollapse?: (event: useTreeCollapseEvent) => void;
    /**
     * Callback fired when a node is clicked.
     * @param event.originalEvent The event that triggered the click.
     * @param event.node The clicked node.
     * @returns void
     */
    onClick?: (event: useTreeClickEvent) => void;
    /**
     * Callback fired when a node is selected.
     * @param event.originalEvent The event that triggered the select.
     * @param event.node The selected node.
     * @returns void
     */
    onSelect?: (event: useTreeSelectEvent) => void;
    /**
     * Callback fired when a node is unselected.
     * @param event.originalEvent The event that triggered the unselect.
     * @param event.node The unselected node.
     * @returns void
     */
    onUnselect?: (event: useTreeUnselectEvent) => void;
    /**
     * Callback fired when a node is dropped.
     * @param event The node drop event.
     * @returns void
     */
    onNodeDrop?: (event: useTreeNodeDropEvent) => void;
    /**
     * Callback fired when drag enters the tree.
     * @param event The drag enter event.
     * @returns void
     */
    onDragEnter?: (event: useTreeDragEnterEvent) => void;
    /**
     * Callback fired when drag leaves the tree.
     * @param event The drag leave event.
     * @returns void
     */
    onDragLeave?: (event: useTreeDragLeaveEvent) => void;
    /**
     * Callback fired when the tree value changes (for drag-drop).
     * @param event The value change event.
     * @returns void
     */
    onValueChange?: (event: useTreeValueChangeEvent) => void;
}

/**
 * Defines valid state in useTree.
 */
export interface useTreeState {
    /**
     * The current expanded keys of the tree.
     */
    expandedKey: TreeExpandedKeys | undefined;
    /**
     * The current selected keys of the tree.
     */
    selectedKey: TreeSelectionKeys | TreeCheckboxSelectionKeys | undefined;
    /**
     * Whether the tree is in drag hover state.
     */
    dragHover: boolean;
}

/**
 * Defines the methods and properties exposed by useTree.
 */
export interface useTreeExposes {
    /**
     * The state of the useTree.
     */
    state: useTreeState;
    /**
     * Gets the list of tree nodes.
     * @returns {TreeNode[]} The list of nodes.
     */
    getNodes: () => TreeNode[];
    /**
     * Handles keyboard navigation on tree nodes.
     * @param {React.KeyboardEvent} event - The keyboard event.
     * @param {TreeNode} node - The current node.
     * @param {number} level - The level of the node in the tree.
     * @param {boolean} expanded - Whether the node is expanded.
     * @param {boolean} leaf - Whether the node is a leaf node.
     */
    onKeyDown: (event: React.KeyboardEvent, node: TreeNode, level: number, expanded: boolean, leaf: boolean) => void;
    /**
     * Toggles the expansion state of a node.
     * @param {React.SyntheticEvent} event - The event that triggered the toggle.
     * @param {string} node - The node to toggle.
     */
    onNodeToggle: (event: React.SyntheticEvent, node: TreeNode) => void;
    /**
     * Handles node click event.
     * @param {React.MouseEvent | React.KeyboardEvent} event - The event.
     * @param {TreeNode} node - The clicked node.
     * @param {boolean} [nodeTouched] - Whether the node was touched.
     */
    onNodeClick: (event: React.MouseEvent | React.KeyboardEvent, node: TreeNode, nodeTouched?: boolean) => void;
    /**
     * Handles content click event. Automatically delegates to checkbox or node click based on selection mode.
     * @param {React.MouseEvent | React.KeyboardEvent} event - The event.
     * @param {TreeNode} node - The clicked node.
     * @param {boolean} [nodeTouched] - Whether the node was touched.
     */
    onClick: (event: React.MouseEvent | React.KeyboardEvent, node: TreeNode, nodeTouched?: boolean) => void;
    /**
     * Handles checkbox state change for checkbox selection mode.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
     * @param {TreeNode} node - The node whose checkbox changed.
     */
    onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>, node: TreeNode) => void;
    /**
     * Checks if a node is selected.
     * @param {TreeNode} node - The node to check.
     * @returns {boolean} True if the node is selected.
     */
    isNodeSelected: (node: TreeNode) => boolean;
    /**
     * Finds information about a node's position in the tree.
     * @param {string} nodeKey - The key of the node.
     * @returns {{ level: number; posInSet: number; setSize: number }} Node information.
     */
    findNodeInfo: (nodeKey: string) => { level: number; posInSet: number; setSize: number };
    /**
     * Checks if a node can be dropped based on drag-drop rules.
     * @param {TreeNode} node - The node to check.
     * @returns {boolean} True if the node can accept drops.
     */
    allowDrop: (node: TreeNode) => boolean;
}

/**
 * Instance of useTree headless.
 */
export type useTreeInstance = HeadlessInstance<useTreeProps, useTreeState, useTreeExposes>;
