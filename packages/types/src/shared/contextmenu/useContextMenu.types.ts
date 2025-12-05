/**
 *
 * The useContextMenu manages the state and functionality of a contextmenu component.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module usecontextmenu
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { useMenuExposes, useMenuOpenChangeEvent, useMenuProps, useMenuState } from '@primereact/types/shared/menu';

/**
 * Event fired when the contextmenu's open state changes.
 */
export interface useContextMenuOpenChangeEvent extends useMenuOpenChangeEvent {}

/**
 * Defines valid properties in useContextMenu.
 */
export interface useContextMenuProps extends Omit<useMenuProps, 'composite'> {}

/**
 * Defines valid state in useContextMenu.
 */
export interface useContextMenuState extends useMenuState {}

/**
 * Defines the methods and properties exposed by useContextMenu.
 */
export interface useContextMenuExposes extends useMenuExposes {}

/**
 * Instance of useContextMenu headless.
 */
export type useContextMenuInstance = HeadlessInstance<useContextMenuProps, useContextMenuState, useContextMenuExposes>;
