const TimelineProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of events to display.'
    },
    {
        name: 'align',
        type: 'string',
        default: 'left',
        description: 'Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'vertical',
        description: 'Orientation of the timeline, valid values are "vertical" and "horizontal".'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'Name of the field that uniquely identifies the a record in the data.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the component.'
    }
];

const TimelineEvents = [];

const TimelineStyles = [
    { name: 'p-timeline', description: 'Container element.' },
    {
        name: 'p-timeline-left',
        description: 'Container element when alignment is left.'
    },
    {
        name: 'p-timeline-right',
        description: 'Container element when alignment is right.'
    },
    {
        name: 'p-timeline-top',
        description: 'Container element when alignment is top.'
    },
    {
        name: 'p-timeline-bottom',
        description: 'Container element when alignment is bottom.'
    },
    {
        name: 'p-timeline-alternate',
        description: 'Container element when alignment is alternating.'
    },
    {
        name: 'p-timeline-vertical',
        description: 'Container element of a vertical timeline.'
    },
    {
        name: 'p-timeline-horizontal',
        description: 'Container element of a horizontal timeline.'
    },
    { name: 'p-timeline-event', description: 'Event element.' },
    {
        name: 'p-timeline-event-opposite',
        description: 'Opposite of an event content.'
    },
    { name: 'p-timeline-event-content', description: 'Event content.' },
    {
        name: 'p-timeline-event-separator',
        description: 'Separator element of an event.'
    },
    {
        name: 'p-timeline-event-marker',
        description: 'Marker element of an event.'
    },
    {
        name: 'p-timeline-event-connector',
        description: 'Connector element of an event.'
    }
];

module.exports = {
    timeline: {
        name: 'Timeline',
        description: 'Timeline visualizes a series of chained events.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/timeline',
        props: TimelineProps,
        events: TimelineEvents,
        styles: TimelineStyles
    }
};
