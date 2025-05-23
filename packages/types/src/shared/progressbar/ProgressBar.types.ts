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
export type ProgressBarPassThroughType<E> = PassThroughType<ProgressBarInstance, E>;

/**
 * Defines passthrough(pt) options of ProgressBar component.
 */
export interface ProgressBarPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressBarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the value's DOM element.
     */
    value?: ProgressBarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ProgressBar component.
 */
export interface ProgressBarProps extends BaseComponentProps<ProgressBarInstance, useProgressBarProps> {
    /**
     * Defines the mode of the progress
     * @default determinate
     */
    mode?: 'determinate' | 'indeterminate' | undefined;
    /**
     * Defines the children of the ProgressBar.
     */
    children?: React.ReactNode | undefined;
}

/**
 * Defines valid state in ProgressBar component.
 * @extends useProgressBarState
 */
export interface ProgressBarState extends useProgressBarState {}

/**
 * Defines the methods and properties exposed by ProgressBar component.
 * @extends useProgressBarExposes
 */
export interface ProgressBarExposes extends useProgressBarExposes {}

/**
 * Defines the CSS class names used in the ProgressBar component.
 */
export const ProgressBarClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-progressbar',
    /**
     * Class name of the value element
     */
    value: 'p-progressbar-value',
    /**
     * Class name of the label element
     */
    label: 'p-progressbar-label'
} as const;

/**
 * Type representing the CSS class names used in the ProgressBar component.
 */
export type ProgressBarClassNamesType = (typeof ProgressBarClassNames)[keyof typeof ProgressBarClassNames];

/**
 * Instance of ProgressBar component.
 */
export type ProgressBarInstance = ComponentInstance<ProgressBarProps, ProgressBarState, ProgressBarExposes, ProgressBarPassThrough>;
