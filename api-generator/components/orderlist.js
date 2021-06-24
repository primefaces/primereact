const OrderListProps = [
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
        description: 'An array of objects to reorder.'
    },
    {
        name: 'header',
        type: 'string',
        default: 'null',
        description: 'Text for the caption'
    },
    {
        name: 'style',
        type: 'string',
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
        name: 'listStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the list element.'
    },
    {
        name: 'dragdrop',
        type: 'boolean',
        default: 'false',
        description: 'Whether to enable dragdrop based reordering.'
    },
    {
        name: 'dragdropScope',
        type: 'string',
        default: 'null',
        description: 'Unique key of drag drop events to avoid conflict with other drag drop events on the page.'
    },
    {
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the list and returns the content for it.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    }
];

const OrderListEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when list is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Reordered list'
            }
        ]
    }
];

const OrderListStyles = [
    { name: 'p-orderlist', description: 'Container element.' },
    { name: 'p-orderlist-list', description: 'List container.' },
    { name: 'p-orderlist-item', description: 'An item in the list' }
];

module.exports = {
    orderlist: {
        name: 'OrderList',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/orderlist',
        props: OrderListProps,
        events: OrderListEvents,
        styles: OrderListStyles
    }
};
