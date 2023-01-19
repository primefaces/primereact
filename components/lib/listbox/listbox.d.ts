/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primefaces.org/primereact/listbox/)
 *
 * @module listbox
 *
 */
import * as React from 'react';
import { SelectItemOptionsType } from '../selectitem/selectitem';
import TooltipOptions from '../tooltip/tooltipoptions';
import { VirtualScroller, VirtualScrollerProps } from '../virtualscroller';

/**
 * @todo Write the description
 */
interface ListBoxChangeTargetOptions {
    /**
     * @todo Write the description
     */
    name: string;
    /**
     * @todo Write the description
     */
    id: string;
    /**
     * @todo Write the description
     */
    value: any;
}

/**
 * Custom change event.
 * @see {@link ListBoxProps.onChange}
 * @event
 */
interface ListBoxChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Single value or an array of values depending on the selection mode
     */
    value: any;
    /**
     * @todo Write the description
     */
    stopPropagation(): void;
    /**
     * @todo Write the description
     */
    preventDefault(): void;
    /**
     * @todo Write the description
     */
    target: ListBoxChangeTargetOptions;
}

/**
 * Custom filter value change event.
 * @see {@link ListBoxProps.onFilterValueChange}
 * @event
 */
interface ListBoxFilterValueChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * The filtered value
     */
    value: any;
}

/**
 * @todo Write the description
 */
interface ListBoxFilterTemplateOptions {
    /**
     * @todo Write the description
     */
    className: string;
    /**
     * @todo Write the description
     */
    disabled?: boolean;
    /**
     * @todo Write the description
     */
    element: HTMLDivElement;
    /**
     * @todo Write the description
     */
    filter?: string;
    /**
     * @todo Write the description
     */
    filterIconClassName: string;
    /**
     * @todo Write the description
     */
    filterInputChange?: React.ChangeEvent<HTMLInputElement>;
    /**
     * @todo Write the description
     */
    filterInputProps?: any;
    /**
     * @todo Write the description
     */
    filterOptions?: ListBoxFilterOptions;
    /**
     * @todo Write the description
     */
    filterPlaceholder?: string;
    /**
     * @todo Write the description
     */
    filterTemplate?: React.ReactNode | ((options: ListBoxFilterTemplateOptions) => React.ReactNode);
}

/**
 * @todo Write the description
 */
interface ListBoxFilterOptions {
    /**
     * @todo Write the description
     */
    filter?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * @todo Write the description
     */
    reset?: () => void;
}

/**
 * Defines valid properties in ListBox component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ListBoxProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
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
     * A property to uniquely match the value in options for better performance.
     * @defaultValue false
     */
    dataKey?: string | undefined;
    /**
     * When specified, disables the component.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * @todo Write the description
     */
    emptyMessage?: React.ReactNode | ((props: ListBoxProps) => React.ReactNode);
    /**
     * @todo Write the description
     */
    emptyFilterMessage?: React.ReactNode | ((props: ListBoxProps) => React.ReactNode);
    /**
     * When specified, displays a filter input at header.
     * @defaultValue false
     */
    filter?: boolean | undefined;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @defaultValue label
     */
    filterBy?: string | undefined;
    /**
     * Props for the filter input, any prop is passed implicity to the filter input element.
     * @defaultValue undefined
     */
    filterInputProps?: any | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @defaultValue undefined
     */
    filterLocale?: string | undefined;
    /**
     * Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".
     * @defaultValue contains
     */
    filterMatchMode?: string | undefined;
    /**
     * Placeholder text to show when filter input is empty.
     */
    filterPlaceholder?: string | undefined;
    /**
     * Custom template for the filter element.
     */
    filterTemplate?: React.ReactNode | ((options: ListBoxFilterTemplateOptions) => React.ReactNode);
    /**
     * When specified, filter displays with this value.
     */
    filterValue?: string | undefined;
    /**
     * Custom template for the items.
     */
    itemTemplate?: React.ReactNode | ((option: any) => React.ReactNode);
    /**
     * Inline style class of inner list element.
     */
    listClassName?: string | undefined;
    /**
     * Inline style of inner list element.
     */
    listStyle?: React.CSSProperties | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue true
     */
    metaKeySelection?: boolean | undefined;
    /**
     * When specified, allows selecting multiple values.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: string | ((option: any) => boolean) | undefined;
    /**
     * Property name or getter function that refers to the children options of option group.
     */
    optionGroupChildren?: string | undefined;
    /**
     * Property name or getter function to use as the label of an option group.
     */
    optionGroupLabel?: string | undefined;
    /**
     * Template of an option group item.
     */
    optionGroupTemplate?: React.ReactNode | ((option: any, index: number) => React.ReactNode);
    /**
     * Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.
     */
    optionLabel?: string | undefined;
    /**
     * Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.
     */
    optionValue?: string | undefined;
    /**
     * An array of objects to display as the available options.
     */
    options?: SelectItemOptionsType | undefined;
    /**
     * Content of the tooltip.
     */
    tooltip?: string | undefined;
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions?: TooltipOptions | undefined;
    /**
     * Selected value to display.
     */
    value?: any | undefined;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * @type {VirtualScrollerProps}
     */
    virtualScrollerOptions?: VirtualScrollerProps | undefined;
    /**
     * Callback to invoke when value of listbox changes.
     * @param {ListBoxChangeEvent} event - Custom change event.
     */
    onChange?(event: ListBoxChangeEvent): void;
    /**
     * Callback to invoke when filter value changes.
     * @param {ListBoxFilterValueChangeEvent} event - Custom filter value change event.
     */
    onFilterValueChange?(event: ListBoxFilterValueChangeEvent): void;
}

/**
 * @group Component
 */
export declare class ListBox extends React.Component<ListBoxProps, any> {
    /**
     * Used to focus the component.
     */
    public focus(): void;
    /**
     * Used to get container element.
     * @return {HTMLSpanElement} Container element
     */
    public getElement(): HTMLDivElement;
    /**
     * @todo Write the description
     * @return {VirtualScroller} @todo Write the description
     */
    public getVirtualScroller(): VirtualScroller;
}
