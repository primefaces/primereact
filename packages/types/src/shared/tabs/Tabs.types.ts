/**
 *
 * Tabs component is used to select a boolean value.
 *
 * [Live Demo](https://www.primereact.org/tabs/)
 *
 * @module tabs
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { useTabsExposes, useTabsProps, useTabsState } from './useTabs.types';

/**
 * Defines passthrough(pt) options type in Tabs component.
 */
export type TabsPassThroughType<E> = PassThroughType<TabsInstance, E>;

/**
 * Defines passthrough(pt) options of Tabs component.
 */
export interface TabsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Tabs component.
 */
export interface TabsProps extends BaseComponentProps<TabsInstance, useTabsProps> {
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @default false
     */
    lazy?: boolean | undefined;
    /**
     * When specified, enables horizontal and/or vertical scrolling.
     * @default false
     */
    scrollable?: boolean;
    /**
     * Whether to display navigation buttons in container when scrollable is enabled.
     * @default true
     */
    showNavigators?: boolean;
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabindex?: number;
    /**
     * When enabled, the focused tab is activated.
     * @default false
     */
    selectOnFocus?: boolean;
}

/**
 * Defines valid state in Tabs component.
 */
export interface TabsState extends useTabsState {}

/**
 * Defines the methods and properties exposed by Tabs component.
 */
export interface TabsExposes extends useTabsExposes {}

/**
 * Defines the CSS class names used in the Tabs component.
 */
export const TabsClassNames = {} as const;

/**
 * Type representing the CSS class names used in the Tabs component.
 */
export type TabsClassNamesType = (typeof TabsClassNames)[keyof typeof TabsClassNames];

/**
 * Instance of Switch component.
 */
export type TabsInstance = ComponentInstance<TabsProps, TabsState, TabsExposes, TabsPassThrough>;
