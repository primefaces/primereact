/**
 *
 * TreeSelect is a form component to choose from hierarchical data.
 *
 * [Live Demo](https://www.primereact.org/treeselect/)
 *
 * @module treeselect
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import TreeNode from '../treenode';
import { FormEvent } from '../ts-helpers';
import { IconType } from '../utils/utils';

/**
 * Custom panel header template options.
 */
interface TreeSelectPanelHeaderTemplateOptions {
    /**
     * Style class of the panel.
     */
    className: string;
    /**
     * The JSX element that represents the filter of the panel.
     */
    filterElement: JSX.Element;
    /**
     * The JSX element that represents the close of the panel.
     */
    closeElement: JSX.Element;
    /**
     * Style class of the panel close element.
     */
    closeElementClassName: string;
    /**
     * Style class of the panel close icon.
     */
    closeIconClassName: string;
    /**
     * Callback to invoke when the close button is clicked.
     */
    onCloseClick(): void;
    /**
     * The JSX element that represents the panel.
     */
    element: JSX.Element;
    /**
     * The props of the TreeSelect component.
     */
    props: TreeSelectProps;
}

/**
 * Custom change event.
 * @see {@link TreeSelectProps.onChange}
 * @extends {FormEvent}
 * @event
 */
interface TreeSelectChangeEvent extends FormEvent<string | TreeSelectSelectionKeysType | TreeSelectSelectionKeysType[]> {}

/**
 * Custom treeselect selection keys type
 */
interface TreeSelectSelectionKeysType {
    /**
     * Extra options.
     */
    [key: string]: boolean | TreeSelectCheckboxSelectionKeyType;
}

/**
 * Custom checkbox selection key type
 */
interface TreeSelectCheckboxSelectionKeyType {
    /**
     * Whether the checkbox is checked or not.
     */
    checked?: boolean;
    /**
     * Whether the checkbox is partially checked or not.
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
 * Custom expanded keys type.
 */
interface TreeSelectExpandedKeysType {
    /**
     * Extra options.
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
 * Custom filter options.
 */
interface TreeSelectFilterOptions {
    /**
     * Used to filter options
     * @param {KeyboardEvent} event - Browser event.
     */
    filter?: (event?: KeyboardEvent) => void;
    /**
     * Used to reset the filtered options
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
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledBy?: string | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * Icon of the close button.
     */
    closeIcon?: IconType<TreeSelectProps> | undefined;
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
     * Icon of the dropdown.
     */
    dropdownIcon?: IconType<TreeSelectProps> | undefined;
    /**
     * Text to display when there is no data.
     */
    emptyMessage?: string | undefined;
    /**
     * An array of keys to represent the state of the treeselect expansion state in controlled mode.
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
     * Icon of the filter.
     */
    filterIcon?: IconType<TreeSelectProps> | undefined;
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
     * Reference of the input element.
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
 * **PrimeReact - TreeSelect**
 *
 * _TreeSelect is a form component to choose from hierarchical data._
 *
 * [Live Demo](https://www.primereact.org/treeselect/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
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
