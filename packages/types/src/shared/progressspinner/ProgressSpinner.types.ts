/**
 *
 * ProgressSpinner is a process status indicator.
 *
 * [Live Demo](https://www.primereact.org/progressspinner/)
 *
 * @module progressspinner
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useProgressSpinnerExposes, useProgressSpinnerProps, useProgressSpinnerState } from './useProgressSpinner.types';

/**
 * Defines passthrough(pt) options type in ProgressSpinner component.
 */
export type ProgressSpinnerPassThroughOptionType<E> = PassThroughOptionType<ProgressSpinnerInstance, E>;

/**
 * Defines passthrough(pt) options of ProgressSpinner component.
 */
export interface ProgressSpinnerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressSpinnerPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the spin's DOM element.
     */
    spin?: ProgressSpinnerPassThroughOptionType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the circle's DOM element.
     */
    circle?: ProgressSpinnerPassThroughOptionType<React.HTMLAttributes<SVGCircleElement>>;
}

/**
 * Defines valid properties in ProgressSpinner component.
 */
export interface ProgressSpinnerProps extends BaseComponentProps<useProgressSpinnerProps> {
    /**
     * Width of the circle stroke.
     * @default 2
     */
    strokeWidth?: number | string | undefined;
    /**
     * Color for the background of the circle.
     */
    fill?: string | undefined;
    /**
     * Duration of the rotate animation.
     * @default 2s
     */
    animationDuration?: string | undefined;
}

/**
 * Defines valid state in ProgressSpinner component.
 * @extends useProgressSpinnerState
 */
export interface ProgressSpinnerState extends useProgressSpinnerState {}

/**
 * Defines the methods and properties exposed by ProgressSpinner component.
 * @extends useProgressSpinnerExposes
 */
export interface ProgressSpinnerExposes extends useProgressSpinnerExposes {}

/**
 * Instance of ProgressSpinner component.
 */
export type ProgressSpinnerInstance = ComponentInstance<ProgressSpinnerProps, ProgressSpinnerState, ProgressSpinnerExposes>;
