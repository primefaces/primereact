/**
 *
 * ProgressBarTrack component is used to display the track of ProgressBar.
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 *
 * @module progressbartrack
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ProgressBarInstance } from './ProgressBar.types';

/**
 * Defines passthrough(pt) options type in ProgressBarTrack component.
 */
export type ProgressBarTrackPassThroughType<E> = PassThroughType<ProgressBarTrackInstance, E>;

/**
 * Defines passthrough(pt) options of ProgressBarTrack component.
 */
export interface ProgressBarTrackPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressBarTrackPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ProgressBarTrack component.
 */
export interface ProgressBarTrackProps extends BaseComponentProps<ProgressBarTrackInstance> {}

/**
 * Defines valid state in ProgressBarTrack component.
 */
export interface ProgressBarTrackState {}

/**
 * Defines the methods and properties exposed by ProgressBarTrack component.
 */
export interface ProgressBarTrackExposes {
    /**
     * The ProgressBar component instance.
     */
    progressbar: ProgressBarInstance | undefined | null;
}

/**
 * Instance of ProgressBarTrack component.
 */
export type ProgressBarTrackInstance = ComponentInstance<ProgressBarTrackProps, ProgressBarTrackState, ProgressBarTrackExposes, ProgressBarTrackPassThrough>;
