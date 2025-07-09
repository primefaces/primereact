/**
 *
 * DrawerContent is a component that displays content.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawercontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerInstance } from './Drawer.types';

/**
 * Defines passthrough(pt) options type in DrawerContent component.
 */
export type DrawerContentPassThroughType<E> = PassThroughType<DrawerContentInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerContent component.
 */
export interface DrawerContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DrawerContent component.
 */
export interface DrawerContentProps extends BaseComponentProps<DrawerContentInstance, unknown, DrawerContentPassThrough> {}

/**
 * Defines valid state in DrawerContent component.
 */
export interface DrawerContentState {}

/**
 * Defines the methods and properties exposed by DrawerContent component.
 */
export interface DrawerContentExposes {
    /**
     * The Drawer component instance.
     */
    drawer: DrawerInstance | undefined | null;
}

/**
 * Instance of DrawerContent component.
 */
export type DrawerContentInstance = ComponentInstance<DrawerContentProps, DrawerContentState, DrawerContentExposes>;
