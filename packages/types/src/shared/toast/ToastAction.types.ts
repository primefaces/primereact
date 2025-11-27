/**
 *
 * ToastAction component is used to display a toast action.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toastaction
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastInstance } from './Toast.types';
import { ToastItemInstance } from './ToastItem.types';

/**
 * Defines passthrough(pt) options type in ToastAction component.
 */
export type ToastActionPassThroughType<E> = PassThroughType<ToastActionInstance, E>;

/**
 * Defines passthrough(pt) options of ToastAction component.
 */
export interface ToastActionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastActionPassThroughType<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ToastAction component.
 */
export interface ToastActionProps extends BaseComponentProps<ToastActionInstance, unknown, ToastActionPassThrough> {}

/**
 * Defines valid state in ToastAction component.
 */
export interface ToastActionState {}

/**
 * Defines the methods and properties exposed by ToastAction component.
 */
export interface ToastActionExposes {
    /**
     * The Toast component instance.
     */
    toast: ToastInstance | undefined | null;
    /**
     * The ToastItem component instance.
     */
    toastItem: ToastItemInstance | undefined | null;
}

/**
 * Instance of ToastAction component.
 */
export type ToastActionInstance = ComponentInstance<ToastActionProps, ToastActionState, ToastActionExposes>;
