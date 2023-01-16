/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primefaces.org/primereact/tree/)
 *
 * @module tree
 *
 */
import * as React from 'react';
import TreeNode from '../treenode';

/**
 * @todo Write the documentation.
 */
interface TreeHeaderTemplateOptions {
    /**
     * @todo Write the documentation.
     */
    filterContainerClassName: string;
    /**
     * @todo Write the documentation.
     */
    filterIconClasssName: string;
    /**
     * @todo Write the documentation.
     */
    filterInput: TreeFilterInputOptions;
    /**
     * @todo Write the documentation.
     */
    filterElement: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    props: TreeProps;
}

/**
 * @todo Write the documentation.
 */
interface TreeFilterInputOptions {
    /**
     * @todo Write the documentation.
     */
    className: string;
    /**
     * @todo Write the documentation.
     */
    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void;
    /**
     * @todo Write the documentation.
     */
    onChange(event: React.KeyboardEvent<HTMLInputElement>): void;
}

/**
 * @todo Write the documentation.
 */
interface TreeNodeTemplateOptions {
    /**
     * @todo Write the documentation.
     */
    onTogglerClick(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documentation.
     */
    className: string;
    /**
     * @todo Write the documentation.
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    props: TreeProps;
    /**
     * @todo Write the documentation.
     */
    expanded: boolean;
}

/**
 * @todo Write the documentation.
 */
interface TreeTogglerTemplateOptions {
    /**
     * @todo Write the documentation.
     */
    onClick(event: React.SyntheticEvent): void;
    /**
     * @todo Write the documentation.
     */
    containerClassName: string;
    /**
     * @todo Write the documentation.
     */
    iconClassName: string;
    /**
     * @todo Write the documentation.
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    props: TreeProps;
    /**
     * @todo Write the documentation.
     */
    expanded: boolean;
}

/**
 * @todo Write the documentation.
 */
interface TreeMultipleSelectionKeys {
    /**
     * @todo Write the documentation.
     */
    [key: string]: boolean;
}

/**
 * @todo Write the documentation.
 */
interface TreeCheckboxSelectionKeys {
    /**
     * @todo Write the documentation.
     */
    [key: string]: TreeCheckboxSelectionKeyType;
}

/**
 * @todo Write the documentation.
 */
interface TreeCheckboxSelectionKeyType {
    /**
     * @todo Write the documentation.
     */
    checked?: boolean;
    /**
     * @todo Write the documentation.
     */
    partialChecked?: boolean;
}

/**
 * @todo Write the documentation.
 */
interface TreeExpandedKeysType {
    /**
     * @todo Write the documentation.
     */
    [key: string]: boolean;
}

/**
 * Custom tree event.
 * @see {@link TreeProps.onToggle}
 * @event
 */
interface TreeExpandedEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * @todo Write the documentation.
     */
    value: TreeExpandedKeysType;
}

/**
 * Custom tree event.
 * @see {@link TreeProps.onSelectionChange},{@link TreeProps.onContextMenuSelectionChange}
 * @event
 */
interface TreeSelectionEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selected node key(s).
     */
    value: string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null;
}

/**
 * Custom tree event.
 * @see {@link TreeProps.onSelect},{@link TreeProps.onUnselect},{@link TreeProps.onExpand},{@link TreeProps.onCollapse},{@link TreeProps.onContextMenu}
 * @event
 */
export interface TreeEventNodeEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Unselected node instance.
     */
    node: TreeNode;
}

/**
 * Custom dragdrop event.
 * @see {@link TreeProps.onDragDrop}
 * @event
 */
interface TreeDragDropEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * New value after the dragdrop.
     */
    value: TreeNode[];
    /**
     * @todo Write the documentation.
     */
    dragNode: TreeNode;
    /**
     * @todo Write the documentation.
     */
    dropIndex: number;
}

/**
 * Custom filter value change event.
 * @see {@link TreeProps.onFilterValueChange}
 * @event
 */
interface TreeFilterValueChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: React.FormEvent<HTMLInputElement>;
    /**
     * The filtered value.
     */
    value: string;
}

/**
 * Custom click event
 * @see {@link TreeProps.onNodeClick}
 */
interface TreeNodeClickEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The current node
     */
    node: TreeNode;
}

/**
 * @todo Write the documentation.
 */
interface TreeFilterOptions {
    /**
     * @todo Write the documentation.
     */
    filter?: (event?: KeyboardEvent) => void;
    /**
     * @todo Write the documentation.
     */
    reset?: () => void;
}

/**
 * Custom click event.
 * @see {@link TreeProps.onNodeDoubleClick}
 * @extends {TreeNodeClickEvent}
 * @event
 */
interface TreeNodeDoubleClickEvent extends TreeNodeClickEvent {}

/**
 * Defines valid properties in TreeProps component.
 * @group Properties
 */
