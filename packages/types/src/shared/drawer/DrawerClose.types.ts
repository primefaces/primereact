/**
 *
 * DrawerClose is a component that displays a close button.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawerclose
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DrawerInstance } from './Drawer.types';

/**
 * Defines passthrough(pt) options type in DrawerClose component.
 */
export type DrawerClosePassThroughType<E> = PassThroughType<DrawerCloseInstance, E>;

/**
 * Defines passthrough(pt) options of DrawerClose component.
 */
export interface DrawerClosePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerClosePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DrawerClose component.
 */
export interface DrawerCloseProps extends BaseComponentProps<DrawerCloseInstance, unknown, DrawerClosePassThrough> {
    /**
     * Whether to show the DrawerClose with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Severity type of the DrawerClose.
     * @default 'secondary'
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'help' | 'danger' | 'contrast' | (string & {}) | undefined;
    /**
     * Variant of the DrawerClose.
     * @default 'text'
     */
    variant?: 'text' | 'outlined' | 'link' | undefined;
    /**
     * Whether to show the DrawerClose with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in DrawerClose component.
 */
export interface DrawerCloseState {}

/**
 * Defines the methods and properties exposed by DrawerClose component.
 */
export interface DrawerCloseExposes {
    /**
     * Instance of the Drawer component.
     */
    drawer: DrawerInstance | undefined | null;
}

/**
 * Instance of DrawerClose component.
 */
export type DrawerCloseInstance = ComponentInstance<DrawerCloseProps, DrawerCloseState, DrawerCloseExposes>;
