/**
 *
 * ConfirmDialogHeader is a component that displays header.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { DialogRootInstance } from '@primereact/types/shared/dialog';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmDialogRootInstance } from './ConfirmDialogRoot.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogHeader component.
 */
export type ConfirmDialogHeaderPassThroughType<E> = PassThroughType<ConfirmDialogHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogHeader component.
 */
export interface ConfirmDialogHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ConfirmDialogHeader component.
 */
export interface ConfirmDialogHeaderProps extends BaseComponentProps<ConfirmDialogHeaderInstance, unknown, ConfirmDialogHeaderPassThrough> {}

/**
 * Defines valid state in ConfirmDialogHeader component.
 */
export interface ConfirmDialogHeaderState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogHeader component.
 */
export interface ConfirmDialogHeaderExposes {
    /**
     * The ConfirmDialog component instance.
     */
    confirmdialog: ConfirmDialogRootInstance | undefined | null;
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogRootInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogHeader component.
 */
export type ConfirmDialogHeaderInstance = ComponentInstance<ConfirmDialogHeaderProps, ConfirmDialogHeaderState, ConfirmDialogHeaderExposes>;
