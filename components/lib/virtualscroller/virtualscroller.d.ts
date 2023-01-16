/**
 *
 * VirtualScroller is a performant approach to handle huge data efficiently.
 *
 * [Live Demo](https://www.primefaces.org/primereact/virtualscroller/)
 *
 * @module virtualscroller
 *
 */

import * as React from 'react';

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerOptionsType {
    /**
     * @todo Write the documentation.
     */
    left: number;
    /**
     * @todo Write the documentation.
     */
    top: number;
    /**
     * @todo Write the documentation.
     */
    behavior: 'auto' | 'smooth';
}

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerViewportRenderedRange {
    /**
     * @todo Write the documentation.
     */
    first: number;
    /**
     * @todo Write the documentation.
     */
    last: number;
}

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerRenderedRange {
    /**
     * @todo Write the documentation.
     */
    first: number;
    /**
     * @todo Write the documentation.
     */
    last: number;
    /**
     * @todo Write the documentation.
     */
    viewport: VirtualScrollerViewportRenderedRange;
}

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerState {
    /**
     * @todo Write the documentation.
     */
    rows: number;
    /**
     * @todo Write the documentation.
     */
    cols: number;
}

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerTemplateOptions {
    /**
     * @todo Write the documentation.
     */
    index: number;
    /**
     * @todo Write the documentation.
     */
    count: number;
    /**
     * @todo Write the documentation.
     */
    first: boolean;
    /**
     * @todo Write the documentation.
     */
    last: boolean;
    /**
     * @todo Write the documentation.
     */
    even: boolean;
    /**
     * @todo Write the documentation.
     */
    odd: boolean;
    /**
     * @todo Write the documentation.
     */
    props: VirtualScrollerProps;
}

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerLoadingTemplateOptions extends VirtualScrollerTemplateOptions {
    /**
     * @todo Write the documentation.
     */
    numCols: number;
    /**
     * @todo Write the documentation.
     */
    [key: string]: any;
}

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerLoaderIconTemplateOptions {
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
    props: VirtualScrollerProps;
}

/**
 * @todo Write the documentation.
 */
interface VirtualScrollerContentTemplateOptions {
    /**
     * @todo Write the documentation.
     */
    className: string;
    /**
     * @todo Write the documentation.
     */
    contentRef: any;
    /**
     * @todo Write the documentation.
     */
    spacerRef: any;
    /**
     * @todo Write the documentation.
     */
    stickyRef: any;
    /**
     * @todo Write the documentation.
     */
    items: any[] | any[][] | undefined | null;
    /**
     * @todo Write the documentation.
     */
    getItemOptions(index: number): VirtualScrollerTemplateOptions;
    /**
     * @todo Write the documentation.
     */
    children: any;
    /**
     * @todo Write the documentation.
     */
    element: JSX.Element;
    /**
     * @todo Write the documentation.
     */
    props: VirtualScrollerProps;
    /**
     * @todo Write the documentation.
     */
    loading: boolean;
    /**
     * @todo Write the documentation.
     */
    getLoaderOptions(index: number, ext?: object): VirtualScrollerLoadingTemplateOptions;
    /**
     * @todo Write the documentation.
     */
    loadingTemplate: React.ReactNode | ((options: VirtualScrollerLoadingTemplateOptions) => React.ReactNode);
    /**
     * @todo Write the documentation.
     */
    itemSize: number | number[];
    /**
     * @todo Write the documentation.
     */
    rows: any[];
    /**
     * @todo Write the documentation.
     */
    columns: any[];
    /**
     * @todo Write the documentation.
     */
    vertical: boolean;
    /**
     * @todo Write the documentation.
     */
    horizontal: boolean;
    /**
     * @todo Write the documentation.
     */
    both: boolean;
}

/**
 * Custom change event.
 * @see {@link VirtualScrollerProps.onScrollIndexChange}
 * @event
 */
interface VirtualScrollerChangeEvent {
    /**
     * First index of the new data range to be loaded.
     */
    first: number | VirtualScrollerState;
    /**
     * Last index of the new data range to be loaded.
     */
    last: number | VirtualScrollerState;
}

/**
 * Custom lazy load event.
 * @see {@link VirtualScrollerProps.onLazyLoad}
 * @extends {VirtualScrollerChangeEvent}
 * @event
 */
interface VirtualScrollerLazyEvent extends VirtualScrollerChangeEvent {}

