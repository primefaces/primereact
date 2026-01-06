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
export type ConfirmDialogRootPassThroughType<E> = PassThroughType<ConfirmDialogRootInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialog component.
 */
export interface ConfirmDialogRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the trigger icon's DOM element.
     */
    triggerIcon?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the headerActions's DOM element.
     */
    headerActions?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the close's DOM element.
     */
    close?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the close icon's DOM element.
     */
    closeIcon?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the cancel's DOM element.
     */
    cancel?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ConfirmDialogRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the confirmdialog's open state changes.
 * @extends useConfirmDialogChangeEvent
 */
export interface ConfirmDialogRootChangeEvent extends useConfirmDialogChangeEvent {}

/**
 * Defines valid properties in ConfirmDialog component.
 */
export interface ConfirmDialogRootProps extends BaseComponentProps<ConfirmDialogRootInstance, Omit<useConfirmDialogProps, 'onOpenChange' | 'modal'>, ConfirmDialogRootPassThrough> {
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
    onOpenChange?: (event: ConfirmDialogRootChangeEvent) => void;
}

/**
 * Defines valid state in ConfirmDialog component.
 * @extends useConfirmDialogState
 */
export interface ConfirmDialogRootState extends useConfirmDialogState {}

/**
 * Defines the methods and properties exposed by ConfirmDialog component.
 * @extends useConfirmDialogExposes
 */
export interface ConfirmDialogRootExposes extends useConfirmDialogExposes {}

/**
 * Instance of ConfirmDialog component.
 */
export type ConfirmDialogRootInstance = ComponentInstance<ConfirmDialogRootProps, ConfirmDialogRootState, ConfirmDialogRootExposes>;
