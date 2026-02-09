/**
 *
 * DialogBackdrop is a component that displays the overlay mask behind the dialog.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogbackdrop
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogRootInstance } from './DialogRoot.types';

/**
 * Defines passthrough(pt) options type in DialogBackdrop component.
 */
export type DialogBackdropPassThroughType<E> = PassThroughType<DialogBackdropInstance, E>;

/**
 * Defines passthrough(pt) options of DialogBackdrop component.
 */
export interface DialogBackdropPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogBackdropPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DialogBackdrop component.
 */
export interface DialogBackdropProps extends BaseComponentProps<DialogBackdropInstance, unknown, DialogBackdropPassThrough> {}

/**
 * Defines valid state in DialogBackdrop component.
 */
export interface DialogBackdropState {}

/**
 * Defines the methods and properties exposed by DialogBackdrop component.
 */
export interface DialogBackdropExposes {
    /**
     * The Dialog component instance.
     */
    dialog: DialogRootInstance | undefined | null;
}

/**
 * Instance of DialogBackdrop component.
 */
export type DialogBackdropInstance = ComponentInstance<DialogBackdropProps, DialogBackdropState, DialogBackdropExposes>;
