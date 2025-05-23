/**
 *
 * ProgressBarValue component is used to display the value of ProgressBar.
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 *
 * @module progressbarvalue
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ProgressBarInstance } from './ProgressBar.types';

/**
 * Defines passthrough(pt) options type in ProgressBarValue component.
 */
export type ProgressBarValuePassThroughType<E> = PassThroughType<ProgressBarValueInstance, E>;

/**
 * Defines passthrough(pt) options of ProgressBarValue component.
 */
export interface ProgressBarValuePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressBarValuePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ProgressBarValue component.
 */
export interface ProgressBarValueProps extends BaseComponentProps<ProgressBarValueInstance> {}

/**
 * Defines valid state in ProgressBarValue component.
 */
export interface ProgressBarValueState {}

/**
 * Defines the methods and properties exposed by ProgressBarValue component.
 */
export interface ProgressBarValueExposes {
    /**
     * The ProgressBar component instance.
     */
    progressbar: ProgressBarInstance | undefined | null;
}

/**
 * Instance of ProgressBarValue component.
 */
export type ProgressBarValueInstance = ComponentInstance<ProgressBarValueProps, ProgressBarValueState, ProgressBarValueExposes, ProgressBarValuePassThrough>;
