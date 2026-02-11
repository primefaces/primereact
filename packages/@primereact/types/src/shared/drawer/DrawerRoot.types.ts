/**
 *
 * Drawer is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawerroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDrawerChangeEvent, useDrawerExposes, useDrawerProps, useDrawerState } from './useDrawer.types';

/**
 * Defines passthrough(pt) options type in Drawer component.
 */
export type DrawerRootPassThroughType<E> = PassThroughType<DrawerRootInstance, E>;

/**
 * Defines passthrough(pt) options of Drawer component.
 */
export interface DrawerRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the backdrop's DOM element.
     */
    backdrop?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the close's DOM element.
     */
    close?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: DrawerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the drawer's open state changes.
 * @extends useDrawerChangeEvent
 */
export interface DrawerRootChangeEvent extends useDrawerChangeEvent {}

/**
 * Defines valid properties in Drawer component.
 */
export interface DrawerRootProps extends BaseComponentProps<DrawerRootInstance, Omit<useDrawerProps, 'onOpenChange'>, DrawerRootPassThrough> {
    /**
     * Position of the drawer.
     * @default left
     */
    position?: 'left' | 'right' | 'top' | 'bottom' | 'full' | undefined;
    /**
     * Callback function that is called when the trigger is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The open value of the drawer.
     * @returns void
     */
    onOpenChange?: (event: DrawerRootChangeEvent) => void;
}

/**
 * Defines valid state in Drawer component.
 * @extends useDrawerState
 */
export interface DrawerRootState extends useDrawerState {}

/**
 * Defines the methods and properties exposed by Drawer component.
 * @extends useDrawerExposes
 */
export interface DrawerRootExposes extends useDrawerExposes {}

/**
 * Instance of Drawer component.
 */
export type DrawerRootInstance = ComponentInstance<DrawerRootProps, DrawerRootState, DrawerRootExposes>;
