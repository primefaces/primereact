/**
 *
 * TimelineSeparator is a container component that displays content at the separator of a Timeline.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timelineseparator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TimelineInstance } from './Timeline.types';

/**
 * Defines passthrough(pt) options type in TimelineSeparator component.
 */
export type TimelineSeparatorPassThroughType<E> = PassThroughType<TimelineSeparatorInstance, E>;

/**
 * Defines passthrough(pt) options of TimelineSeparator component.
 */
export interface TimelineSeparatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelineSeparatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TimelineSeparator component.
 */
export interface TimelineSeparatorProps extends BaseComponentProps<TimelineSeparatorInstance, unknown, TimelineSeparatorPassThrough> {}

/**
 * Defines valid state in TimelineSeparator component.
 */
export interface TimelineSeparatorState {}

/**
 * Defines the methods and properties exposed by TimelineSeparator component.
 */
export interface TimelineSeparatorExposes {
    /**
     * The Timeline component instance.
     */
    timeline: TimelineInstance | undefined | null;
}

/**
 * Instance of TimelineSeparator component.
 */
export type TimelineSeparatorInstance = ComponentInstance<TimelineSeparatorProps, TimelineSeparatorState, TimelineSeparatorExposes>;
