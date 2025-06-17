/**
 *
 * TabsTab is a component that displays a tab.
 *
 * [Live Demo](https://www.primereact.org/tabs/)
 *
 * @module tabstab
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TabsInstance } from './Tabs.types';

/**
 * Defines passthrough(pt) options type in TabsTab component.
 */
export type TabsTabPassThroughType<E> = PassThroughType<TabsTabInstance, E>;

/**
 * Defines passthrough(pt) options of TabsTab component.
 */
export interface TabsTabPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabsTabPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TabsTab component.
 */
export interface TabsTabProps extends BaseComponentProps<TabsTabInstance> {
    /**
     * Value of the tab.
     */
    value: string | number;
    /**
     * Whether the tab is disabled.
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid state in TabsTab component.
 */
export interface TabsTabState {}

/**
 * Defines the methods and properties exposed by TabsTab component.
 */
export interface TabsTabExposes {
    /**
     * The Tabs component instance.
     */
    tabs: TabsInstance | undefined | null;
}

/**
 * Instance of TabsTab component.
 */
export type TabsTabInstance = ComponentInstance<TabsTabProps, TabsTabState, TabsTabExposes, TabsTabPassThrough>;
