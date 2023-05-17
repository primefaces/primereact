const SplitterProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'ClassName of the component.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'horizontal',
        description: 'Orientation of the panels, valid values are "horizontal" and "vertical".'
    },
    {
        name: 'gutterSize',
        type: 'number',
        default: '4',
        description: 'Size of the divider in pixels.'
    },
    {
        name: 'stateKey',
        type: 'string',
        default: 'null',
        description: 'Storage identifier of a stateful Splitter.'
    },
    {
        name: 'stateStorage',
        type: 'string',
        default: 'session',
        description: 'Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.'
    }
];

const SplitterEvents = [
    {
        name: 'onResizeEnd',
        description: 'Callback to invoke when resize ends.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.sizes',
                type: 'number[]',
                description: 'Sizes of the panels as an array'
            }
        ]
    }
];

const SplitterStyles = [
    { name: 'p-splitter', description: 'Container element.' },
    {
        name: 'p-splitter',
        description: 'Container element during resize.'
    },
    {
        name: 'p-splitter-horizontal',
        description: 'Container element with horizontal layout.'
    },
    {
        name: 'p-splitter-vertical',
        description: 'Container element with vertical layout.'
    },
    { name: 'p-splitter-panel', description: 'Splitter panel element.' },
    {
        name: 'p-splitter-gutter',
        description: 'Gutter element to use when resizing the panels.'
    },
    {
        name: 'p-splitter-gutter-handle',
        description: 'Handl element of the gutter.'
    }
];

module.exports = {
    splitter: {
        name: 'Splitter',
        description: 'Splitter is utilized to separate and resize panels.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/splitter',
        props: SplitterProps,
        events: SplitterEvents,
        styles: SplitterStyles
    }
};
