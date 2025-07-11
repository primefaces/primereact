/**
 *
 * AnimateOnScroll is used to apply animations to elements when entering or leaving the viewport during scrolling.
 *
 * [Live Demo](https://www.primereact.org/animateonscroll/)
 *
 * @module animateonscroll
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useAnimateOnScrollExposes, useAnimateOnScrollProps, useAnimateOnScrollState } from './useAnimateOnScroll.types';

/**
 * Defines passthrough(pt) options type in AnimateOnScroll component.
 */
export type AnimateOnScrollPassThroughType<E> = PassThroughType<AnimateOnScrollInstance, E>;

/**
 * Defines passthrough(pt) options of Accordion component.
 */
export interface AnimateOnScrollPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AnimateOnScrollPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Accordion component.
 */
export interface AnimateOnScrollProps extends BaseComponentProps<AnimateOnScrollInstance, useAnimateOnScrollProps> {}

/**
 * Defines valid state in Avatar component.
 * @extends useAvatarState
 */
export interface AnimateOnScrollState extends useAnimateOnScrollState {}

/**
 * Defines the methods and properties exposed by Avatar component.
 * @extends useAnimateOnScrollExposes
 */
export interface AnimateOnScrollExposes extends useAnimateOnScrollExposes {}

/**
 * Defines the CSS class names used in the AnimateOnScroll component.
 */
export const AnimateOnScrollClassNames = {} as const;

/**
 * Instance of AnimateOnScroll component.
 */
export type AnimateOnScrollInstance = ComponentInstance<AnimateOnScrollProps, AnimateOnScrollState, AnimateOnScrollExposes>;
