/**
 *
 * DialogTitle is a component that displays title.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogtitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogTitle component.
 */
export type DialogTitlePassThroughType<E> = PassThroughType<DialogTitleInstance, E>;

/**
 * Defines passthrough(pt) options of DialogTitle component.
 */
export interface DialogTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DialogTitle component.
 */
export interface DialogTitleProps extends BaseComponentProps<DialogTitleInstance, unknown, DialogTitlePassThrough> {}

/**
 * Defines valid state in DialogTitle component.
 */
export interface DialogTitleState {}

/**
 * Defines the methods and properties exposed by DialogTitle component.
 */
export interface DialogTitleExposes {
    /**
     * The Dialog component instance.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogTitle component.
 */
export type DialogTitleInstance = ComponentInstance<DialogTitleProps, DialogTitleState, DialogTitleExposes>;
