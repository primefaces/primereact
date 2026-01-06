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
