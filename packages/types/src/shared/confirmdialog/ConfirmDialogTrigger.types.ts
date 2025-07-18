/**
 *
 * ConfirmDialogTrigger is a component that displays a trigger button.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogtrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { DialogInstance } from '../dialog';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogTrigger component.
 */
export type ConfirmDialogTriggerPassThroughType<E> = PassThroughType<ConfirmDialogTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogTrigger component.
 */
export interface ConfirmDialogTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmDialogTrigger component.
 */
export interface ConfirmDialogTriggerProps extends BaseComponentProps<ConfirmDialogTriggerInstance, unknown, ConfirmDialogTriggerPassThrough> {}

/**
 * Defines valid state in ConfirmDialogTrigger component.
 */
export interface ConfirmDialogTriggerState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogTrigger component.
 */
export interface ConfirmDialogTriggerExposes {
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
 * Instance of ConfirmDialogTrigger component.
 */
export type ConfirmDialogTriggerInstance = ComponentInstance<ConfirmDialogTriggerProps, ConfirmDialogTriggerState, ConfirmDialogTriggerExposes>;
