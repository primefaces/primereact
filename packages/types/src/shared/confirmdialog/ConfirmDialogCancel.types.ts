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
import type { DialogRootInstance } from '@primereact/types/shared/dialog';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmDialogRootInstance } from './ConfirmDialogRoot.types';

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
    confirmdialog: ConfirmDialogRootInstance | undefined | null;
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogRootInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogCancel component.
 */
export type ConfirmDialogCancelInstance = ComponentInstance<ConfirmDialogCancelProps, ConfirmDialogCancelState, ConfirmDialogCancelExposes>;
