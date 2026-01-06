/**
 *
 * ProgressBar is a process status indicator.
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 *
 * @module progressbar
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useProgressBarExposes, useProgressBarProps, useProgressBarState } from './useProgressBar.types';

/**
 * Defines passthrough(pt) options type in ProgressBar component.
 */
export type ProgressBarRootPassThroughType<E> = PassThroughType<ProgressBarRootInstance, E>;

/**
 * Defines passthrough(pt) options of ProgressBar component.
 */
export interface ProgressBarRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressBarRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the value's DOM element.
     */
    value?: ProgressBarRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ProgressBar component.
 */
export interface ProgressBarRootProps extends BaseComponentProps<ProgressBarRootInstance, useProgressBarProps, ProgressBarRootPassThrough> {
    /**
     * Defines the mode of the progress
     * @default determinate
     */
    mode?: 'determinate' | 'indeterminate' | undefined;
}

/**
 * Defines valid state in ProgressBar component.
 * @extends useProgressBarState
 */
export interface ProgressBarRootState extends useProgressBarState {}

/**
 * Defines the methods and properties exposed by ProgressBar component.
 * @extends useProgressBarExposes
 */
export interface ProgressBarRootExposes extends useProgressBarExposes {}

/**
 * Instance of ProgressBar component.
 */
export type ProgressBarRootInstance = ComponentInstance<ProgressBarRootProps, ProgressBarRootState, ProgressBarRootExposes>;
