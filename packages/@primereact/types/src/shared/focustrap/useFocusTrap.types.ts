/**
 *
 * The useFocusTrap manages the state and functionality of a focus trap component.
 *
 * [Live Demo](https://www.primereact.org/focus-trap/)
 *
 * @module usefocustrap
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Defines valid properties in useFocusTrap.
 */
export interface useFocusTrapProps {
    /**
     * When present, it specifies that the directive should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When disabled, focustrap will not focus by default.
     * @default true
     */
    autoFocus?: boolean | undefined;
}

/**
 * Defines valid state in useFocusTrap.
 */
export interface useFocusTrapState {}

/**
 * Defines the methods and properties exposed by useFocusTrap.
 */
export interface useFocusTrapExposes {
    /**
     * The state of the useFocusTrap.
     */
    state: useFocusTrapState;
    /**
     * Reference to the container element of the focus trap.
     */
    containerRef: React.RefObject<HTMLElement | null>;
    /**
     * Reference to the first hidden focusable element for accessibility.
     */
    firstHiddenElementRef: React.RefObject<HTMLElement | null>;
    /**
     * Reference to the last hidden focusable element for accessibility.
     */
    lastHiddenElementRef: React.RefObject<HTMLElement | null>;
    /**
     * Function to handle the focus of the first hidden element.
     */
    onFirstHiddenFocus: (event: React.FocusEvent<HTMLElement>) => void;
    /**
     * Function to handle the focus of the last hidden element.
     */
    onLastHiddenFocus: (event: React.FocusEvent<HTMLElement>) => void;
}

/**
 * Instance of useFocusTrap headless.
 */
export type useFocusTrapInstance = HeadlessInstance<useFocusTrapProps, useFocusTrapState, useFocusTrapExposes>;
