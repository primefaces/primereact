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
    ariaLabelledBy?: string | undefined;
    children?: React.ReactNode | undefined;
    dataKey?: string | undefined;
    disabled?: boolean | undefined;
    emptyMessage?: React.ReactNode | ((props: ListBoxProps) => React.ReactNode);
    emptyFilterMessage?: React.ReactNode | ((props: ListBoxProps) => React.ReactNode);
    filter?: boolean | undefined;
    filterBy?: string | undefined;
    filterInputProps?: any | undefined;
    filterLocale?: string | undefined;
    filterMatchMode?: string | undefined;
    filterPlaceholder?: string | undefined;
    filterTemplate?: React.ReactNode | ((options: ListBoxFilterTemplateOptions) => React.ReactNode);
    filterValue?: string | undefined;
    itemTemplate?: React.ReactNode | ((option: any) => React.ReactNode);
    listClassName?: string | undefined;
    listStyle?: React.CSSProperties | undefined;
    metaKeySelection?: boolean | undefined;
    multiple?: boolean | undefined;
    optionDisabled?: string | ((option: any) => boolean) | undefined;
    optionGroupChildren?: string | undefined;
    optionGroupLabel?: string | undefined;
    optionGroupTemplate?: React.ReactNode | ((option: any, index: number) => React.ReactNode);
    optionLabel?: string | undefined;
    optionValue?: string | undefined;
    options?: SelectItemOptionsType | undefined;
    tooltip?: string | undefined;
    tooltipOptions?: TooltipOptions | undefined;
    value?: any | undefined;
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
