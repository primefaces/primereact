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
    /**
     * The container element to focus trap.
     * @default null
     */
    container?: HTMLElement | null | undefined;
}

/**
 * Defines valid state in useFocusTrap.
 */
export interface useFocusTrapState {}

/**
 * Defines the methods and properties exposed by useFocusTrap.
 */
export interface useFocusTrapExposes {
    hiddenElements: [React.ReactElement | null, React.ReactElement | null];
}

/**
 * Instance of useFocusTrap headless.
 */
export type useFocusTrapInstance = HeadlessInstance<useFocusTrapProps, useFocusTrapState, useFocusTrapExposes>;
