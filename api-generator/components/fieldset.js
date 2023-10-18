const FieldsetProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'legend',
        type: 'string',
        default: 'null',
        description: 'Header text of the fieldset.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'toggleable',
        type: 'boolean',
        default: 'false',
        description: 'When specified, content can toggled by clicking the legend.'
    },
    {
        name: 'collapsed',
        type: 'boolean',
        default: 'false',
        description: 'Defines the default visibility state of the content.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const FieldsetEvents = [
    {
        name: 'onCollapse',
        description: 'Callback to invoke when an active tab is collapsed by clicking on the header.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onExpand',
        description: 'Callback to invoke when a tab gets expanded.',
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
        description: 'Callback to invoke when a tab gets toggled.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'boolean',
                description: ' Collapsed state as a boolean'
            }
        ]
    },
    {
        name: 'onClick',
        description: 'Callback to invoke when fieldset is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const FieldsetStyles = [
    { name: 'p-fieldset', description: 'Fieldset element.' },
    {
        name: 'p-fieldset-toggleable',
        description: 'Toggleable fieldset element.'
    },
    { name: 'p-fieldset-legend', description: 'Legend element.' },
    { name: 'p-fieldset-content', description: 'Content element.' }
];

module.exports = {
    fieldset: {
        name: 'Fieldset',
        description: 'Fieldset is a grouping component with a content toggle feature.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/fieldset',
        props: FieldsetProps,
        events: FieldsetEvents,
        styles: FieldsetStyles
    }
};
