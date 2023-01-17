/**
 *
 * TreeSelect is a form component to choose from hierarchical data.
 *
 * [Live Demo](https://www.primefaces.org/primereact/treeselect/)
 *
 * @module treeselect
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import TreeNode from '../treenode';

/**
 * @todo Write the documentation.
 */
interface TreeSelectPanelHeaderTemplateOptions {
    /**
     * @todo Write the documentation.
     */
    className: string;
    /**
     * @todo Write the documentation.
     */
    filterElement: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    closeElement: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    closeElementClassName: string;
    /**
     * @todo Write the documentation.
     */
    closeIconClassName: string;
    /**
     * @todo Write the documentation.
     */
    onCloseClick(): void;
    /**
     * @todo Write the documentation.
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    props: TreeSelectProps;
}

/**
 * @todo Write the documentation.
 */
interface TreeSelectChangeTargetOptions {
    /**
     * @todo Write the documentation.
     */
    name: string;
    /**
     * @todo Write the documentation.
     */
    id: string;
    /**
     * @todo Write the documentation.
     */
    value: string | TreeSelectSelectionKeysType | TreeSelectSelectionKeysType[] | undefined | null;
}

/**
 * Custom change event.
 * @see {@link TreeSelectProps.onChange}
 * @event
 */
interface TreeSelectChangeEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selected node key(s).
     */
    value: string | TreeSelectSelectionKeysType | TreeSelectSelectionKeysType[] | undefined | null;
    /**
     * @todo Write the documentation.
     */
    stopPropagation(): void;
    /**
     * @todo Write the documentation.
     */
    preventDefault(): void;
    /**
     * @todo Write the documentation.
     */
    target: TreeSelectChangeTargetOptions;
}

/**
 * @todo Write the documentation.
 */
interface TreeSelectSelectionKeysType {
    /**
     * @todo Write the documentation.
     */
    [key: string]: boolean | TreeSelectCheckboxSelectionKeyType;
}

/**
 * @todo Write the documentation.
 */
interface TreeSelectCheckboxSelectionKeyType {
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
 * Custom change event.
 * @see {@link TreeSelectProps.onNodeCollapse},{@link TreeSelectProps.onNodeExpand},{@link TreeSelectProps.onNodeSelect},{@link TreeSelectProps.onNodeUnselect}
 * @event
 */
interface TreeSelectEventNodeEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Unselected node instance.
     */
    node: TreeNode;
}

/**
 * @todo Write the documentation.
 */
interface TreeSelectExpandedKeysType {
    /**
     * @todo Write the documentation.
     */
    [key: string]: boolean;
}

/**
 * Custom toggle event.
 * @see {@link TreeSelectProps.onToggle}
 * @event
 */
interface TreeSelectExpandedEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Toggled node instance
     */
    value: TreeSelectExpandedKeysType;
}

/**
 * Custom filter change event.
 * @see {@link TreeSelectProps.onFilterValueChange}
 * @event
 */
interface TreeSelectFilterValueChangeEvent {
    /**
     * Browser event
     */
    originalEvent: React.FormEvent<HTMLInputElement>;
    /**
     * The filtered value
     */
    value: string;
}

/**
 * @todo Write the documentation.
 */
