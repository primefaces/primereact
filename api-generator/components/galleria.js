const GalleriaProps = [
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
        name: 'activeIndex',
        type: 'number',
        default: '0',
        description: 'Index of the first item.'
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
        name: 'item',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the value and returns the content for preview item.'
    },
    {
        name: 'thumbnail',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the value and returns the content for thumbnail item.'
    },
    {
        name: 'indicator',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the value and returns the content for indicator item.'
    },
    {
        name: 'caption',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the value and returns the content for caption item.'
    },
    {
        name: 'circular',
        type: 'boolean',
        default: 'false',
        description: 'Defines if scrolling would be infinite.'
    },
    {
        name: 'autoPlay',
        type: 'boolean',
        default: 'false',
        description: 'Items are displayed with a slideshow in autoPlay mode.'
    },
    {
        name: 'transitionInterval',
        type: 'number',
        default: '4000',
        description: 'Time in milliseconds to scroll items.'
    },
    {
        name: 'numVisible',
        type: 'number',
        default: '3',
        description: 'Number of items per page.'
    },
    {
        name: 'responsiveOptions',
        type: 'any',
        default: 'null',
        description: 'An array of options for responsive design.'
    },
    {
        name: 'thumbnailsPosition',
        type: 'string',
        default: 'bottom',
        description: 'Position of thumbnails. Valid values are "bottom", "top", "left" and "right".'
    },
    {
        name: 'indicatorsPosition',
        type: 'string',
        default: 'bottom',
        description: 'Position of indicators. Valid values are "bottom", "top", "left" and "right".'
    },
    {
        name: 'verticalThumbnailViewPortHeight',
        type: 'string',
        default: '300px',
        description: 'Height of the viewport in vertical thumbnail.'
    },
    {
        name: 'showItemNavigators',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display navigation buttons in item container.'
    },
    {
        name: 'showThumbnailNavigators',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display navigation buttons in thumbnail container.'
    },
    {
        name: 'showThumbnails',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display thumbnail container.'
    },
    {
        name: 'showIndicators',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display indicator container.'
    },
    {
        name: 'showIndicatorsOnItem',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, indicator container is displayed on item container.'
    },
    {
        name: 'showItemNavigatorsOnHover',
        type: 'boolean',
        default: 'false',
        description: "Whether to display navigation buttons on item container's hover."
    },
    {
        name: 'changeItemOnIndicatorHover',
        type: 'boolean',
        default: 'false',
        description: "When enabled, item is changed on indicator item's hover."
    },
    {
        name: 'fullScreen',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display the component on fullscreen.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const GalleriaEvents = [
    {
        name: 'onItemChange',
        description: 'Callback to invoke after changing item.',
        arguments: [
            {
                name: 'event.index',
                type: 'number',
                description: 'index of the new item.'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when modal becomes visible.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when modal becomes hidden.',
        arguments: []
    }
];

const GalleriaStyles = [
    { name: 'p-galleria', description: 'Container element.' },
    { name: 'p-galleria-header', description: 'Header section.' },
    { name: 'p-galleria-footer', description: 'Footer section.' },
    {
        name: 'p-galleria-item-wrapper',
        description: 'Item wrapper element. It contains item container and indicators.'
    },
    {
        name: 'p-galleria-item-container',
        description: 'Container of the item wrapper. It contains navigation buttons, items and caption content.'
    },
    {
        name: 'p-galleria-indicators',
        description: 'Container of the indicators. It contains indicator items.'
    },
    {
        name: 'p-galleria-thumbnail-content',
        description: 'Thumbnail content element.'
    },
    {
        name: 'p-galleria-thumbnail-container',
        description: 'Container of the thumbnail content. It contains navigation buttons and thumbnail items.'
    },
    {
        name: 'p-galleria-caption',
        description: 'Content of the item caption.'
    }
];

module.exports = {
    galleria: {
        name: 'Galleria',
        description: 'Galleria is a content gallery component.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/galleria',
        props: GalleriaProps,
        events: GalleriaEvents,
        styles: GalleriaStyles
    }
};
