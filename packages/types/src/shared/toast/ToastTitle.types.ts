/**
 *
 * ToastTitle is a component that displays a toast title.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toasttitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastItemInstance } from './ToastItem.types';

/**
 * Defines passthrough(pt) options type in ToastTitle component.
 */
export type ToastTitlePassThroughType<E> = PassThroughType<ToastTitleInstance, E>;

/**
 * Defines passthrough(pt) options of ToastTitle component.
 */
export interface ToastTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToastTitle component.
 */
export interface ToastTitleProps extends BaseComponentProps<ToastTitleInstance, unknown, ToastTitlePassThrough> {}

/**
 * Defines valid state in ToastTitle component.
 */
export interface ToastTitleState {}

/**
 * Defines the methods and properties exposed by ToastTitle component.
 */
export interface ToastTitleExposes {
    /**
     * The ToastItem component instance.
     */
    toastItem: ToastItemInstance | undefined | null;
}

/**
 * Instance of ToastTitle component.
 */
export type ToastTitleInstance = ComponentInstance<ToastTitleProps, ToastTitleState, ToastTitleExposes>;
