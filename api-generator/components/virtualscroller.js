const VirtualScrollerProps = [
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
        type: 'any',
        default: 'null',
        description: 'Style class of the component.'
    },
    {
        name: 'items',
        type: 'array',
        default: 'null',
        description: 'An array of objects to display.'
    },
    {
        name: 'itemSize',
        type: 'number|[number, number]',
        default: 'null',
        description: 'The height/width of item according to orientation.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: 'null',
        description: 'Height of the scroll viewport.'
    },
    {
        name: 'scrollWidth',
        type: 'string',
        default: 'null',
        description: 'Width of the scroll viewport.'
    },
    {
        name: 'orientation',
        type: 'string',
        default: 'vertical',
        description: 'The orientation of scrollbar, valid values are "vertical", "horizontal" and "both".'
    },
    {
        name: 'numToleratedItems',
        type: 'number',
        default: 'null',
        description:
            'Determines how many additional elements to add to the DOM outside of the view.According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number.Default value is half the number of items shown in the view.'
    },
    {
        name: 'delay',
        type: 'number',
        default: '0',
        description: 'Delay in scroll before new data is loaded.'
    },
    {
        name: 'resizeDelay',
        type: 'number',
        default: '10',
        description: "Delay after window's resize finishes."
    },
    {
        name: 'lazy',
        type: 'boolean',
        default: 'false',
        description: 'Defines if data is loaded and interacted with in lazy manner.'
    },
    {
        name: 'showLoader',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show loader.'
    },
    {
        name: 'autoSize',
        type: 'boolean',
        default: 'false',
        description: 'Whether to dynamically change the height or width of scrollable container.'
    },
    {
        name: 'loadingTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of loader.'
    },
    {
        name: 'loaderIconTemplate',
        type: 'any',
        default: 'null',
        description: "The template of loader's icon."
    },
    {
        name: 'itemTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of item.'
    },
    {
        name: 'contentTemplate',
        type: 'any',
        default: 'null',
        description: "The template of item's wrapper element."
    }
];

const VirtualScrollerEvents = [
    {
        name: 'onScroll',
        description: 'Callback to invoke when scroll position changes.',
        arguments: [
            {
                name: 'event',
                type: 'any',
                description: 'Browser event.'
            }
        ]
    },
    {
        name: 'onScrollIndexChange',
        description: "Callback to invoke when scroll position and item's range in view changes.",
        arguments: [
            {
                name: 'event.first',
                type: 'any',
                description: 'First index of the new data range to be loaded.'
            },
            {
                name: 'event.last',
                type: 'any',
                description: 'Last index of the new data range to be loaded.'
            }
        ]
    },
    {
        name: 'onLazyLoad',
        description: 'Callback to invoke in lazy mode to load new data.',
        arguments: [
            {
                name: 'event.first',
                type: 'any',
                description: 'First index of the new data range to be loaded.'
            },
            {
                name: 'event.last',
                type: 'any',
                description: 'Last index of the new data range to be loaded.'
            }
        ]
    }
];

const VirtualScrollerStyles = [
    {
        name: 'p-virtualscroller',
        description: 'Container element.',
        arguments: []
    },
    {
        name: 'p-virtualscroller-content',
        description: 'Content element.',
        arguments: []
    },
    {
        name: 'p-virtualscroller-loader',
        description: 'Loader element.',
        arguments: []
    }
];

module.exports = {
    virtualscroller: {
        name: 'VirtualScroller',
        description: 'VirtualScroller is a performant approach to handle huge data efficiently.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/virtualscroller',
        props: VirtualScrollerProps,
        events: VirtualScrollerEvents,
        styles: VirtualScrollerStyles
    }
};