export interface TreeProps {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * An array of treenodes.
     */
    value?: TreeNode[] | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Defines the selection mode, valid values "single", "multiple", and "checkbox".
     */
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    /**
     * A single or an array of keys to control the selection state.
     */
    selectionKeys?: string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null;
    /**
     * A single key to control the selection with the context menu.
     */
    contextMenuSelectionKey?: string | undefined;
    /**
     * An array of keys to represent the state of the tree expansion state in controlled mode.
     */
    expandedKeys?: TreeExpandedKeysType | undefined;
    /**
     * Inline style of the component.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Style class of the component.
     */
    className?: string | undefined;
    /**
     * Inline style of the tree content.
     */
    contentStyle?: React.CSSProperties | undefined;
    /**
     * Style class of the tree content.
     */
    contentClassName?: string | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue true
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Whether checkbox selections propagate to ancestor nodes.
     * @defaultValue true
     */
    propagateSelectionUp?: boolean | undefined;
    /**
     * 	Whether checkbox selections propagate to descendant nodes.
     * @defaultValue true
     */
    propagateSelectionDown?: boolean | undefined;
    /**
     * Whether to display loading indicator.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display when tree is loading.
     * @defaultValue pi pi-spin
     */
    loadingIcon?: string | undefined;
    /**
     * Unique key to enable dragdrop functionality.
     * @defaultValue false
     */
    dragdropScope?: string | undefined;
    /**
     * The template of header.
     */
    header?: React.ReactNode | ((options: TreeHeaderTemplateOptions) => React.ReactNode);
    /**
     * The template of header.
     */
    footer?: React.ReactNode | ((props: TreeProps) => React.ReactNode);
    /**
     * Template of filter element.
     */
    filterTemplate?: React.ReactNode | ((options: TreeFilterOptions) => React.ReactNode);
    /**
     * Whether to show the header or not.
     * @defaultValue true
     */
    showHeader?: boolean | undefined;
    /**
     * When specified, displays an input field to filter the items.
     * @defaultValue false
     */
    filter?: boolean | undefined;
    /**
     * When filtering is enabled, the value of input field.
     */
    filterValue?: string | undefined;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @defaultValue label
     */
    filterBy?: string | undefined;
    /**
     * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
     * @defaultValue lenient
     */
    filterMode?: 'lenient' | 'strict' | undefined;
    /**
     * Placeholder text to show when filter input is empty.
     */
    filterPlaceholder?: string | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @defaultValue undefined
     */
    filterLocale?: string | undefined;
    /**
     * Template of toggler element.
     */
    togglerTemplate?: React.ReactNode | ((node: TreeNode, options: TreeTogglerTemplateOptions) => React.ReactNode);
    /**
     * Template of node element.
     * @defaultValue false
     */
    nodeTemplate?: React.ReactNode | ((node: TreeNode, options: TreeNodeTemplateOptions) => React.ReactNode);
    /**
     * Callback to invoke when selection changes.
     * @param {TreeSelectionEvent} event - Custom select event.
     */
    onSelectionChange?(event: TreeSelectionEvent): void;
    /**
     * Callback to invoke when selection changes with a context menu.
     * @param {TreeSelectionEvent} event - Custom select event.
     */
    onContextMenuSelectionChange?(event: TreeSelectionEvent): void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeEventNodeEvent} event - Custom node event.
     */
    onSelect?(event: TreeEventNodeEvent): void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeEventNodeEvent} event - Custom node event.
     */
    onUnselect?(event: TreeEventNodeEvent): void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeEventNodeEvent} event - Custom node event.
     */
    onExpand?(event: TreeEventNodeEvent): void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeEventNodeEvent} event - Custom node event.
     */
    onCollapse?(event: TreeEventNodeEvent): void;
    /**
     * Callback to invoke when a node is toggled.
     * @param {TreeExpandedEvent} event - Custom expand event.
     */
    onToggle?(event: TreeExpandedEvent): void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeDragDropEvent} event - Custom dragdrop event.
     */
    onDragDrop?(event: TreeDragDropEvent): void;
    /**
     * Callback to invoke when a node is selected with a context menu.
     * @param {TreeEventNodeEvent} event - Custom node event.
     */
    onContextMenu?(event: TreeEventNodeEvent): void;
    /**
     * Callback to invoke when filter value changes.
     * @param {TreeFilterValueChangeEvent} event - Custom filter value change event.
     */
    onFilterValueChange?(event: TreeFilterValueChangeEvent): void;
    /**
     * Callback to invoke when the node is clicked.
     * @param {TreeNodeClickEvent} event - Custom click event.
     */
    onNodeClick?(event: TreeNodeClickEvent): void;
    /**
     * Callback to invoke when the node is double-clicked.
     * @param {TreeNodeDoubleClickEvent} event - Custom doubleclick event.
     */
    onNodeDoubleClick?(event: TreeNodeDoubleClickEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class Tree extends React.Component<TreeProps, any> {
    /**
     * @todo Write the documentation.
     */
    public filter<T>(value: T): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
