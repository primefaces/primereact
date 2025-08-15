/**
 *
 * TimelineOpposite is a container component that displays content at the opposite of a Timeline.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timelineopposite
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TimelineInstance } from './Timeline.types';

/**
 * Defines passthrough(pt) options type in TimelineOpposite component.
 */
export type TimelineOppositePassThroughType<E> = PassThroughType<TimelineOppositeInstance, E>;

/**
 * Defines passthrough(pt) options of TimelineOpposite component.
 */
export interface TimelineOppositePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelineOppositePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TimelineOpposite component.
 */
export interface TimelineOppositeProps extends BaseComponentProps<TimelineOppositeInstance, unknown, TimelineOppositePassThrough> {}

/**
 * Defines valid state in TimelineOpposite component.
 */
export interface TimelineOppositeState {}

/**
 * Defines the methods and properties exposed by TimelineOpposite component.
 */
export interface TimelineOppositeExposes {
    /**
     * The Timeline component instance.
     */
    timeline: TimelineInstance | undefined | null;
}

/**
 * Instance of TimelineOpposite component.
 */
export type TimelineOppositeInstance = ComponentInstance<TimelineOppositeProps, TimelineOppositeState, TimelineOppositeExposes>;
