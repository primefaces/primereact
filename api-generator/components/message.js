const MessageProps = [
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
        name: 'severity',
        type: 'string',
        default: 'null',
        description: 'Severity level of the message.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Message text.'
    },
    {
        name: 'content',
        type: 'element',
        default: 'null',
        description: 'Template of the message.'
    }
];

const MessageEvents = [

];

const MessageStyles = [

];

module.exports = {
    message: {
        name: 'Message',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/message',
        props: MessageProps,
        events: MessageEvents,
        styles: MessageStyles
    }
};
