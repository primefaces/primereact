/**
 *
 * TimelineContent is a container component that displays content at the content of a Timeline.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timelinecontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TimelineInstance } from './Timeline.types';

/**
 * Defines passthrough(pt) options type in TimelineContent component.
 */
export type TimelineContentPassThroughType<E> = PassThroughType<TimelineContentInstance, E>;

/**
 * Defines passthrough(pt) options of TimelineContent component.
 */
export interface TimelineContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelineContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TimelineContent component.
 */
export interface TimelineContentProps extends BaseComponentProps<TimelineContentInstance, unknown, TimelineContentPassThrough> {}

/**
 * Defines valid state in TimelineContent component.
 */
export interface TimelineContentState {}

/**
 * Defines the methods and properties exposed by TimelineContent component.
 */
export interface TimelineContentExposes {
    /**
     * The Timeline component instance.
     */
    timeline: TimelineInstance | undefined | null;
}

/**
 * Instance of TimelineContent component.
 */
export type TimelineContentInstance = ComponentInstance<TimelineContentProps, TimelineContentState, TimelineContentExposes>;
