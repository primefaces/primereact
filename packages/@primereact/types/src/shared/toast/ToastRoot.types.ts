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
export type ToastRootPassThroughType<E> = PassThroughType<ToastRootInstance, E>;

/**
 * Defines passthrough(pt) options of Toast component.
 */
export interface ToastRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Toast component.
 */
export interface ToastRootProps extends BaseComponentProps<ToastRootInstance, useToastProps, ToastRootPassThrough> {
    /**
     * Whether to show rich colors
     * @default false
     */
    richColors?: boolean;
}

/**
 * Defines valid state in Toast component.
 * @extends useToastState
 */
export interface ToastRootState extends useToastState {}

/**
 * Defines the methods and properties exposed by Toast component.
 * @extends useToastExposes
 */
export interface ToastRootExposes extends useToastExposes {}

/**
 * Instance of Toast component.
 */
export type ToastRootInstance = ComponentInstance<ToastRootProps, ToastRootState, ToastRootExposes>;
