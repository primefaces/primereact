/**
 *
 * TabsList is a component that displays a container for tabs.
 *
 * [Live Demo](https://www.primereact.org/tabs/)
 *
 * @module tabslist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TabsInstance } from './Tabs.types';

/**
 * Defines passthrough(pt) options type in TabsList component.
 */
export type TabsListPassThroughType<E> = PassThroughType<TabsListInstance, E>;

/**
 * Defines passthrough(pt) options of TabsList component.
 */
export interface TabsListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabsListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TabsList component.
 */
export interface TabsListProps extends BaseComponentProps<TabsListInstance> {}

/**
 * Defines valid state in TabsList component.
 */
export interface TabsListState {}

/**
 * Defines the methods and properties exposed by TabsList component.
 */
export interface TabsListExposes {
    /**
     * The Tabs component instance.
     */
    tabs: TabsInstance | undefined | null;
}

/**
 * Instance of TabsList component.
 */
export type TabsListInstance = ComponentInstance<TabsListProps, TabsListState, TabsListExposes, TabsListPassThrough>;
