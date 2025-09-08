/**
 *
 * ToastIcon component is used to display a toast icon.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toasticon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastPassThroughType } from './Toast.types';

/**
 * Defines passthrough(pt) options type in ToastIcon component.
 */
export type ToastIconPassThroughType<E> = PassThroughType<ToastIconInstance, E>;

/**
 * Defines passthrough(pt) options of ToastIcon component.
 */
export interface ToastIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToastIcon component.
 */
export interface ToastIconProps extends BaseComponentProps<ToastIconInstance, unknown, ToastIconPassThrough> {}

/**
 * Defines valid state in ToastDescription component.
 */
export interface ToastIconState {}

/**
 * Defines the methods and properties exposed by ToastIcon component.
 */
export interface ToastIconExposes {}

/**
 * Instance of ToastItem component.
 */
export type ToastIconInstance = ComponentInstance<ToastIconProps, ToastIconState, ToastIconExposes>;
