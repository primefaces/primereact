/**
 *
 * ToastItem component is used to display a toast item.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toastroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useToastExposes, useToastInstance, useToastProps, useToastState } from './useToast.types';

/**
 * Defines passthrough(pt) options type in ToastRoot component.
 */
export type ToastRootPassThroughType<E> = PassThroughType<ToastRootInstance, E>;

/**
 * Defines passthrough(pt) options of ToastRoot component.
 */
export interface ToastRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToastRoot component.
 */
export interface ToastRootProps extends BaseComponentProps<ToastRootInstance, useToastProps, ToastRootPassThrough> {}

/**
 * Defines valid state in ToastRoot component.
 */
export interface ToastRootState extends useToastState {}

/**
 * Defines the methods and properties exposed by ToastRoot component.
 */
export interface ToastRootExposes extends useToastExposes {
    /**
     * Reference to the parent Toast instance.
     */
    toast?: useToastInstance | undefined | null;
}

/**
 * Instance of ToastRoot component.
 */
export type ToastRootInstance = ComponentInstance<ToastRootProps, ToastRootState, ToastRootExposes>;
