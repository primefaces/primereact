/**
 *
 * Toast component is used to display messages.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toast
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useToastExposes, useToastProps, useToastState } from './useToast.types';

/**
 * Defines passthrough(pt) options type in Toast component.
 */
export type ToastPassThroughType<E> = PassThroughType<ToastInstance, E>;

/**
 * Defines passthrough(pt) options of Toast component.
 */
export interface ToastPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Toast component.
 */
export interface ToastProps extends BaseComponentProps<ToastInstance, useToastProps, ToastPassThrough> {
    richColors?: boolean;
}

/**
 * Defines valid state in Toast component.
 * @extends useToastState
 */
export interface ToastState extends useToastState {}

/**
 * Defines the methods and properties exposed by Toast component.
 * @extends useToastExposes
 */
export interface ToastExposes extends useToastExposes {}

/**
 * Defines the CSS class names used in the Toast component.
 */
export const ToastClassNames = {} as const;

/**
 * Type representing the CSS class names used in the Toast component.
 */
export type ToastClassNamesType = (typeof ToastClassNames)[keyof typeof ToastClassNames];

/**
 * Instance of Toast component.
 */
export type ToastInstance = ComponentInstance<ToastProps, ToastState, ToastExposes>;
