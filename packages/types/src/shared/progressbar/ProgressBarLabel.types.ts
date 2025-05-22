/**
 *
 * ProgressBarLabel component is used to display the label of ProgressBar.
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 *
 * @module progressbarlabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ProgressBarInstance } from './ProgressBar.types';

/**
 * Defines passthrough(pt) options type in ProgressBarLabel component.
 */
export type ProgressBarLabelPassThroughType<E> = PassThroughType<ProgressBarLabelInstance, E>;

/**
 * Defines passthrough(pt) options of ProgressBarLabel component.
 */
export interface ProgressBarLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressBarLabelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ProgressBarLabel component.
 */
export interface ProgressBarLabelProps extends BaseComponentProps<ProgressBarLabelInstance> {}

/**
 * Defines valid state in ProgressBarLabel component.
 */
export interface ProgressBarLabelState {}

/**
 * Defines the methods and properties exposed by ProgressBarLabel component.
 */
export interface ProgressBarLabelExposes {
    /**
     * The ProgressBar component instance.
     */
    progressbar: ProgressBarInstance | undefined | null;
}

/**
 * Instance of ProgressBarLabel component.
 */
export type ProgressBarLabelInstance = ComponentInstance<ProgressBarLabelProps, ProgressBarLabelState, ProgressBarLabelExposes, ProgressBarLabelPassThrough>;
