/**
 *
 * ConfirmPopupTrigger is a component that displays a trigger button.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopuptrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupTrigger component.
 */
export type ConfirmPopupTriggerPassThroughType<E> = PassThroughType<ConfirmPopupTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupTrigger component.
 */
export interface ConfirmPopupTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupTriggerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupTrigger component.
 */
export interface ConfirmPopupTriggerProps extends BaseComponentProps<ConfirmPopupTriggerInstance, unknown, ConfirmPopupTriggerPassThrough> {}

/**
 * Defines valid state in ConfirmPopupTrigger component.
 */
export interface ConfirmPopupTriggerState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupTrigger component.
 */
export interface ConfirmPopupTriggerExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupTrigger component.
 */
export type ConfirmPopupTriggerInstance = ComponentInstance<ConfirmPopupTriggerProps, ConfirmPopupTriggerState, ConfirmPopupTriggerExposes>;
