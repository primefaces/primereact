/**
 *
 * TimelineMarker is a container component that displays content at the marker of a Timeline.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timelinemarker
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TimelineInstance } from './Timeline.types';

/**
 * Defines passthrough(pt) options type in TimelineMarker component.
 */
export type TimelineMarkerPassThroughType<E> = PassThroughType<TimelineMarkerInstance, E>;

/**
 * Defines passthrough(pt) options of TimelineMarker component.
 */
export interface TimelineMarkerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelineMarkerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TimelineMarker component.
 */
export interface TimelineMarkerProps extends BaseComponentProps<TimelineMarkerInstance, unknown, TimelineMarkerPassThrough> {}

/**
 * Defines valid state in TimelineMarker component.
 */
export interface TimelineMarkerState {}

/**
 * Defines the methods and properties exposed by TimelineMarker component.
 */
export interface TimelineMarkerExposes {
    /**
     * The Timeline component instance.
     */
    timeline: TimelineInstance | undefined | null;
}

/**
 * Instance of TimelineMarker component.
 */
export type TimelineMarkerInstance = ComponentInstance<TimelineMarkerProps, TimelineMarkerState, TimelineMarkerExposes>;
