const InplaceProps = [
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'active',
        type: 'boolean',
        default: 'false',
        description: 'Whether the content is displayed or not.'
    },
    {
        name: 'closable',
        type: 'boolean',
        default: 'false',
        description: 'Displays a button to switch back to display mode.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    }
];

const InplaceEvents = [
    {
        name: 'onOpen',
        description: 'Callback to invoke when inplace is opened.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onClose',
        description: 'Callback to invoke when inplace is closed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onToggle',
        description: 'Callback to invoke when inplace is opened or closed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'boolean',
                description: 'active state as a boolean'
            }
        ]
    }
];

const InplaceStyles = [
    { name: 'p-inplace', description: 'Container element' },
    { name: 'p-inplace-display', description: 'Display container' },
    { name: 'p-inplace-content', description: 'Content container' }
];

module.exports = {
    inplace: {
        name: 'Inplace',
        description: 'Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inplace',
        props: InplaceProps,
        events: InplaceEvents,
        styles: InplaceStyles
    }
};
