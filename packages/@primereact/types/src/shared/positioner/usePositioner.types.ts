/**
 * The usePositioner manages the state and functionality of a positioner component.
 *
 * [Live Demo](https://www.primereact.org/positioner/)
 *
 * @module usePositioner
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import type * as React from 'react';

export type SideType = 'top' | 'right' | 'bottom' | 'left';
export type AlignType = 'start' | 'center' | 'end';

/**
 * Defines valid properties in usePositioner.
 */
export interface usePositionerProps {
    /**
     * The side of the positioner.
     */
    side?: SideType;
    /**
     * The align of the positioner.
     */
    align?: AlignType;
    /**
     * The side offset of the positioner.
     */
    sideOffset?: number;
    /**
     * The align offset of the positioner.
     */
    alignOffset?: number;
    /**
     * Whether to flip the positioner.
     */
    flip?: boolean;
    /**
     * Whether to shift the positioner.
     */
    shift?: boolean;
    /**
     * Whether to hide the positioner when detached.
     */
    hideWhenDetached?: boolean;
    /**
     * The anchor element.
     */
    anchor?: HTMLElement;
    /**
     * The content element.
     */
    content?: HTMLDivElement;
    /**
     * The arrow element.
     */
    arrow?: HTMLDivElement;
}

/**
 * Defines valid state in usePositioner.
 */
export interface usePositionerState {
    /**
     * Actual side after placement.
     */
    actualSide?: SideType;
    /**
     * Actual align after placement.
     */
    actualAlign?: AlignType;
}

/**
 * Defines the methods and properties exposed by usePositioner.
 */
export interface usePositionerExposes {
    /**
     * The state of the usePositioner.
     */
    state: usePositionerState;
    /**
     * Computes the transform origin.
     */
    getTransformOrigin: () => string;
    /**
     * Computes the position.
     */
    computePosition: () => React.CSSProperties;
    /**
     * Updates the placement.
     */
    updatePlacement: () => void;
}

/**
 * Instance of usePositioner headless.
 */
export type usePositionerInstance = HeadlessInstance<usePositionerProps, usePositionerState, usePositionerExposes>;
