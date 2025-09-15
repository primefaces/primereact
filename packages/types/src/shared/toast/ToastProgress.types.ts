/**
 *
 * ToastProgress component is used to display a toast progress.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toastprogress
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastPassThroughType } from './Toast.types';

/**
 * Defines passthrough(pt) options type in ToastProgress component.
 */
export type ToastProgressPassThroughType<E> = PassThroughType<ToastProgressInstance, E>;

/**
 * Defines passthrough(pt) options of ToastProgress component.
 */
export interface ToastProgressPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToastProgress component.
 */
export interface ToastProgressProps extends BaseComponentProps<ToastProgressInstance, unknown, ToastProgressPassThrough> {}

/**
 * Defines valid state in ToastProgress component.
 */
export interface ToastProgressState {}

/**
 * Defines the methods and properties exposed by ToastProgress component.
 */
export interface ToastProgressExposes {}

/**
 * Instance of ToastProgress component.
 */
export type ToastProgressInstance = ComponentInstance<ToastProgressProps, ToastProgressState, ToastProgressExposes>;
