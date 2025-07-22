/**
 *
 * ConfirmPopupMessage is a component that displays a message.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopupmessage
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupMessage component.
 */
export type ConfirmPopupMessagePassThroughType<E> = PassThroughType<ConfirmPopupMessageInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupMessage component.
 */
export interface ConfirmPopupMessagePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupMessagePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupMessage component.
 */
export interface ConfirmPopupMessageProps extends BaseComponentProps<ConfirmPopupMessageInstance, unknown, ConfirmPopupMessagePassThrough> {}

/**
 * Defines valid state in ConfirmPopupMessage component.
 */
export interface ConfirmPopupMessageState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupMessage component.
 */
export interface ConfirmPopupMessageExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupMessage component.
 */
export type ConfirmPopupMessageInstance = ComponentInstance<ConfirmPopupMessageProps, ConfirmPopupMessageState, ConfirmPopupMessageExposes>;
