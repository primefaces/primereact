/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDialogChangeEvent, useDialogExposes, useDialogProps, useDialogState } from './useDialog.types';

/**
 * Defines passthrough(pt) options type in Dialog component.
 */
export type DialogRootPassThroughType<E> = PassThroughType<DialogRootInstance, E>;

/**
 * Defines passthrough(pt) options of Dialog component.
 */
export interface DialogRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the backdrop's DOM element.
     */
    backdrop?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: DialogRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the headerActions's DOM element.
     */
    headerActions?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the maximizable's DOM element.
     */
    maximizable?: DialogRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the close's DOM element.
     */
    close?: DialogRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: DialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the dialog's open state changes.
 * @extends useDialogChangeEvent
 */
export interface DialogRootChangeEvent extends useDialogChangeEvent {}

/**
 * Defines valid properties in Dialog component.
 */
export interface DialogRootProps extends BaseComponentProps<DialogRootInstance, Omit<useDialogProps, 'onOpenChange'>, DialogRootPassThrough> {
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
    onOpenChange?: (event: DialogRootChangeEvent) => void;
}

/**
 * Defines valid state in Dialog component.
 * @extends useDialogState
 */
export interface DialogRootState extends useDialogState {}

/**
 * Defines the methods and properties exposed by Dialog component.
 * @extends useDialogExposes
 */
export interface DialogRootExposes extends useDialogExposes {}

/**
 * Instance of Dialog component.
 */
export type DialogRootInstance = ComponentInstance<DialogRootProps, DialogRootState, DialogRootExposes>;
