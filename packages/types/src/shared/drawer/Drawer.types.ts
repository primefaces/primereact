/**
 *
 * Drawer is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawer
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDrawerChangeEvent, useDrawerExposes, useDrawerProps, useDrawerState } from './useDrawer.types';

/**
 * Defines passthrough(pt) options type in Drawer component.
 */
export type DrawerPassThroughType<E> = PassThroughType<DrawerInstance, E>;

/**
 * Defines passthrough(pt) options of Drawer component.
 */
export interface DrawerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DrawerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: DrawerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: DrawerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: DrawerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DrawerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: DrawerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the close's DOM element.
     */
    close?: DrawerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DrawerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: DrawerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the drawer's open state changes.
 * @extends useDrawerChangeEvent
 */
export interface DrawerChangeEvent extends useDrawerChangeEvent {}

/**
 * Defines valid properties in Drawer component.
 */
export interface DrawerProps extends BaseComponentProps<DrawerInstance, Omit<useDrawerProps, 'onOpenChange'>, DrawerPassThrough> {
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
    onOpenChange?: (event: DrawerChangeEvent) => void;
}

/**
 * Defines valid state in Drawer component.
 * @extends useDrawerState
 */
export interface DrawerState extends useDrawerState {}

/**
 * Defines the methods and properties exposed by Drawer component.
 * @extends useDrawerExposes
 */
export interface DrawerExposes extends useDrawerExposes {}

/**
 * Defines the CSS class names used in the Drawer component.
 */
export const DrawerClassNames = {
    /**
     * Class name of the mask element
     */
    mask: 'p-drawer-mask',
    /**
     * Class name of the root element
     */
    root: 'p-drawer',
    /**
     * Class name of the trigger button element
     */
    trigger: 'p-drawer-trigger-button',
    /**
     * Class name of the header element
     */
    header: 'p-drawer-header',
    /**
     * Class name of the title element
     */
    title: 'p-drawer-title',
    /**
     * Class name of the close button element
     */
    close: 'p-drawer-close-button',
    /**
     * Class name of the content element
     */
    content: 'p-drawer-content',
    /**
     * Class name of the footer element
     */
    footer: 'p-drawer-footer'
} as const;

/**
 * Type representing the CSS class names used in the Drawer component.
 */
export type DrawerClassNamesType = (typeof DrawerClassNames)[keyof typeof DrawerClassNames];

/**
 * Instance of Drawer component.
 */
export type DrawerInstance = ComponentInstance<DrawerProps, DrawerState, DrawerExposes>;
