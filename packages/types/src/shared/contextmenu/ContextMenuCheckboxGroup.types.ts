/**
 *
 * ContextMenuCheckboxGroup is a component that displays checkbox group.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenucheckboxgroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MenuCheckboxGroupPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuCheckboxGroupInstance, MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuCheckboxGroup component.
 */
export type ContextMenuCheckboxGroupPassThroughType<E> = PassThroughType<ContextMenuCheckboxGroupInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuCheckboxGroup component.
 * @extends MenuCheckboxGroupPassThrough
 */
export interface ContextMenuCheckboxGroupPassThrough extends MenuCheckboxGroupPassThrough {}

/**
 * Event object for the onValueChange callback.
 */
export interface ContextMenuCheckboxGroupValueChangeEvent {
    /**
     * The new selected value.
     */
    value: unknown;
}

/**
 * Defines valid properties in ContextMenuCheckboxGroup component.
 */
export interface ContextMenuCheckboxGroupProps extends BaseComponentProps<ContextMenuCheckboxGroupInstance, Omit<MenuCheckboxGroupInstance, 'onValueChange'>, ContextMenuCheckboxGroupPassThrough> {
    /**
     * Callback to invoke when value changes.
     */
    onValueChange?: (event: ContextMenuCheckboxGroupValueChangeEvent) => void;
}

/**
 * Defines valid state in ContextMenuCheckboxGroup component.
 */
export interface ContextMenuCheckboxGroupState {}

/**
 * Defines the methods and properties exposed by ContextMenuCheckboxGroup component.
 */
export interface ContextMenuCheckboxGroupExposes {
    /**
     * The ContextMenu component instance.
     */
    contextmenu: ContextMenuInstance | undefined | null;
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
}

/**
 * Instance of ContextMenuCheckboxGroup component.
 */
export type ContextMenuCheckboxGroupInstance = ComponentInstance<ContextMenuCheckboxGroupProps, ContextMenuCheckboxGroupState, ContextMenuCheckboxGroupExposes>;
