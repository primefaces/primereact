/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialog
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDialogChangeEvent, useDialogExposes, useDialogProps, useDialogState } from './useDialog.types';

/**
 * Defines passthrough(pt) options type in Dialog component.
 */
export type DialogPassThroughType<E> = PassThroughType<DialogInstance, E>;

/**
 * Defines passthrough(pt) options of Dialog component.
 */
export interface DialogPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: DialogPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the trigger icon's DOM element.
     */
    triggerIcon?: DialogPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the headerActions's DOM element.
     */
    headerActions?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the maximizable's DOM element.
     */
    maximizable?: DialogPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the maximizable icon's DOM element.
     */
    maximizableIcon?: DialogPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the close's DOM element.
     */
    close?: DialogPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the close icon's DOM element.
     */
    closeIcon?: DialogPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: DialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the dialog's open state changes.
 * @extends useDialogChangeEvent
 */
export interface DialogChangeEvent extends useDialogChangeEvent {}

/**
 * Defines valid properties in Dialog component.
 */
export interface DialogProps extends BaseComponentProps<DialogInstance, Omit<useDialogProps, 'onOpenChange'>, DialogPassThrough> {
    /**
     * Position of the dialog.
     * @default center
     */
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' | undefined;
    /**
     * Callback function that is called when the trigger is clicked.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The open value of the dialog.
     * @returns void
     */
    onOpenChange?: (event: DialogChangeEvent) => void;
}

/**
 * Defines valid state in Dialog component.
 * @extends useDialogState
 */
export interface DialogState extends useDialogState {}

/**
 * Defines the methods and properties exposed by Dialog component.
 * @extends useDialogExposes
 */
export interface DialogExposes extends useDialogExposes {}

/**
 * Defines the CSS class names used in the Dialog component.
 */
export const DialogClassNames = {
    /**
     * Class name of the mask element
     */
    mask: 'p-dialog-mask',
    /**
     * Class name of the root element
     */
    root: 'p-dialog',
    /**
     * Class name of the trigger button element
     */
    trigger: 'p-dialog-trigger-button',
    /**
     * Class name of the header element
     */
    header: 'p-dialog-header',
    /**
     * Class name of the title element
     */
    title: 'p-dialog-title',
    /**
     * Class name of the header actions element
     */
    headerActions: 'p-dialog-header-actions',
    /**
     * Class name of the maximize button element
     */
    maximize: 'p-dialog-maximize-button',
    /**
     * Class name of the close button element
     */
    close: 'p-dialog-close-button',
    /**
     * Class name of the content element
     */
    content: 'p-dialog-content',
    /**
     * Class name of the footer element
     */
    footer: 'p-dialog-footer'
} as const;

/**
 * Type representing the CSS class names used in the Dialog component.
 */
export type DialogClassNamesType = (typeof DialogClassNames)[keyof typeof DialogClassNames];

/**
 * Instance of Dialog component.
 */
export type DialogInstance = ComponentInstance<DialogProps, DialogState, DialogExposes>;
