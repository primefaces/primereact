/**
 *
 * ConfirmPopupAccept is a component that displays an accept button.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopupaccept
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupAccept component.
 */
export type ConfirmPopupAcceptPassThroughType<E> = PassThroughType<ConfirmPopupAcceptInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupAccept component.
 */
export interface ConfirmPopupAcceptPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupAcceptPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupAccept component.
 */
export interface ConfirmPopupAcceptProps extends BaseComponentProps<ConfirmPopupAcceptInstance, unknown, ConfirmPopupAcceptPassThrough> {
    /**
     * The size of the accept button
     * @default small
     */
    size?: 'small' | 'normal' | 'large' | undefined;
}

/**
 * Defines valid state in ConfirmPopupAccept component.
 */
export interface ConfirmPopupAcceptState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupAccept component.
 */
export interface ConfirmPopupAcceptExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupAccept component.
 */
export type ConfirmPopupAcceptInstance = ComponentInstance<ConfirmPopupAcceptProps, ConfirmPopupAcceptState, ConfirmPopupAcceptExposes>;
