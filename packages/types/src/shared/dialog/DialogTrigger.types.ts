/**
 *
 * DialogTrigger is a component that displays a trigger button.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogtrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogTrigger component.
 */
export type DialogTriggerPassThroughType<E> = PassThroughType<DialogTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of DialogTrigger component.
 */
export interface DialogTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DialogTrigger component.
 */
export interface DialogTriggerProps extends BaseComponentProps<DialogTriggerInstance, unknown, DialogTriggerPassThrough> {}

/**
 * Defines valid state in DialogTrigger component.
 */
export interface DialogTriggerState {}

/**
 * Defines the methods and properties exposed by DialogTrigger component.
 */
export interface DialogTriggerExposes {
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogTrigger component.
 */
export type DialogTriggerInstance = ComponentInstance<DialogTriggerProps, DialogTriggerState, DialogTriggerExposes>;
