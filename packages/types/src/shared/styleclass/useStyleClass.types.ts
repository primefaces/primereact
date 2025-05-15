/**
 *
 * The useStyleClass manages the state and functionality of a StyleClass component.
 *
 * [Live Demo](https://www.primereact.org/styleclass/)
 *
 * @module usestyleclass
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Defines valid properties in useStyleClass.
 */
export interface useStyleClassProps {
    /**
     * A React reference to DOM element that need to specify.
     */
    nodeRef?: React.RefObject<React.ReactNode>;
    /**
     * Selector to define the target element.
     */
    selector?: '@next' | '@prev' | '@parent' | '@grandparent' | string | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterFromClassName?: string | undefined;
    /**
     * Style class to add during enter animation.
     */
    enterActiveClassName?: string | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterToClassName?: string | undefined;
    /**
     * Style class to add when item begins to get hidden.
     */
    leaveFromClassName?: string | undefined;
    /**
     * Style class to add during leave animation.
     */
    leaveActiveClassName?: string | undefined;
    /**
     * Style class to add when leave animation is completed.
     */
    leaveToClassName?: string | undefined;
    /**
     * Style class to apply when the component is hidden.
     */
    hiddenClassName?: string | undefined;
    /**
     * Whether to trigger leave animation when outside of the element is clicked.
     * @default false
     */
    hideOnOutsideClick?: boolean | undefined;
    /**
     * Adds or removes a class when no enter-leave animation is required.
     */
    toggleClassName?: string | undefined;
}

/**
 * Defines valid state in useStyleClass.
 */
export interface useStyleClassState {}

/**
 * Defines the methods and properties exposed by useStyleClass.
 */
export interface useStyleClassExposes {
    /**
     * The state of the useStyleClass.
     */
    state: useStyleClassState;
    /**
     * The target element.
     */
    targetRef: React.RefObject<React.ReactNode>;
    /**
     * The method to trigger the enter animation.
     * @returns void
     */
    enter: () => void;
    /**
     * The method to trigger the leave animation.
     * @returns void
     */
    leave: () => void;
}

/**
 * Instance of useStyleClass headless.
 */
export type useStyleClassInstance = HeadlessInstance<useStyleClassProps, useStyleClassState, useStyleClassExposes>;
