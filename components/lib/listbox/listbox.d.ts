/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listbox
 *
 */
import * as React from 'react';
import { SelectItemOptionsType } from '../selectitem/selectitem';
import { TooltipOptions } from '../tooltip/tooltipoptions';
import { VirtualScroller, VirtualScrollerProps } from '../virtualscroller';
import { IconType } from '../utils/utils';

/**
 * Custom change target options.
 */
interface ListBoxChangeTargetOptions {
    /**
     * The name of the target.
     */
    name: string;
    /**
     * Unique identifier of the element.
     */
    id: string;
    /**
     * New value of the element.
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
     * Stops the event from propagating.
     */
    stopPropagation(): void;
    /**
     * Prevents the default action of the event.
     */
    preventDefault(): void;
    /**
     * Target element.
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
 * Custom filter template options.
 */
interface ListBoxFilterTemplateOptions {
    /**
     * Style class of the filter.
     */
    className: string;
    /**
     * Whether the option is disabled or not
     */
    disabled?: boolean;
    /**
     * The filter element.
     */
    element: HTMLDivElement;
    /**
     * The filter.
     */
    filter?: string;
    /**
     * Icon of the filter.
     */
    filterIcon?: IconType<ListBox> | string;
    /**
     * Style class of the filter icon.
     */
    filterIconClassName: string;
    /**
     * Browser change event for the filter input element.
     */
    filterInputChange?: React.ChangeEvent<HTMLInputElement>;
    /**
     * The props of the filter input element.
     */
    filterInputProps?: any;
    /**
     * The filter input options.
     */
    filterOptions?: ListBoxFilterOptions;
    /**
     * The placeholder of the filter element.
     */
    filterPlaceholder?: string;
    /**
     * Custom filter template.
     */
    filterTemplate?: React.ReactNode | ((options: ListBoxFilterTemplateOptions) => React.ReactNode);
}

/**
 * Custom filter options.
 */
interface ListBoxFilterOptions {
    /**
     * Used to filter options
     * @param { React.ChangeEvent<HTMLInputElement>} event - Browser event.
     */
    filter?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Used to reset the filtered options
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
     * Text to display when there is no data.
     */
    emptyMessage?: React.ReactNode | ((props: ListBoxProps) => React.ReactNode);
    /**
     * Template to display when filtering does not return any results.
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
 * **PrimeReact - ListBox**
 *
 * _ListBox is used to select one or more values from a list of items._
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
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
     * Used to get the virtual scroller instance.
     * @return {VirtualScroller} Virtual Scroller instance
     */
    public getVirtualScroller(): VirtualScroller;
}
