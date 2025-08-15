/**
 *
 * TimelineEvent is a container component that displays content at the event of a Timeline.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timelineevent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TimelineInstance } from './Timeline.types';

/**
 * Defines passthrough(pt) options type in TimelineEvent component.
 */
export type TimelineEventPassThroughType<E> = PassThroughType<TimelineEventInstance, E>;

/**
 * Defines passthrough(pt) options of TimelineEvent component.
 */
export interface TimelineEventPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelineEventPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TimelineEvent component.
 */
export interface TimelineEventProps extends BaseComponentProps<TimelineEventInstance, unknown, TimelineEventPassThrough> {}

/**
 * Defines valid state in TimelineEvent component.
 */
export interface TimelineEventState {}

/**
 * Defines the methods and properties exposed by TimelineEvent component.
 */
export interface TimelineEventExposes {
    /**
     * The Timeline component instance.
     */
    timeline: TimelineInstance | undefined | null;
}

/**
 * Instance of TimelineEvent component.
 */
export type TimelineEventInstance = ComponentInstance<TimelineEventProps, TimelineEventState, TimelineEventExposes>;
