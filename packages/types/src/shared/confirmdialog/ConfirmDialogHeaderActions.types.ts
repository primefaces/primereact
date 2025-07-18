/**
 *
 * ConfirmDialogHeaderActions is a component that displays a header actions.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogheaderactions
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { DialogInstance } from '../dialog';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogHeaderActions component.
 */
export type ConfirmDialogHeaderActionsPassThroughType<E> = PassThroughType<ConfirmDialogHeaderActionsInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogHeaderActions component.
 */
export interface ConfirmDialogHeaderActionsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogHeaderActionsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ConfirmDialogHeaderActions component.
 */
export interface ConfirmDialogHeaderActionsProps extends BaseComponentProps<ConfirmDialogHeaderActionsInstance, unknown, ConfirmDialogHeaderActionsPassThrough> {}

/**
 * Defines valid state in ConfirmDialogHeaderActions component.
 */
export interface ConfirmDialogHeaderActionsState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogHeaderActions component.
 */
export interface ConfirmDialogHeaderActionsExposes {
    /**
     * The confirmdialog instance that the header actions belong to.
     */
    confirmdialog?: ConfirmDialogInstance | undefined;
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogHeaderActions component.
 */
export type ConfirmDialogHeaderActionsInstance = ComponentInstance<ConfirmDialogHeaderActionsProps, ConfirmDialogHeaderActionsState, ConfirmDialogHeaderActionsExposes>;
