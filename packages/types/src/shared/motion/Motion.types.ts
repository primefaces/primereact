/**
 *
 * Motion is a component that provides a way to animate elements in React applications.
 *
 * [Live Demo](https://www.primereact.org/motion/)
 *
 * @module motion
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { useMotionExposes, useMotionProps, useMotionState } from './useMotion.types';

/**
 * Defines passthrough(pt) options type in Motion component.
 */
export type MotionPassThroughType<E> = PassThroughType<MotionInstance, E>;

/**
 * Defines passthrough(pt) options of Motion component.
 */
export interface MotionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MotionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Motion component.
 */
export interface MotionProps extends BaseComponentProps<MotionInstance, useMotionProps> {
    /**
     * Whether the motion should be applied to the component.
     * When set to true, the component will animate in.
     * @defaultValue false
     */
    in?: boolean | undefined;
    /**
     * Whether the motion should be applied when the component is mounted.
     * When set to true, the component will animate in on mount.
     * @defaultValue true
     */
    mountOnEnter?: boolean | undefined;
    /**
     * Whether the component should be unmounted when the motion is not applied.
     * When set to true, the component will be removed from the DOM when it is not visible.
     * @defaultValue true
     */
    unmountOnLeave?: boolean | undefined;
}

/**
 * Defines valid state in Motion component.
 * @extends useMotionState
 */
export interface MotionState extends useMotionState {}

/**
 * Defines the methods and properties exposed by Motion component.
 * @extends useMotionExposes
 */
export interface MotionExposes extends useMotionExposes {}

/**
 * Defines the CSS class names used in the Motion component.
 */
export const MotionClassNames = {} as const;

/**
 * Type representing the CSS class names used in the Motion component.
 */
export type MotionClassNamesType = (typeof MotionClassNames)[keyof typeof MotionClassNames];

/**
 * Instance of Motion component.
 */
export type MotionInstance = ComponentInstance<MotionProps, MotionState, MotionExposes, MotionPassThrough>;
