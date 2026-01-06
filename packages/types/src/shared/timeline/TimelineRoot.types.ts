/**
 *
 * Timeline visualizes a series of chained events.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timelineroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useTimelineExposes, useTimelineProps, useTimelineState } from './useTimeline.types';

/**
 * Defines passthrough(pt) options type in Timeline component.
 */
export type TimelineRootPassThroughType<E> = PassThroughType<TimelineRootInstance, E>;

/**
 * Defines passthrough(pt) options of Timeline component.
 */
export interface TimelineRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelineRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the event's DOM element.
     */
    event?: TimelineRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TimelineRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the opposite's DOM element.
     */
    opposite?: TimelineRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: TimelineRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the marker's DOM element.
     */
    marker?: TimelineRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the connector's DOM element.
     */
    connector?: TimelineRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Timeline component.
 */
export interface TimelineRootProps extends BaseComponentProps<TimelineRootInstance, useTimelineProps, TimelineRootPassThrough> {}

/**
 * Defines valid state in Timeline component.
 * @extends useTimelineState
 */
export interface TimelineRootState extends useTimelineState {}

/**
 * Defines the methods and properties exposed by Timeline component.
 * @extends useTimelineExposes
 */
export interface TimelineRootExposes extends useTimelineExposes {}

/**
 * Instance of Timeline component.
 */
export type TimelineRootInstance = ComponentInstance<TimelineRootProps, TimelineRootState, TimelineRootExposes>;
