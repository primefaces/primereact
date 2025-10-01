/**
 *
 * ToastClose component is used to display a toast close.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toastclose
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastPassThroughType } from './Toast.types';

/**
 * Defines passthrough(pt) options type in ToastClose component.
 */
export type ToastClosePassThroughType<E> = PassThroughType<ToastCloseInstance, E>;

/**
 * Defines passthrough(pt) options of ToastClose component.
 */
export interface ToastClosePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastPassThroughType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ToastClose component.
 */
export interface ToastCloseProps extends BaseComponentProps<ToastCloseInstance, unknown, ToastClosePassThrough> {}

/**
 * Defines valid state in ToastClose component.
 */
export interface ToastCloseState {}

/**
 * Defines the methods and properties exposed by ToastClose component.
 */
export interface ToastCloseExposes {}

/**
 * Instance of ToastClose component.
 */
export type ToastCloseInstance = ComponentInstance<ToastCloseProps, ToastCloseState, ToastCloseExposes>;
