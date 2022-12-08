const ImageProps = [
    {
        name: 'preview',
        type: 'boolean',
        default: 'false',
        description: 'Controls the preview functionality.'
    },
    {
        name: 'src',
        type: 'string',
        default: 'null',
        description: 'Specifies the path to the image.'
    },
    {
        name: 'zoomSrc',
        type: 'string',
        default: 'null',
        description: 'Zoomed image that may be different than "src" image.'
    },
    {
        name: 'downloadable',
        type: 'boolean',
        default: 'false',
        description: 'Adds a download button to the preview control menu.'
    },
    {
        name: 'imageStyle',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the image element..'
    },
    {
        name: 'imageClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the image element.'
    }
];

const ImageEvents = [
    {
        name: 'onShow',
        description: 'Triggered when the preview overlay is shown.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Triggered when the preview overlay is hidden.',
        arguments: []
    },
    {
        name: 'onError',
        description: 'Triggered when image has an error loading.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const ImageStyles = [
    { name: 'p-image', description: 'Container element' },
    { name: 'p-image-preview-container', description: 'Container element with preview enabled.' },
    { name: 'p-image-preview-indicator', description: 'Mask layer over the image when hovered.' },
    { name: 'p-image-preview-icon', description: 'Mask layer over the image when hovered.' },
    { name: 'p-image-mask', description: 'Preview overlay container.' },
    { name: 'p-image-toolbar', description: 'Transformation options container.' },
    { name: 'p-image-action', description: 'An element inside the toolbar.' },
    { name: 'p-image-preview', description: 'Image element inside the preview overlay.' }
];

module.exports = {
    image: {
        name: 'Image',
        description: 'Displays an image with preview and transformation options.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/image',
        props: ImageProps,
        events: ImageEvents,
        styles: ImageStyles
    }
};
