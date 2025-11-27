/**
 *
 * ToastItem component is used to display a toast item.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toastitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastInstance } from './Toast.types';

/**
 * Defines passthrough(pt) options type in ToastItem component.
 */
export type ToastItemPassThroughType<E> = PassThroughType<ToastItemInstance, E>;

/**
 * Defines passthrough(pt) options of ToastItem component.
 */
export interface ToastItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToastItem component.
 */
export interface ToastItemProps extends BaseComponentProps<ToastItemInstance, unknown, ToastItemPassThrough> {}

/**
 * Defines valid state in ToastItem component.
 */
export interface ToastItemState {}

/**
 * Defines the methods and properties exposed by ToastItem component.
 */
export interface ToastItemExposes {
    /**
     * Reference to the parent Toast instance.
     */
    toast: ToastInstance | undefined | null;
}

/**
 * Instance of ToastItem component.
 */
export type ToastItemInstance = ComponentInstance<ToastItemProps, ToastItemState, ToastItemExposes>;