interface TreeSelectFilterOptions {
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
 * Defines valid properties in TreeSelect component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface TreeSelectProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'value' | 'ref'> {
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
     * @defaultValue document.body
     */
    appendTo?: 'self' | HTMLElement | undefined | null;
    /**
     * Used to define a string that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Contains the element IDs of labels.
     */
    ariaLabelledBy?: string | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Defines how the selected items are displayed, valid values are "comma" and "chip".
     * @defaultValue comma
     */
    display?: 'comma' | 'chip' | undefined;
    /**
     * Icon class of the dropdown icon.
     * @defaultValue pi pi-chevron-down
     */
    dropdownIcon?: string | undefined;
    /**
     * Text to display when there is no data.
     */
    emptyMessage?: string | undefined;
    /**
     * @todo Write the documentation.
     */
    expandedKeys?: TreeSelectExpandedKeysType | undefined;
    /**
     * When specified, displays an input field to filter the items.
     * @defaultValue false
     */
    filter?: boolean | undefined;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @defaultValue label
     */
    filterBy?: string | undefined;
    /**
     * When the panel is opened, it specifies that the filter input should focus automatically.
     * @defaultValue true
     */
    filterInputAutoFocus?: boolean | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @defaultValue undefined
     */
    filterLocale?: string | undefined;
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
     * The template for filter element.
     */
    filterTemplate?: React.ReactNode | ((options: TreeSelectFilterOptions) => React.ReactNode);
    /**
     * When filtering is enabled, the value of input field.
     */
    filterValue?: string | undefined;
    /**
     * Identifier of the input element.
     */
    inputId?: string | undefined;
    /**
     * @todo Write the documentation.
     */
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue true
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Name of the input element.
     */
    name?: string | undefined;
    /**
     * An array of options to display.
     */
    options?: TreeNode[] | undefined;
    /**
     * Style class of the overlay panel element.
     */
    panelClassName?: string | undefined;
    /**
     * The template of footer.
     */
    panelFooterTemplate?: React.ReactNode | ((props: TreeSelectProps) => React.ReactNode);
    /**
     * The template of header.
     */
    panelHeaderTemplate?: React.ReactNode | ((options: TreeSelectPanelHeaderTemplateOptions) => React.ReactNode);
    /**
     * Inline style of the overlay panel element.
     */
    panelStyle?: React.CSSProperties | undefined;
    /**
     * Hint text for the input field.
     */
    placeholder?: string | undefined;
    /**
     * Clears the filter value when hiding the dropdown.
     * @defaultValue false
     */
    resetFilterOnHide?: boolean | undefined;
    /**
     * Maximum height of the options panel.
     * @defaultValue 400px
     */
    scrollHeight?: string | undefined;
    /**
     * Defines the selection mode, valid values "single", "multiple", and "checkbox".
     */
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     */
    transitionOptions?: CSSTransitionProps | undefined;
    /**
     * A single or an object of keys to control the selection state.
     */
    value?: string | TreeSelectSelectionKeysType | TreeSelectSelectionKeysType[] | undefined | null;
    /**
     * The template of selected values.
     */
    valueTemplate?: React.ReactNode | ((selectedNodes: TreeNode | TreeNode[], props: TreeSelectProps) => React.ReactNode);
    /**
     * Callback to invoke when selection changes.
     * @param {TreeSelectChangeEvent} event - Custom change event.
     */
    onChange?(event: TreeSelectChangeEvent): void;
    /**
     * Callback to invoke when filter value changes.
     * @param {TreeSelectFilterValueChangeEvent} event - Custom filter change event.
     */
    onFilterValueChange?(event: TreeSelectFilterValueChangeEvent): void;
    /**
     * Used to hide the overlay.
     */
    onHide?(): void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeSelectEventNodeEvent} event - Custom change event.
     */
    onNodeCollapse?(event: TreeSelectEventNodeEvent): void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeSelectEventNodeEvent} event - Custom change event.
     */
    onNodeExpand?(event: TreeSelectEventNodeEvent): void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeSelectEventNodeEvent} event - Custom change event.
     */
    onNodeSelect?(event: TreeSelectEventNodeEvent): void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeSelectEventNodeEvent} event - Custom change event.
     */
    onNodeUnselect?(event: TreeSelectEventNodeEvent): void;
    /**
     * Used to show the overlay.
     */
    onShow?(): void;
    /**
     * Callback to invoke when a node is toggled.
     * @param {TreeSelectExpandedEvent} event - Custom toggle event.
     */
    onToggle?(event: TreeSelectExpandedEvent): void;
}

/**
 * @group Component
 */
export declare class TreeSelect extends React.Component<TreeSelectProps, any> {
    /**
     * Used to focus the component.
     */
    public focus(): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
