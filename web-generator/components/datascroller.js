const DataScrollerProps = [
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
        description: 'An array of objects to display.'
    },
    {
        name: 'rows',
        type: 'number',
        default: 'null',
        description: 'Number of rows to fetch in a load event.'
    },
    {
        name: 'inline',
        type: 'boolean',
        default: 'false',
        description: 'Defines if the event target to listen the scroll event is the element itself.'
    },
    {
        name: 'scrollHeight',
        type: 'any',
        default: 'null',
        description: 'Max height of the content area in inline mode.'
    },
    {
        name: 'loader',
        type: 'boolean',
        default: 'null',
        description: 'Determines whether data is loaded by a target element.'
    },
    {
        name: 'buffer',
        type: 'number',
        default: '0.9',
        description: 'Number of buffer size.'
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
    },
    {
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the value and returns the content for it.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Label of header.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Label of footer.'
    }
];

const DataScrollerEvents = [

];

const DataScrollerStyles = [
    { name: 'p-datascroller', description: 'Container element.' },
    { name: 'p-datascroller-header', description: 'Header section.' },
    { name: 'p-datascroller-footer', description: 'Footer section.' },
    {
        name: 'p-datascroller-content',
        description: 'Wrapper of item container.'
    },
    {
        name: 'p-datascroller-list',
        description: 'Item container element.'
    }
];

module.exports = {
    datascroller: {
        name: 'DataScroller',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/datascroller',
        props: DataScrollerProps,
        events: DataScrollerEvents,
        styles: DataScrollerStyles
    }
};
