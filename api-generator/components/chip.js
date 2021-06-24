const ChipProps = [
    {
        name: 'label',
        type: 'string',
        default: 'null',
        description: 'Defines the text to display.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Defines the icon to display.'
    },
    {
        name: 'image',
        type: 'string',
        default: 'null',
        description: 'Defines the image to display.'
    },
    {
        name: 'removable',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display a remove icon.'
    },
    {
        name: 'removeIcon',
        type: 'string',
        default: 'pi pi-times-circle',
        description: 'Icon of the remove element.'
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
        name: 'template',
        type: 'any',
        default: 'null',
        description: 'Template of an item.'
    },
    {
        name: 'imageAlt',
        type: 'any',
        default: 'null',
        description: 'It specifies an alternate text for an image, if the image cannot be displayed.'
    }
];

const ChipEvents = [
    {
        name: 'onRemove',
        description: 'Callback to invoke when a chip is removed.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onImageError',
        description: 'This event is triggered if an error occurs while loading an image file.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const ChipStyles = [
    { name: 'p-chip', description: 'Container element.' },
    {
        name: 'p-chip-image',
        description: 'Container element in image mode.'
    },
    { name: 'p-chip-text', description: 'Text of the chip.' },
    { name: 'pi-chip-remove-icon', description: 'Remove icon.' }
];

module.exports = {
    chip: {
        name: 'Chip',
        description: 'Chip represents entities using icons, labels and images.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/chip',
        props: ChipProps,
        events: ChipEvents,
        styles: ChipStyles
    }
};
