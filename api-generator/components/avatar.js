const AvatarProps = [
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
        name: 'imageAlt',
        type: 'any',
        default: 'null',
        description: 'It specifies an alternate text for an image, if the image cannot be displayed.'
    },
    {
        name: 'imageFallback',
        type: 'string',
        default: 'default',
        description: 'Defines a fallback image or URL if the main image fails to load. If "default" will fallback to label then icon.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Size of the element, valid options are "large" and "xlarge".'
    },
    {
        name: 'shape',
        type: 'string',
        default: 'square',
        description: 'Shape of the element, valid options are "square" and "circle".'
    },
    {
        name: 'template',
        type: 'any',
        default: 'null',
        description: 'Template of the content.'
    }
];

const AvatarEvents = [
    {
        name: 'onImageError',
        description: 'This event is triggered if an error occurs while loading an image file.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onClick',
        description: 'Callback to invoke on click.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const AvatarStyles = [
    { name: 'p-avatar', description: 'Container element.' },
    {
        name: 'p-avatar-image',
        description: 'Container element in image mode.'
    },
    {
        name: 'p-avatar-circle',
        description: 'Container element with a circle shape.'
    },
    { name: 'p-avatar-text', description: 'Text of the Avatar.' },
    { name: 'p-avatar-icon', description: 'Icon of the Avatar.' },
    {
        name: 'p-avatar-lg',
        description: 'Container element with a large size.'
    },
    {
        name: 'p-avatar-xl',
        description: 'Container element with an xlarge size.'
    }
];

module.exports = {
    avatar: {
        name: 'Avatar',
        description: 'Avatar represents people using icons, labels and images.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/avatar',
        props: AvatarProps,
        events: AvatarEvents,
        styles: AvatarStyles
    }
};
