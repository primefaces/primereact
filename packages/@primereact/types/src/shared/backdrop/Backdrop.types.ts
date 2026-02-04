/**
 *
 * Backdrop is a component that displays an animated overlay behind modal content.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module backdrop
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MotionProps, useMotionInstance } from '@primereact/types/shared/motion';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in Backdrop component.
 */
export type BackdropPassThroughType<E> = PassThroughType<BackdropInstance, E>;

/**
 * Defines passthrough(pt) options of Backdrop component.
 */
export interface BackdropPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BackdropPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Backdrop component.
 */
export interface BackdropProps extends BaseComponentProps<BackdropInstance, unknown, BackdropPassThrough> {
    /**
     * Whether the backdrop is visible.
     */
    visible?: boolean | undefined;
    /**
     * Motion properties to customize the animation.
     */
    motionProps?: MotionProps | undefined;
}

/**
 * Defines valid state in Backdrop component.
 */
export interface BackdropState {}

/**
 * Defines the methods and properties exposed by Backdrop component.
 */
export interface BackdropExposes {
    /**
     * The motion instance.
     */
    motion: useMotionInstance;
}

/**
 * Instance of Backdrop component.
 */
export type BackdropInstance = ComponentInstance<BackdropProps, BackdropState, BackdropExposes>;
