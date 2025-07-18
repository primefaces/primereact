/**
 *
 * ConfirmDialogCancel is a component that displays a cancel button.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogcollapse
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { DialogInstance } from '../dialog';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogCancel component.
 */
export type ConfirmDialogCancelPassThroughType<E> = PassThroughType<ConfirmDialogCancelInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogCancel component.
 */
export interface ConfirmDialogCancelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogCancelPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmDialogCancel component.
 */
export interface ConfirmDialogCancelProps extends BaseComponentProps<ConfirmDialogCancelInstance, unknown, ConfirmDialogCancelPassThrough> {}

/**
 * Defines valid state in ConfirmDialogCancel component.
 */
export interface ConfirmDialogCancelState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogCancel component.
 */
export interface ConfirmDialogCancelExposes {
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
 * Instance of ConfirmDialogCancel component.
 */
export type ConfirmDialogCancelInstance = ComponentInstance<ConfirmDialogCancelProps, ConfirmDialogCancelState, ConfirmDialogCancelExposes>;
