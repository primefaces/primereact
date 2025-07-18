/**
 *
 * ConfirmDialogContent is a component that displays content.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { DialogInstance } from '../dialog';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogContent component.
 */
export type ConfirmDialogContentPassThroughType<E> = PassThroughType<ConfirmDialogContentInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogContent component.
 */
export interface ConfirmDialogContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ConfirmDialogContent component.
 */
export interface ConfirmDialogContentProps extends BaseComponentProps<ConfirmDialogContentInstance, unknown, ConfirmDialogContentPassThrough> {}

/**
 * Defines valid state in ConfirmDialogContent component.
 */
export interface ConfirmDialogContentState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogContent component.
 */
export interface ConfirmDialogContentExposes {
    /**
     * The ConfirmDialog component instance.
     */
    confirmdialog: ConfirmDialogInstance | undefined | null;
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogContent component.
 */
export type ConfirmDialogContentInstance = ComponentInstance<ConfirmDialogContentProps, ConfirmDialogContentState, ConfirmDialogContentExposes>;
