/**
 *
 * DrawerTrigger is a component that displays a trigger button.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawertrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerInstance } from './Drawer.types';

/**
 * Defines passthrough(pt) options type in DrawerTrigger component.
 */
export type DrawerTriggerPassThroughType<E> = PassThroughType<DrawerTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerTrigger component.
 */
export interface DrawerTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DrawerTrigger component.
 */
export interface DrawerTriggerProps extends BaseComponentProps<DrawerTriggerInstance, unknown, DrawerTriggerPassThrough> {}

/**
 * Defines valid state in DrawerTrigger component.
 */
export interface DrawerTriggerState {}

/**
 * Defines the methods and properties exposed by DrawerTrigger component.
 */
export interface DrawerTriggerExposes {
    /**
     * Instance of the Drawer component.
     */
    drawer: DrawerInstance | undefined | null;
}

/**
 * Instance of DrawerTrigger component.
 */
export type DrawerTriggerInstance = ComponentInstance<DrawerTriggerProps, DrawerTriggerState, DrawerTriggerExposes>;
