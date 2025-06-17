/**
 *
 * TabsPanel is a component that displays a container for tabs.
 *
 * [Live Demo](https://www.primereact.org/tabs/)
 *
 * @module tabspanel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TabsInstance } from './Tabs.types';

/**
 * Defines passthrough(pt) options type in TabsPanel component.
 */
export type TabsPanelPassThroughType<E> = PassThroughType<TabsPanelInstance, E>;

/**
 * Defines passthrough(pt) options of TabsPanel component.
 */
export interface TabsPanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabsPanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TabsPanel component.
 */
export interface TabsPanelProps extends BaseComponentProps<TabsPanelInstance> {
    /**
     * Value of the tabpanel.
     */
    value: string | number;
}

/**
 * Defines valid state in TabsPanel component.
 */
export interface TabsPanelState {}

/**
 * Defines the methods and properties exposed by TabsList component.
 */
export interface TabsPanelExposes {
    /**
     * The Tabs component instance.
     */
    tabs: TabsInstance | undefined | null;
}

/**
 * Instance of TabsList component.
 */
export type TabsPanelInstance = ComponentInstance<TabsPanelProps, TabsPanelState, TabsPanelExposes, TabsPanelPassThrough>;
