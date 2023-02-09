const TooltipProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'target',
        type: 'selector or DOM element',
        default: 'null',
        description: 'Target element on global tooltip option.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the tooltip should be hidden.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the tooltip.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Style of the tooltip.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'position',
        type: 'string',
        default: 'right',
        description: 'Position of the tooltip, valid values are mouse, right, left, top and bottom.'
    },
    {
        name: 'my',
        type: 'string',
        default: 'null',
        description: 'Defines which position on the tooltip being positioned to align with the target element.'
    },
    {
        name: 'at',
        type: 'string',
        default: 'null',
        description: 'Defines which position on the target element to align the positioned tooltip.'
    },
    {
        name: 'event',
        type: 'string',
        default: 'hover',
        description: 'Event to show the tooltip, valid values are hover, focus, and both.'
    },
    {
        name: 'showEvent',
        type: 'string',
        default: 'mouseenter',
        description: 'Event to show the tooltip if the <i>event</i> property is empty.'
    },
    {
        name: 'hideEvent',
        type: 'string',
        default: 'mouseleave',
        description: 'Event to hide the tooltip if the <i>event</i> property is empty.'
    },
    {
        name: 'autoZIndex',
        type: 'boolean',
        default: 'true',
        description: 'Whether to automatically manage layering.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'mouseTrack',
        type: 'boolean',
        default: 'false',
        description: 'Whether the tooltip will follow the mouse.'
    },
    {
        name: 'mouseTrackTop',
        type: 'number',
        default: '5',
        description: 'Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.'
    },
    {
        name: 'mouseTrackLeft',
        type: 'number',
        default: '5',
        description: 'Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.'
    },
    {
        name: 'showDelay',
        type: 'number',
        default: '0',
        description: 'Delay to show the tooltip in milliseconds.'
    },
    {
        name: 'updateDelay',
        type: 'number',
        default: '0',
        description: 'Delay to update the tooltip in milliseconds.'
    },
    {
        name: 'hideDelay',
        type: 'number',
        default: '0',
        description: 'Delay to hide the tooltip in milliseconds.'
    },
    {
        name: 'autoHide',
        type: 'boolean',
        default: 'true',
        description: 'Whether to hide tooltip when hovering over tooltip content.'
    },
    {
        name: 'onBeforeShow',
        type: 'function',
        default: 'null',
        description: 'Callback to invoke before the tooltip is shown.'
    },
    {
        name: 'onBeforeHide',
        type: 'function',
        default: 'null',
        description: 'Callback to invoke before the tooltip is hidden.'
    },
    {
        name: 'onShow',
        type: 'function',
        default: 'null',
        description: 'Callback to invoke when the tooltip is shown.'
    },
    {
        name: 'onHide',
        type: 'function',
        default: 'null',
        description: 'Callback to invoke when the tooltip is hidden.'
    }
];

const TooltipEvents = [
    {
        name: 'onBeforeShow',
        description: 'Callback to invoke before the tooltip is shown.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.target',
                type: 'any',
                description: 'Target Element.'
            }
        ]
    },
    {
        name: 'onBeforeHide',
        description: 'Callback to invoke before the tooltip is hidden.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.target',
                type: 'any',
                description: 'Target Element.'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when the tooltip is shown.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.target',
                type: 'any',
                description: 'Target Element.'
            }
        ]
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when the tooltip is hidden.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.target',
                type: 'any',
                description: 'Target Element.'
            }
        ]
    }
];

const TooltipStyles = [
    { name: 'p-tooltip', description: 'Container element' },
    { name: 'p-tooltip-arrow', description: 'Arrow of the tooltip' },
    { name: 'p-tooltip-text', description: 'Text of the tooltip' }
];

module.exports = {
    tooltip: {
        name: 'Tooltip',
        description: 'Tooltip functionality is integrated within various PrimeReact components.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/tooltip',
        props: TooltipProps,
        events: TooltipEvents,
        styles: TooltipStyles
    }
};
