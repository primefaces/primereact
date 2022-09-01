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
    },
    {
        name: 'icon',
        type: 'string',
        default: 'Based on severity',
        description: 'Icon for the message. If not set it will default to severity icon.'
    }
];

const MessageEvents = [];

const MessageStyles = [];

module.exports = {
    message: {
        name: 'Message',
        description: 'Message component is useful in cases where a single message needs to be displayed related to an element such as forms.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/message',
        props: MessageProps,
        events: MessageEvents,
        styles: MessageStyles
    }
};
