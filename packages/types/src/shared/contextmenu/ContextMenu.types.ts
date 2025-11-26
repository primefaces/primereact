/**
 *
 * ContextMenu ContextMenu uses Menu component and displays an overlay menu to display actions related to a trigger.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenu
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MenuPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useContextMenuExposes, useContextMenuOpenChangeEvent, useContextMenuProps, useContextMenuState } from './useContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenu component.
 */
export type ContextMenuPassThroughType<E> = PassThroughType<ContextMenuInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenu component.
 * @extends MenuPassThrough
 */
export interface ContextMenuPassThrough extends MenuPassThrough {}

/**
 * Event fired when the contextmenu's open state changes.
 * @extends useContextMenuOpenChangeEvent
 */
export interface ContextMenuChangeEvent extends useContextMenuOpenChangeEvent {}

/**
 * Defines valid properties in ContextMenu component.
 */
export interface ContextMenuProps extends BaseComponentProps<ContextMenuInstance, Omit<useContextMenuProps, 'onOpenChange'>, ContextMenuPassThrough> {
    /**
     * Callback function that is called when the trigger is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The open value of the dialog.
     * @returns void
     */
    onOpenChange?: (event: ContextMenuChangeEvent) => void;
}

/**
 * Defines valid state in ContextMenu component.
 * @extends useContextMenuState
 */
export interface ContextMenuState extends useContextMenuState {}

/**
 * Defines the methods and properties exposed by ContextMenu component.
 * @extends useContextMenuExposes
 */
export interface ContextMenuExposes extends useContextMenuExposes {}

/**
 * Defines the CSS class names used in the ContextMenu component.
 */
export const ContextMenuClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-contextmenu',
    /**
     * Class name of the list element
     */
    list: 'p-contextmenu-list',
    /**
     * Class name of the submenu element
     */
    submenu: 'p-contextmenu-submenu',
    /**
     * Class name of the separator element
     */
    separator: 'p-contextmenu-separator',
    /**
     * Class name of the item element
     */
    item: 'p-contextmenu-item',
    /**
     * Class name of the checkbox item element
     */
    checkboxItem: 'p-contextmenu-item-checkbox',
    /**
     * Class name of the radio item element
     */
    radioItem: 'p-contextmenu-item-radio',
    /**
     * Class name of the trigger element
     */
    trigger: 'p-contextmenu-trigger',
    /**
     * Class name of the icon element
     */
    icon: 'p-contextmenu-item-icon',
    /**
     * Class name of the checkbox icon element
     */
    checkboxIcon: 'p-contextmenu-checkbox-icon',
    /**
     * Class name of the radio icon element
     */
    radioIcon: 'p-contextmenu-radio-icon'
} as const;

/**
 * Type representing the CSS class names used in the ContextMenu component.
 */
export type ContextMenuClassNamesType = (typeof ContextMenuClassNames)[keyof typeof ContextMenuClassNames];

/**
 * Instance of ContextMenu component.
 */
export type ContextMenuInstance = ComponentInstance<ContextMenuProps, ContextMenuState, ContextMenuExposes>;
