/**
 *
 * The useConfirmDialog manages the state and functionality of a confirmdialog component.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module useconfirmdialog
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { useDialogChangeEvent, useDialogExposes, useDialogProps, useDialogState } from '@primereact/types/shared/dialog';

/**
 * Event fired when the confirmdialog's open state changes.
 */
export interface useConfirmDialogChangeEvent extends useDialogChangeEvent {}

/**
 * Defines valid properties in useConfirmDialog.
 */
export interface useConfirmDialogProps extends Omit<useDialogProps, 'minX' | 'minY' | 'modal'> {
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @default true
     */
    modal?: boolean | undefined;
}

/**
 * Defines valid state in useConfirmDialog.
 */
export interface useConfirmDialogState extends Omit<useDialogState, 'maximized'> {}

/**
 * Defines the methods and properties exposed by useConfirmDialog.
 */
export interface useConfirmDialogExposes extends Omit<useDialogExposes, 'maximizableButtonRef' | 'toggleMaximized'> {}

/**
 * Instance of useConfirmDialog headless.
 */
export type useConfirmDialogInstance = HeadlessInstance<useConfirmDialogProps, useConfirmDialogState, useConfirmDialogExposes>;
