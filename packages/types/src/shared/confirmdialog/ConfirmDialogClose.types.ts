/**
 *
 * ConfirmDialogClose is a component that displays a close button.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogclose
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { DialogInstance } from '../dialog';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogClose component.
 */
export type ConfirmDialogClosePassThroughType<E> = PassThroughType<ConfirmDialogCloseInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogClose component.
 */
export interface ConfirmDialogClosePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogClosePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmDialogClose component.
 */
export interface ConfirmDialogCloseProps extends BaseComponentProps<ConfirmDialogCloseInstance, unknown, ConfirmDialogClosePassThrough> {
    /**
     * Whether to show the ConfirmDialogClose with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Severity type of the ConfirmDialogClose.
     * @default 'secondary'
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'help' | 'danger' | 'contrast' | (string & {}) | undefined;
    /**
     * Variant of the ConfirmDialogClose.
     * @default 'text'
     */
    variant?: 'text' | 'outlined' | 'link' | undefined;
    /**
     * Whether to show the ConfirmDialogClose with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in ConfirmDialogClose component.
 */
export interface ConfirmDialogCloseState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogClose component.
 */
export interface ConfirmDialogCloseExposes {
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
 * Instance of ConfirmDialogClose component.
 */
export type ConfirmDialogCloseInstance = ComponentInstance<ConfirmDialogCloseProps, ConfirmDialogCloseState, ConfirmDialogCloseExposes>;
