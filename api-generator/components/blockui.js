const BlockUIProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'blocked',
        type: 'boolean',
        default: 'false',
        description: 'Controls the blocked state.'
    },
    {
        name: 'fullScreen',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the whole document gets blocked.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'autoZIndex',
        type: 'boolean',
        default: 'true',
        description: 'Whether to automatically manage layering.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'containerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the container element.'
    },
    {
        name: 'containerStyle',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the container element.'
    },
    {
        name: 'template',
        type: 'any',
        default: 'null',
        description: 'Template of mask.'
    }
];

const BlockUIEvents = [
    {
        name: 'onBlocked',
        description: 'Fired when the element gets blocked.',
        arguments: []
    },
    {
        name: 'onUnblocked',
        description: 'Fired when the element gets unblocked.',
        arguments: []
    }
];

const BlockUIStyles = [
    {
        name: 'p-blockui',
        description: 'Mask element.'
    },
    {
        name: 'p-blockui-document',
        description: 'Mask element in full screen mode.'
    }
];

module.exports = {
    blockui: {
        name: 'BlockUI',
        description: 'BlockUI can either block other components or the whole page.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/blockui',
        props: BlockUIProps,
        events: BlockUIEvents,
        styles: BlockUIStyles
    }
};
