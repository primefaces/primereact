const MentionProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the input element.'
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
        description: 'Style class of the component.'
    },
    {
        name: 'trigger',
        type: 'string|array',
        default: '@',
        description: 'Set trigger keyword.'
    },
    {
        name: 'suggestions',
        type: 'array',
        default: 'null',
        description: 'Field of a suggested object to resolve and display.'
    },
    {
        name: 'inputStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'inputClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the input field.'
    },
    {
        name: 'panelClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the overlay panel element.'
    },
    {
        name: 'panelStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the overlay panel element.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: '200px',
        description: 'Maximum height of the suggestions panel.'
    },
    {
        name: 'autoHighlight',
        type: 'boolean',
        default: 'true',
        description: 'When enabled, highlights the first item in the list by default.'
    },
    {
        name: 'placeholder',
        type: 'boolean',
        default: 'true',
        description: 'Placeholder text for the input.'
    },
    {
        name: 'delay',
        type: 'number',
        default: '0',
        description: 'Delay between keystrokes to wait before sending a query.'
    },
    {
        name: 'headerTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of header.'
    },
    {
        name: 'footerTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of footer.'
    },
    {
        name: 'itemTemplate',
        type: 'any',
        default: 'null',
        description: 'Custom template for the items.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const MentionEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when value changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onFocus',
        description: 'Callback to invoke when the element receives focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onBlur',
        description: 'Callback to invoke when the element loses focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when overlay panel becomes visible.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when overlay panel becomes hidden.',
        arguments: []
    },
    {
        name: 'onSearch',
        description: 'Callback to invoke when search.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.trigger',
                type: 'object',
                description: 'Current trigger keyword.'
            }
        ]
    },
    {
        name: 'onSelect',
        description: 'Callback to invoke when selection changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.suggestion',
                type: 'object',
                description: 'Selected item'
            }
        ]
    },
    {
        name: 'onInput',
        description: 'Callback to invoke on input event of input field.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const MentionStyles = [
    { name: 'p-mention', description: 'Container element.' },
    { name: 'p-mention-panel', description: 'Overlay panel of suggestions.' },
    { name: 'p-mention-items', description: 'List container of suggestions.' },
    { name: 'p-mention-item', description: 'List item of a suggestion.' }
];

module.exports = {
    mention: {
        name: 'Mention',
        description: 'MegaMenu is navigation component that displays submenus together.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/mention',
        props: MentionProps,
        events: MentionEvents,
        styles: MentionStyles
    }
};
