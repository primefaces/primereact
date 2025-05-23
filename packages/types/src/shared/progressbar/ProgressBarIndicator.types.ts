/**
 *
 * ProgressBarIndicator component is used to display the indicator of ProgressBar.
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 *
 * @module progressbarindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ProgressBarInstance } from './ProgressBar.types';

/**
 * Defines passthrough(pt) options type in ProgressBarIndicator component.
 */
export type ProgressBarIndicatorPassThroughType<E> = PassThroughType<ProgressBarIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of ProgressBarIndicator component.
 */
export interface ProgressBarIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressBarIndicatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ProgressBarIndicator component.
 */
export interface ProgressBarIndicatorProps extends BaseComponentProps<ProgressBarIndicatorInstance> {}

/**
 * Defines valid state in ProgressBarIndicator component.
 */
export interface ProgressBarIndicatorState {}

/**
 * Defines the methods and properties exposed by ProgressBarIndicator component.
 */
export interface ProgressBarIndicatorExposes {
    /**
     * The ProgressBar component instance.
     */
    progressbar: ProgressBarInstance | undefined | null;
}

/**
 * Instance of ProgressBarIndicator component.
 */
export type ProgressBarIndicatorInstance = ComponentInstance<ProgressBarIndicatorProps, ProgressBarIndicatorState, ProgressBarIndicatorExposes, ProgressBarIndicatorPassThrough>;
