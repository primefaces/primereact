/**
 *
 * ToastRegion is a component that displays a toast region.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toastregion
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { ToastInstance } from './Toast.types';

/**
 * Defines passthrough(pt) options type in ToastRegion component.
 */
export type ToastRegionPassThroughType<E> = PassThroughType<ToastRegionInstance, E>;

/**
 * Defines passthrough(pt) options of ToastRegion component.
 */
export interface ToastRegionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastRegionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ToastRegion component.
 */
export interface ToastRegionProps extends BaseComponentProps<ToastRegionInstance, unknown, ToastRegionPassThrough> {}

/**
 * Defines valid state in ToastRegion component.
 */
export interface ToastRegionState {}

/**
 * Defines the methods and properties exposed by ToastRegion component.
 */
export interface ToastRegionExposes {
    /**
     * The Toast component instance.
     */
    toast: ToastInstance | undefined | null;
}

/**
 * Instance of ToastRegion component.
 */
export type ToastRegionInstance = ComponentInstance<ToastRegionProps, ToastRegionState, ToastRegionExposes>;