/**
 * Defines valid properties in VirtualScroller component.
 * @group Properties
 */
export interface VirtualScrollerProps {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * Inline style of the component.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Style class of the component.
     */
    className?: string | undefined;
    /**
     * An array of objects to display.
     */
    items?: any[] | any[][] | undefined | null;
    /**
     * The height/width of item according to orientation.
     */
    itemSize?: number | number[] | undefined;
    /**
     * Height of the scroll viewport.
     */
    scrollHeight?: string | undefined;
    /**
     * Width of the scroll viewport.
     */
    scrollWidth?: string | undefined;
    /**
     * The orientation of scrollbar, valid values are 'vertical', 'horizontal' and 'both'.
     * @defaultValue 'vertical'
     */
    orientation?: 'vertical' | 'horizontal' | 'both' | undefined;
    /**
     * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
     */
    numToleratedItems?: number | undefined;
    /**
     * Delay in scroll before new data is loaded.
     * @defaultValue 0
     */
    delay?: number | undefined;
    /**
     * Delay after window's resize finishes.
     * @defaultValue 10
     */
    resizeDelay?: number | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * If disabled, the VirtualScroller feature is eliminated and the content is displayed directly.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Used to implement a custom loader instead of using the loader feature in the VirtualScroller.
     * @defaultValue false
     */
    loaderDisabled?: boolean | undefined;
    /**
     * @todo Write the documentation.
     */
    columns?: any | undefined;
    /**
     * Whether the data is loaded.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Whether to dynamically change the height or width of scrollable container.
     * @defaultValue false
     */
    autoSize?: boolean | undefined;
    /**
     * Used to implement a custom spacer instead of using the spacer feature in the VirtualScroller.
     * @defaultValue true
     */
    showSpacer?: boolean | undefined;
    /**
     * Whether to show loader.
     * @defaultValue false
     */
    showLoader?: boolean | undefined;
    /**
     * The template of loader.
     */
    loadingTemplate?: React.ReactNode | ((options: VirtualScrollerLoadingTemplateOptions) => React.ReactNode);
    /**
     * The template of loader's icon.
     */
    loaderIconTemplate?: React.ReactNode | ((options: VirtualScrollerLoaderIconTemplateOptions) => React.ReactNode);
    /**
     * The template of item.
     */
    itemTemplate?: React.ReactNode | ((item: any, options: VirtualScrollerTemplateOptions) => React.ReactNode);
    /**
     * The template of item's wrapper element.
     */
    contentTemplate?: React.ReactNode | ((options: VirtualScrollerContentTemplateOptions) => React.ReactNode);
    /**
     * Callback to invoke when scroll position changes.
     * @param {React.UIEvent<HTMLElement>} event - @todo Write the documentation.
     */
    onScroll?(event: React.UIEvent<HTMLElement>): void;
    /**
     * Callback to invoke when scroll position and item's range in view changes.
     * @param {VirtualScrollerChangeEvent} event - Custom change event
     */
    onScrollIndexChange?(event: VirtualScrollerChangeEvent): void;
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {VirtualScrollerLazyEvent} event - Custom lazy load event.
     */
    onLazyLoad?(event: VirtualScrollerLazyEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class VirtualScroller extends React.Component<VirtualScrollerProps, any> {
    /**
     * Returns the reference of virtualScroller's container.
     */
    public getElementRef(): React.Ref<HTMLDivElement>;
    /**
     * Scroll to move to a specific position.
     * @param {VirtualScrollerOptionsType} options
     */
    public scrollTo(options: VirtualScrollerOptionsType): void;
    /**
     * Scroll to move to a specific item.
     * @param {number} index - @todo Write the documentation.
     * @param {string} behavior - @todo Write the documentation.
     */
    public scrollToIndex(index: number | number[], behavior?: 'auto' | 'smooth'): void;
    /**
     * It is used to move the specified index into the view. It is a method that will usually be needed when keyboard support is added to the virtualScroller component.
     * @param {number} index - @todo Write the documentation.
     * @param {string} to - @todo Write the documentation.
     * @param {string} behavior - @todo Write the documentation.
     */
    public scrollInView(index: number | number[], to: 'to-start' | 'to-end', behavior?: 'auto' | 'smooth'): void;
    /**
     * Returns the range of items added to the DOM.
     */
    public getRenderedRange(): VirtualScrollerRenderedRange;
}
