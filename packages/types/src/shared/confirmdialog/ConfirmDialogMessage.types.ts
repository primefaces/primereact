/**
 *
 * ConfirmDialogMessage is a component that displays an message.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogmessage
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogMessage component.
 */
export type ConfirmDialogMessagePassThroughType<E> = PassThroughType<ConfirmDialogMessageInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogMessage component.
 */
export interface ConfirmDialogMessagePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogMessagePassThroughType<React.HTMLAttributes<HTMLLegendElement>>;
}

/**
 * Defines valid properties in ConfirmDialogMessage component.
 */
export interface ConfirmDialogMessageProps extends BaseComponentProps<ConfirmDialogMessageInstance, unknown, ConfirmDialogMessagePassThrough> {}

/**
 * Defines valid state in ConfirmDialogMessage component.
 */
export interface ConfirmDialogMessageState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogMessage component.
 */
export interface ConfirmDialogMessageExposes {
    /**
     * The ConfirmDialog component instance.
     */
    confirmdialog: ConfirmDialogInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogMessage component.
 */
export type ConfirmDialogMessageInstance = ComponentInstance<ConfirmDialogMessageProps, ConfirmDialogMessageState, ConfirmDialogMessageExposes>;
