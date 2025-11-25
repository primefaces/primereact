/**
 *
 * ContextMenu uses a Menu UI with <ContextMenu> tag.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenu
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useContextMenuExposes, useContextMenuOpenChangeEvent, useContextMenuProps, useContextMenuState } from './useContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenu component.
 */
export type ContextMenuPassThroughType<E> = PassThroughType<ContextMenuInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenu component.
 */
export interface ContextMenuPassThrough {}

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
    root: 'p-contextmenu'
} as const;

/**
 * Type representing the CSS class names used in the ContextMenu component.
 */
export type ContextMenuClassNamesType = (typeof ContextMenuClassNames)[keyof typeof ContextMenuClassNames];

/**
 * Instance of ContextMenu component.
 */
export type ContextMenuInstance = ComponentInstance<ContextMenuProps, ContextMenuState, ContextMenuExposes>;
