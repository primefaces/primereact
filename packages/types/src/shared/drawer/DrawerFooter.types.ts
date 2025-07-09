/**
 *
 * DrawerFooter is a component that displays footer.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawerfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerInstance } from './Drawer.types';

/**
 * Defines passthrough(pt) options type in DrawerFooter component.
 */
export type DrawerFooterPassThroughType<E> = PassThroughType<DrawerFooterInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerFooter component.
 */
export interface DrawerFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DrawerFooter component.
 */
export interface DrawerFooterProps extends BaseComponentProps<DrawerFooterInstance, unknown, DrawerFooterPassThrough> {}

/**
 * Defines valid state in DrawerFooter component.
 */
export interface DrawerFooterState {}

/**
 * Defines the methods and properties exposed by DrawerFooter component.
 */
export interface DrawerFooterExposes {
    /**
     * The Drawer component instance.
     */
    drawer: DrawerInstance | undefined | null;
}

/**
 * Instance of DrawerFooter component.
 */
export type DrawerFooterInstance = ComponentInstance<DrawerFooterProps, DrawerFooterState, DrawerFooterExposes>;
