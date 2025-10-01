/**
 *
 * ToastDescription component is used to display a toast description.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toastdescription
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastPassThroughType } from './Toast.types';

/**
 * Defines passthrough(pt) options type in ToastDescription component.
 */
export type ToastDescriptionPassThroughType<E> = PassThroughType<ToastDescriptionInstance, E>;

/**
 * Defines passthrough(pt) options of ToastDescription component.
 */
export interface ToastDescriptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToastDescription component.
 */
export interface ToastDescriptionProps extends BaseComponentProps<ToastDescriptionInstance, unknown, ToastDescriptionPassThrough> {}

/**
 * Defines valid state in ToastDescription component.
 */
export interface ToastDescriptionState {}

/**
 * Defines the methods and properties exposed by ToastItem component.
 */
export interface ToastDescriptionExposes {}

/**
 * Instance of ToastItem component.
 */
export type ToastDescriptionInstance = ComponentInstance<ToastDescriptionProps, ToastDescriptionState, ToastDescriptionExposes>;
