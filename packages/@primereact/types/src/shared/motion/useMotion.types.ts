/**
 *
 * The useMotion manages the state and functionality of a motion component.
 *
 * [Live Demo](https://www.primereact.org/motion/)
 *
 * @module useMotion
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type { ClassNameOptions, MotionEvent, MotionOptions } from '@primeuix/motion';

/**
 * Defines valid properties in useMotion.
 */
export interface useMotionProps {
    /**
     * The ref of the element to apply the motion to.
     */
    elementRef?: React.Ref<unknown> | undefined;
    /**
     * Whether the element is visible or not.
     * @default false
     */
    visible?: boolean | undefined;
    /**
     * Whether the motion should be applied when the element is mounted.
     * @default true
     */
    mountOnEnter?: boolean | undefined;
    /**
     * Whether the element should be unmounted when the motion is not applied.
     * @default true
     */
    unmountOnLeave?: boolean | undefined;
    /**
     * The name of the motion. It can be a predefined motion name or a custom one.
     * phases:
     *     [name]-enter
     *     [name]-enter-active
     *     [name]-enter-to
     *     [name]-leave
     *     [name]-leave-active
     *     [name]-leave-to
     */
    name?: MotionOptions['name'] | undefined;
    /**
     * The type of the motion, valid values 'transition' and 'animation'.
     */
    type?: MotionOptions['type'] | undefined;
    /**
     * Whether the motion is safe.
     * @group Props
     */
    safe?: MotionOptions['safe'] | undefined;
    /**
     * Whether the motion is disabled.
     * @default false
     */
    disabled?: MotionOptions['disabled'] | undefined;
    /**
     * Whether the motion should appear.
     * @default false
     */
    appear?: MotionOptions['appear'] | undefined;
    /**
     * Whether the motion should enter.
     * @default true
     */
    enter?: MotionOptions['enter'] | undefined;
    /**
     * Whether the motion should leave.
     * @default true
     */
    leave?: MotionOptions['leave'] | undefined;
    /**
     * The duration of the motion.
     */
    duration?: MotionOptions['duration'] | undefined;
    /**
     * The hide strategy of the motion, valid values 'display' and 'visibility'.
     * @default 'display'
     */
    hideStrategy?: 'display' | 'visibility' | undefined;
    /**
     * The enter from class of the motion.
     */
    enterFromClassName?: ClassNameOptions['from'] | undefined;
    /**
     * The enter to class of the motion.
     */
    enterToClassName?: ClassNameOptions['to'] | undefined;
    /**
     * The enter active class of the motion.
     */
    enterActiveClassName?: ClassNameOptions['active'] | undefined;
    /**
     * The leave from class of the motion.
     */
    leaveFromClassName?: ClassNameOptions['from'] | undefined;
    /**
     * The leave to class of the motion.
     */
    leaveToClassName?: ClassNameOptions['to'] | undefined;
    /**
     * The leave active class of the motion.
     */
    leaveActiveClassName?: ClassNameOptions['active'] | undefined;
    /**
     * Callback fired before the enter transition/animation starts.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onBeforeEnter?: (event?: MotionEvent) => void;
    /**
     * Callback fired when the enter transition/animation starts.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onEnter?: (event?: MotionEvent) => void;
    /**
     * Callback fired after the enter transition/animation ends.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onAfterEnter?: (event?: MotionEvent) => void;
    /**
     * Callback fired when the enter transition/animation is cancelled.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onEnterCancelled?: (event?: MotionEvent) => void;
    /**
     * Callback fired before the leave transition/animation starts.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onBeforeLeave?: (event?: MotionEvent) => void;
    /**
     * Callback fired when the leave transition/animation starts.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onLeave?: (event?: MotionEvent) => void;
    /**
     * Callback fired after the leave transition/animation ends.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onAfterLeave?: (event?: MotionEvent) => void;
    /**
     * Callback fired when the leave transition/animation is cancelled.
     * @param {MotionEvent} [event] - The event object containing details about the motion.
     * @param {Element} event.element - The element being transitioned/animated.
     */
    onLeaveCancelled?: (event?: MotionEvent) => void;
}

/**
 * Defines valid state in useMotion.
 */
export interface useMotionState {
    /**
     * Indicates whether the element is rendered.
     */
    rendered: boolean;
}

/**
 * Defines the methods and properties exposed by useMotion.
 */
export interface useMotionExposes {
    /**
     * Triggers the enter motion.
     * @returns void
     */
    enter?: () => void;
    /**
     * Triggers the leave motion.
     * @returns void
     */
    leave?: () => void;
    /**
     * Cancels the ongoing motion.
     * @returns void
     */
    cancel?: () => void;
    /**
     * Updates the motion with new properties.
     * @param {Element} element - The element to apply the motion to.
     * @param {useMotionProps} [motionProps] - The motion properties to update.
     * @returns void
     */
    update?: (element: Element, motionProps?: useMotionProps) => void;
}

/**
 * Instance of useMotion headless.
 */
export type useMotionInstance = HeadlessInstance<useMotionProps, useMotionState, useMotionExposes>;
