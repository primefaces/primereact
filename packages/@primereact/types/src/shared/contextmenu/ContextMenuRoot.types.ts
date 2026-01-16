/**
 *
 * ContextMenu ContextMenu uses Menu component and displays an overlay menu to display actions related to a trigger.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MenuRootPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useContextMenuExposes, useContextMenuOpenChangeEvent, useContextMenuProps, useContextMenuState } from './useContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenu component.
 */
export type ContextMenuRootPassThroughType<E> = PassThroughType<ContextMenuRootInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenu component.
 * @extends MenuRootPassThrough
 */
export interface ContextMenuRootPassThrough extends MenuRootPassThrough {}

/**
 * Event fired when the contextmenu's open state changes.
 * @extends useContextMenuOpenChangeEvent
 */
export interface ContextMenuRootChangeEvent extends useContextMenuOpenChangeEvent {}

/**
 * Defines valid properties in ContextMenu component.
 */
export interface ContextMenuRootProps extends BaseComponentProps<ContextMenuRootInstance, Omit<useContextMenuProps, 'onOpenChange'>, ContextMenuRootPassThrough> {
    /**
     * Callback function that is called when the trigger is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The open value of the dialog.
     * @returns void
     */
    onOpenChange?: (event: ContextMenuRootChangeEvent) => void;
}

/**
 * Defines valid state in ContextMenu component.
 * @extends useContextMenuState
 */
export interface ContextMenuRootState extends useContextMenuState {}

/**
 * Defines the methods and properties exposed by ContextMenu component.
 * @extends useContextMenuExposes
 */
export interface ContextMenuRootExposes extends useContextMenuExposes {}

/**
 * Instance of ContextMenu component.
 */
export type ContextMenuRootInstance = ComponentInstance<ContextMenuRootProps, ContextMenuRootState, ContextMenuRootExposes>;
