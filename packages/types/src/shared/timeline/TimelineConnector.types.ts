/**
 *
 * TimelineConnector is a container component that displays content at the connector of a Timeline.
 *
 * [Live Demo](https://www.primereact.org/timeline/)
 *
 * @module timelineconnector
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TimelineInstance } from './Timeline.types';

/**
 * Defines passthrough(pt) options type in TimelineConnector component.
 */
export type TimelineConnectorPassThroughType<E> = PassThroughType<TimelineConnectorInstance, E>;

/**
 * Defines passthrough(pt) options of TimelineConnector component.
 */
export interface TimelineConnectorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TimelineConnectorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TimelineConnector component.
 */
export interface TimelineConnectorProps extends BaseComponentProps<TimelineConnectorInstance, unknown, TimelineConnectorPassThrough> {}

/**
 * Defines valid state in TimelineConnector component.
 */
export interface TimelineConnectorState {}

/**
 * Defines the methods and properties exposed by TimelineConnector component.
 */
export interface TimelineConnectorExposes {
    /**
     * The Timeline component instance.
     */
    timeline: TimelineInstance | undefined | null;
}

/**
 * Instance of TimelineConnector component.
 */
export type TimelineConnectorInstance = ComponentInstance<TimelineConnectorProps, TimelineConnectorState, TimelineConnectorExposes>;
