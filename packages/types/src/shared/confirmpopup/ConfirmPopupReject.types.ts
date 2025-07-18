/**
 *
 * ConfirmPopupReject is a component that displays a reject button.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopupreject
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupReject component.
 */
export type ConfirmPopupRejectPassThroughType<E> = PassThroughType<ConfirmPopupRejectInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupReject component.
 */
export interface ConfirmPopupRejectPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupRejectPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupReject component.
 */
export interface ConfirmPopupRejectProps extends BaseComponentProps<ConfirmPopupRejectInstance, unknown, ConfirmPopupRejectPassThrough> {
    /**
     * The size of the reject button
     * @default small
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * the variant of the reject button
     * @default text
     */
    variant?: 'link' | 'text' | 'outlined' | undefined;
}

/**
 * Defines valid state in ConfirmPopupReject component.
 */
export interface ConfirmPopupRejectState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupReject component.
 */
export interface ConfirmPopupRejectExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupReject component.
 */
export type ConfirmPopupRejectInstance = ComponentInstance<ConfirmPopupRejectProps, ConfirmPopupRejectState, ConfirmPopupRejectExposes>;
