/**
 *
 * DialogHeader is a component that displays header.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogHeader component.
 */
export type DialogHeaderPassThroughType<E> = PassThroughType<DialogHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of DialogHeader component.
 */
export interface DialogHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DialogHeader component.
 */
export interface DialogHeaderProps extends BaseComponentProps<DialogHeaderInstance, unknown, DialogHeaderPassThrough> {}

/**
 * Defines valid state in DialogHeader component.
 */
export interface DialogHeaderState {}

/**
 * Defines the methods and properties exposed by DialogHeader component.
 */
export interface DialogHeaderExposes {
    /**
     * The Dialog component instance.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogHeader component.
 */
export type DialogHeaderInstance = ComponentInstance<DialogHeaderProps, DialogHeaderState, DialogHeaderExposes>;
