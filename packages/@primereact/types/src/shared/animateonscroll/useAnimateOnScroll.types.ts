/**
 *
 * The useAnimateOnScroll manages the state and functionality of a AnimateOnScroll component.
 *
 * [Live Demo](https://www.primereact.org/animateonscroll/)
 *
 * @module useanimateonscroll
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useAnimateOnScroll.
 */
export interface useAnimateOnScrollProps extends Pick<IntersectionObserverInit, 'root' | 'rootMargin' | 'threshold'> {
    enterClassName?: string;
    leaveClassName?: string;
    once?: boolean;
}

/**
 * Defines valid state in useAnimateOnScroll.
 */
export interface useAnimateOnScrollState {}

/**
 * Defines the methods and properties exposed by useAnimateOnScroll.
 */
export interface useAnimateOnScrollExposes {}

/**
 * Instance of useAnimateOnScroll headless.
 */
export type useAnimateOnScrollInstance = HeadlessInstance<useAnimateOnScrollProps, useAnimateOnScrollState, useAnimateOnScrollExposes>;
