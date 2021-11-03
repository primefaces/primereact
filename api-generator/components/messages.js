const MessagesProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const MessagesEvents = [
    {
        name: 'onRemove',
        description: 'Callback to invoke when a message is removed.',
        arguments: [
            {
                name: 'message',
                type: 'any',
                description: 'Removed message'
            }
        ]
    },
    {
        name: 'onClick',
        description: 'Callback to invoke when a message is removed.',
        arguments: [
            {
                name: 'message',
                type: 'any',
                description: 'Clicked message'
            }
        ]
    }
];

const MessagesStyles = [
    { name: 'p-messages', description: 'Container element.' },
    {
        name: 'p-messages-info',
        description: 'Container element when displaying info messages.'
    },
    {
        name: 'p-messages-warn',
        description: 'Container element when displaying warning messages.'
    },
    {
        name: 'p-messages-error',
        description: 'Container element when displaying error messages.'
    },
    {
        name: 'p-messages-success',
        description: 'Container element when displaying success messages.'
    },
    { name: 'p-messages-close', description: 'Close icon.' },
    { name: 'p-messages-icon', description: 'Severity icon.' },
    { name: 'p-messages-summary', description: 'Summary of a message.' },
    { name: 'p-messages-detail', description: 'Detail of a message.' }
];

module.exports = {
    messages: {
        name: 'Messages',
        description: 'Messages is used to display inline messages with various severities.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/messages',
        props: MessagesProps,
        events: MessagesEvents,
        styles: MessagesStyles
    }
};
