/**
 *
 * TabsPanels is a component that displays a container for panels.
 *
 * [Live Demo](https://www.primereact.org/tabs/)
 *
 * @module tabspanels
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TabsInstance } from './Tabs.types';

/**
 * Defines passthrough(pt) options type in TabsPanels component.
 */
export type TabsPanelsPassThroughType<E> = PassThroughType<TabsPanelsInstance, E>;

/**
 * Defines passthrough(pt) options of TabsPanels component.
 */
export interface TabsPanelsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabsPanelsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TabsPanels component.
 */
export interface TabsPanelsProps extends BaseComponentProps<TabsPanelsInstance, unknown, TabsPanelsPassThrough> {}

/**
 * Defines valid state in TabsPanels component.
 */
export interface TabsPanelsState {}

/**
 * Defines the methods and properties exposed by TabsPanels component.
 */
export interface TabsPanelsExposes {
    /**
     * The Tabs component instance.
     */
    tabs: TabsInstance | undefined | null;
}

/**
 * Instance of TabsPanels component.
 */
export type TabsPanelsInstance = ComponentInstance<TabsPanelsProps, TabsPanelsState, TabsPanelsExposes>;
