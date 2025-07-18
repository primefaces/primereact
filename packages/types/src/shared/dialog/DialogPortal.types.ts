/**
 *
 * DialogPortal is a component that displays a portal.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogPortal component.
 */
export type DialogPortalPassThroughType<E> = PassThroughType<DialogPortalInstance, E>;

/**
 * Defines passthrough(pt) options of DialogPortal component.
 */
export interface DialogPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogPortalPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DialogPortal component.
 */
export interface DialogPortalProps extends BaseComponentProps<DialogPortalInstance, unknown, DialogPortalPassThrough> {}

/**
 * Defines valid state in DialogPortal component.
 */
export interface DialogPortalState {}

/**
 * Defines the methods and properties exposed by DialogPortal component.
 */
export interface DialogPortalExposes {
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogPortal component.
 */
export type DialogPortalInstance = ComponentInstance<DialogPortalProps, DialogPortalState, DialogPortalExposes>;
