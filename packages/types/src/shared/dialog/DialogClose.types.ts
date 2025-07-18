/**
 *
 * DialogClose is a component that displays a close button.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogclose
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogClose component.
 */
export type DialogClosePassThroughType<E> = PassThroughType<DialogCloseInstance, E>;

/**
 * Defines passthrough(pt) options of DialogClose component.
 */
export interface DialogClosePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogClosePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DialogClose component.
 */
export interface DialogCloseProps extends BaseComponentProps<DialogCloseInstance, unknown, DialogClosePassThrough> {
    /**
     * Whether to show the DialogClose with a borderless style.
     * @default true
     */
    iconOnly?: boolean | undefined;
    /**
     * Severity type of the DialogClose.
     * @default 'secondary'
     */
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'help' | 'danger' | 'contrast' | (string & {}) | undefined;
    /**
     * Variant of the DialogClose.
     * @default 'text'
     */
    variant?: 'text' | 'outlined' | 'link' | undefined;
    /**
     * Whether to show the DialogClose with a rounded style.
     * @default true
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in DialogClose component.
 */
export interface DialogCloseState {}

/**
 * Defines the methods and properties exposed by DialogClose component.
 */
export interface DialogCloseExposes {
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogClose component.
 */
export type DialogCloseInstance = ComponentInstance<DialogCloseProps, DialogCloseState, DialogCloseExposes>;
