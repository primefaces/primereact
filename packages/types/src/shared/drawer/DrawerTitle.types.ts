/**
 *
 * DrawerTitle is a component that displays title.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawertitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerInstance } from './Drawer.types';

/**
 * Defines passthrough(pt) options type in DrawerTitle component.
 */
export type DrawerTitlePassThroughType<E> = PassThroughType<DrawerTitleInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerTitle component.
 */
export interface DrawerTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DrawerTitle component.
 */
export interface DrawerTitleProps extends BaseComponentProps<DrawerTitleInstance, unknown, DrawerTitlePassThrough> {}

/**
 * Defines valid state in DrawerTitle component.
 */
export interface DrawerTitleState {}

/**
 * Defines the methods and properties exposed by DrawerTitle component.
 */
export interface DrawerTitleExposes {
    /**
     * The Drawer component instance.
     */
    drawer: DrawerInstance | undefined | null;
}

/**
 * Instance of DrawerTitle component.
 */
export type DrawerTitleInstance = ComponentInstance<DrawerTitleProps, DrawerTitleState, DrawerTitleExposes>;
