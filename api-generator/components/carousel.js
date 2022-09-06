const CarouselProps = [
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
        name: 'page',
        type: 'number',
        default: 'null',
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
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the value and returns the content for it.'
    },
    {
        name: 'circular',
        type: 'boolean',
        default: 'false',
        description: 'Defines if scrolling would be infinite.'
    },
    {
        name: 'showIndicators',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display indicator container.'
    },
    {
        name: 'showNavigators',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display navigation buttons in container.'
    },
    {
        name: 'autoplayInterval',
        type: 'number',
        default: 'null',
        description: 'Time in milliseconds to scroll items automatically.'
    },
    {
        name: 'numVisible',
        type: 'number',
        default: '1',
        description: 'Number of items per page.'
    },
    {
        name: 'numScroll',
        type: 'number',
        default: '1',
        description: 'Number of items to scroll.'
    },
    {
        name: 'responsiveOptions',
        type: 'any',
        default: 'null',
        description: 'An array of options for responsive design.'
    },
    {
        name: 'orientation',
        type: 'string',
        default: 'horizontal',
        description: 'Specifies the layout of the component, valid values are "horizontal" and "vertical".'
    },
    {
        name: 'verticalViewPortHeight',
        type: 'string',
        default: '300px',
        description: 'Height of the viewport in vertical layout.'
    },
    {
        name: 'contentClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of main content.'
    },
    {
        name: 'containerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the viewport container.'
    },
    {
        name: 'indicatorsContentClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the paginator items.'
    }
];

const CarouselEvents = [
    {
        name: 'onPageChange',
        description: 'Callback to invoke after scroll.',
        arguments: [
            {
                name: 'event.page',
                type: 'number',
                description: 'Value of the new page.'
            }
        ]
    }
];

const CarouselStyles = [
    {
        name: 'p-carousel',
        type: 'Container element.',
        default: 'p-carousel-header',
        description: 'Header section.'
    },
    {
        name: 'p-carousel-footer',
        type: 'Footer section.',
        default: 'p-carousel-content',
        description: 'Main content element. It contains the container of the viewport.'
    },
    {
        name: 'p-carousel-container',
        type: 'Container of the viewport. It contains navigation buttons and viewport.',
        default: 'p-carousel-items-content',
        description: 'Viewport.'
    },
    {
        name: 'p-carousel-indicators',
        type: 'Container of the indicators.',
        default: 'p-carousel-indicator',
        description: 'Indicator element.'
    }
];

module.exports = {
    carousel: {
        name: 'Carousel',
        description: 'Carousel is a content slider featuring various customization options.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/carousel',
        props: CarouselProps,
        events: CarouselEvents,
        styles: CarouselStyles
    }
};
