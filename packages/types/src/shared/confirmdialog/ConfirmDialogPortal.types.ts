/**
 *
 * ConfirmDialogPortal is a component that displays a portal.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { DialogInstance } from '../dialog';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogPortal component.
 */
export type ConfirmDialogPortalPassThroughType<E> = PassThroughType<ConfirmDialogPortalInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogPortal component.
 */
export interface ConfirmDialogPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogPortalPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmDialogPortal component.
 */
export interface ConfirmDialogPortalProps extends BaseComponentProps<ConfirmDialogPortalInstance, unknown, ConfirmDialogPortalPassThrough> {}

/**
 * Defines valid state in ConfirmDialogPortal component.
 */
export interface ConfirmDialogPortalState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogPortal component.
 */
export interface ConfirmDialogPortalExposes {
    /**
     * Instance of the ConfirmDialog component.
     */
    confirmdialog: ConfirmDialogInstance | undefined | null;
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogPortal component.
 */
export type ConfirmDialogPortalInstance = ComponentInstance<ConfirmDialogPortalProps, ConfirmDialogPortalState, ConfirmDialogPortalExposes>;
