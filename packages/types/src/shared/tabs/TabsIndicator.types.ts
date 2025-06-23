/**
 *
 * TabsIndicator is a component that displays a container for tabs.
 *
 * [Live Demo](https://www.primereact.org/tabs/)
 *
 * @module tabsindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TabsInstance } from './Tabs.types';

/**
 * Defines passthrough(pt) options type in TabsIndicator component.
 */
export type TabsIndicatorPassThroughType<E> = PassThroughType<TabsIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of TabsIndicator component.
 */
export interface TabsIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabsIndicatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TabsIndicator component.
 */
export interface TabsIndicatorProps extends BaseComponentProps<TabsIndicatorInstance, unknown, TabsIndicatorPassThrough> {
    /**
     * Value of the tabsindicator.
     */
    value?: string | number | undefined;
}

/**
 * Defines valid state in TabsIndicator component.
 */
export interface TabsIndicatorState {}

/**
 * Defines the methods and properties exposed by TabsIndicator component.
 */
export interface TabsIndicatorExposes {
    /**
     * The Tabs component instance.
     */
    tabs: TabsInstance | undefined | null;
}

/**
 * Instance of TabsIndicator component.
 */
export type TabsIndicatorInstance = ComponentInstance<TabsIndicatorProps, TabsIndicatorState, TabsIndicatorExposes>;
