/**
 *
 * DialogHeaderActions is a component that displays a header actions.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogheaderactions
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogHeaderActions component.
 */
export type DialogHeaderActionsPassThroughType<E> = PassThroughType<DialogHeaderActionsInstance, E>;

/**
 * Defines passthrough(pt) options of DialogHeaderActions component.
 */
export interface DialogHeaderActionsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogHeaderActionsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DialogHeaderActions component.
 */
export interface DialogHeaderActionsProps extends BaseComponentProps<DialogHeaderActionsInstance, unknown, DialogHeaderActionsPassThrough> {}

/**
 * Defines valid state in DialogHeaderActions component.
 */
export interface DialogHeaderActionsState {}

/**
 * Defines the methods and properties exposed by DialogHeaderActions component.
 */
export interface DialogHeaderActionsExposes {
    /**
     * The dialog instance that the header actions belong to.
     */
    dialog?: DialogInstance | undefined;
}

/**
 * Instance of DialogHeaderActions component.
 */
export type DialogHeaderActionsInstance = ComponentInstance<DialogHeaderActionsProps, DialogHeaderActionsState, DialogHeaderActionsExposes>;
