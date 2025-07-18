/**
 *
 * DialogMaximizable is a component that displays a maximizable button.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogmaximizable
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogMaximizable component.
 */
export type DialogMaximizablePassThroughType<E> = PassThroughType<DialogMaximizableInstance, E>;

/**
 * Defines passthrough(pt) options of DialogMaximizable component.
 */
export interface DialogMaximizablePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogMaximizablePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DialogMaximizable component.
 */
export interface DialogMaximizableProps extends BaseComponentProps<DialogMaximizableInstance, unknown, DialogMaximizablePassThrough> {
    /**
     * Whether to show the DialogMaximizable with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Severity type of the DialogMaximizable.
     * @default 'secondary'
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'help' | 'danger' | 'contrast' | (string & {}) | undefined;
    /**
     * Variant of the DialogMaximizable.
     * @default 'text'
     */
    variant?: 'text' | 'outlined' | 'link' | undefined;
    /**
     * Whether to show the DialogMaximizable with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in DialogMaximizable component.
 */
export interface DialogMaximizableState {}

/**
 * Defines the methods and properties exposed by DialogMaximizable component.
 */
export interface DialogMaximizableExposes {
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogMaximizable component.
 */
export type DialogMaximizableInstance = ComponentInstance<DialogMaximizableProps, DialogMaximizableState, DialogMaximizableExposes>;
