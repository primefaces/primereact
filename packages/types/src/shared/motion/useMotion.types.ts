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

/**
 * Defines valid properties in useMotion.
 */
export interface useMotionProps {
    name?: string;
    type?: 'transition' | 'animation' | undefined;
    safe?: boolean | undefined;
    appear?: boolean | undefined;
    enter?: boolean | undefined;
    leave?: boolean | undefined;
    duration?: number | undefined;
    enterFromClassName?: string | undefined;
    enterToClassName?: string | undefined;
    enterActiveClassName?: string | undefined;
    leaveFromClassName?: string | undefined;
    leaveToClassName?: string | undefined;
    leaveActiveClassName?: string | undefined;
    onBeforeEnter?: (el?: Element) => void;
    onEnter?: (el?: Element) => void;
    onAfterEnter?: (el?: Element) => void;
    onEnterCancelled?: (el?: Element) => void;
    onBeforeLeave?: (el?: Element) => void;
    onLeave?: (el?: Element) => void;
    onAfterLeave?: (el?: Element) => void;
    onLeaveCancelled?: (el?: Element) => void;
}

/**
 * Defines valid state in useMotion.
 */
export interface useMotionState {}

/**
 * Defines the methods and properties exposed by useMotion.
 */
export interface useMotionExposes {
    motionRef?: React.Ref<unknown> | null;
    enter?: () => void;
    leave?: () => void;
    cancel?: () => void;
    update?: (element: Element, motionProps?: useMotionProps) => void;
}

/**
 * Instance of useMotion headless.
 */
export type useMotionInstance = HeadlessInstance<useMotionProps, useMotionState, useMotionExposes>;
