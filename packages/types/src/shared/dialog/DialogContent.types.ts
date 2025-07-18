/**
 *
 * DialogContent is a component that displays content.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogContent component.
 */
export type DialogContentPassThroughType<E> = PassThroughType<DialogContentInstance, E>;

/**
 * Defines passthrough(pt) options of DialogContent component.
 */
export interface DialogContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DialogContent component.
 */
export interface DialogContentProps extends BaseComponentProps<DialogContentInstance, unknown, DialogContentPassThrough> {}

/**
 * Defines valid state in DialogContent component.
 */
export interface DialogContentState {}

/**
 * Defines the methods and properties exposed by DialogContent component.
 */
export interface DialogContentExposes {
    /**
     * The Dialog component instance.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogContent component.
 */
export type DialogContentInstance = ComponentInstance<DialogContentProps, DialogContentState, DialogContentExposes>;
