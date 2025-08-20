/**
 *
 * Timeline visualizes a series of chained events.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timeline
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useTimelineExposes, useTimelineProps, useTimelineState } from './useTimeline.types';

/**
 * Defines passthrough(pt) options type in Timeline component.
 */
export type TimelinePassThroughType<E> = PassThroughType<TimelineInstance, E>;

/**
 * Defines passthrough(pt) options of Timeline component.
 */
export interface TimelinePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelinePassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the event's DOM element.
     */
    event?: TimelinePassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TimelinePassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the opposite's DOM element.
     */
    opposite?: TimelinePassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: TimelinePassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the marker's DOM element.
     */
    marker?: TimelinePassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the connector's DOM element.
     */
    connector?: TimelinePassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Timeline component.
 */
export interface TimelineProps extends BaseComponentProps<TimelineInstance, useTimelineProps, TimelinePassThrough> {}

/**
 * Defines valid state in Timeline component.
 * @extends useTimelineState
 */
export interface TimelineState extends useTimelineState {}

/**
 * Defines the methods and properties exposed by Timeline component.
 * @extends useTimelineExposes
 */
export interface TimelineExposes extends useTimelineExposes {}

/**
 * Defines the CSS class names used in the Timeline component.
 */
export const TimelineClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-timeline',
    /**
     * Class name of the event element
     */
    event: 'p-timeline-event',
    /**
     * Class name of the content element
     */
    content: 'p-timeline-event-content',
    /**
     * Class name of the opposite element
     */
    opposite: 'p-timeline-event-opposite',
    /**
     * Class name of the separator element
     */
    separator: 'p-timeline-event-separator',
    /**
     * Class name of the marker element
     */
    marker: 'p-timeline-event-marker',
    /**
     * Class name of the connector element
     */
    connector: 'p-timeline-event-connector'
} as const;

/**
 * Type representing the CSS class names used in the Timeline component.
 */
export type TimelineClassNamesType = (typeof TimelineClassNames)[keyof typeof TimelineClassNames];

/**
 * Instance of Timeline component.
 */
export type TimelineInstance = ComponentInstance<TimelineProps, TimelineState, TimelineExposes>;
