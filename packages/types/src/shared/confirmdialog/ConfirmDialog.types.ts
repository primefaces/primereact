/**
 *
 * ConfirmDialog uses a Dialog UI with <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialog
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useConfirmDialogChangeEvent, useConfirmDialogExposes, useConfirmDialogProps, useConfirmDialogState } from './useConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialog component.
 */
export type ConfirmDialogPassThroughType<E> = PassThroughType<ConfirmDialogInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialog component.
 */
export interface ConfirmDialogPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the trigger icon's DOM element.
     */
    triggerIcon?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the headerActions's DOM element.
     */
    headerActions?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the close's DOM element.
     */
    close?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the close icon's DOM element.
     */
    closeIcon?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the cancel's DOM element.
     */
    cancel?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ConfirmDialogPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the confirmdialog's open state changes.
 * @extends useConfirmDialogChangeEvent
 */
export interface ConfirmDialogChangeEvent extends useConfirmDialogChangeEvent {}

/**
 * Defines valid properties in ConfirmDialog component.
 */
export interface ConfirmDialogProps extends BaseComponentProps<ConfirmDialogInstance, Omit<useConfirmDialogProps, 'onOpenChange' | 'modal'>, ConfirmDialogPassThrough> {
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @default true
     */
    modal?: boolean | undefined;
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
    onOpenChange?: (event: ConfirmDialogChangeEvent) => void;
}

/**
 * Defines valid state in ConfirmDialog component.
 * @extends useConfirmDialogState
 */
export interface ConfirmDialogState extends useConfirmDialogState {}

/**
 * Defines the methods and properties exposed by ConfirmDialog component.
 * @extends useConfirmDialogExposes
 */
export interface ConfirmDialogExposes extends useConfirmDialogExposes {}

/**
 * Defines the CSS class names used in the ConfirmDialog component.
 */
export const ConfirmDialogClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-confirmdialog',
    /**
     * Class name of the trigger button element
     */
    trigger: 'p-confirmdialog-trigger-button',
    /**
     * Class name of the icon element
     */
    icon: 'p-confirmdialog-icon',
    /**
     * Class name of the message element
     */
    message: 'p-confirmdialog-message',
    /**
     * Class name of the close button element
     */
    close: 'p-confirmdialog-close-button',
    /**
     * Class name of the action button element
     */
    action: 'p-confirmdialog-action-button'
} as const;

/**
 * Type representing the CSS class names used in the ConfirmDialog component.
 */
export type ConfirmDialogClassNamesType = (typeof ConfirmDialogClassNames)[keyof typeof ConfirmDialogClassNames];

/**
 * Instance of ConfirmDialog component.
 */
export type ConfirmDialogInstance = ComponentInstance<ConfirmDialogProps, ConfirmDialogState, ConfirmDialogExposes>;
