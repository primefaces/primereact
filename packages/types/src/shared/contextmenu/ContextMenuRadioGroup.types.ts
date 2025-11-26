/**
 *
 * ContextMenuRadioGroup is a component that displays radio group.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuradiogroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MenuRadioGroupPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance, MenuRadioGroupInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuRadioGroup component.
 */
export type ContextMenuRadioGroupPassThroughType<E> = PassThroughType<ContextMenuRadioGroupInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuRadioGroup component.
 * @extends MenuRadioGroupPassThrough
 */
export interface ContextMenuRadioGroupPassThrough extends MenuRadioGroupPassThrough {}

/**
 * Event object for the onValueChange callback.
 */
export interface ContextMenuRadioGroupValueChangeEvent {
    /**
     * The new selected value.
     */
    value: unknown;
}

/**
 * Defines valid properties in ContextMenuRadioGroup component.
 */
export interface ContextMenuRadioGroupProps extends BaseComponentProps<ContextMenuRadioGroupInstance, Omit<MenuRadioGroupInstance, 'onValueChange'>, ContextMenuRadioGroupPassThrough> {
    /**
     * Callback to invoke when value changes.
     */
    onValueChange?: (event: ContextMenuRadioGroupValueChangeEvent) => void;
}

/**
 * Defines valid state in ContextMenuRadioGroup component.
 */
export interface ContextMenuRadioGroupState {}

/**
 * Defines the methods and properties exposed by ContextMenuRadioGroup component.
 */
export interface ContextMenuRadioGroupExposes {
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
 * Instance of ContextMenuRadioGroup component.
 */
export type ContextMenuRadioGroupInstance = ComponentInstance<ContextMenuRadioGroupProps, ContextMenuRadioGroupState, ContextMenuRadioGroupExposes>;
