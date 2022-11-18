const SpeedDialProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'model',
        type: 'object',
        default: 'null',
        description: 'MenuModel instance to define the action items.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the overlay.'
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
        name: 'direction',
        type: 'string',
        default: 'up',
        description: "Specifies the opening direction of actions. Valid values are 'up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left' and 'down-right'"
    },
    {
        name: 'transitionDelay',
        type: 'number',
        default: '30',
        description: 'Transition delay step for each action item.'
    },
    {
        name: 'type',
        type: 'string',
        default: 'linear',
        description: 'Specifies the opening type of actions.'
    },
    {
        name: 'radius',
        type: 'number',
        default: '0',
        description: 'Radius for *circle types.'
    },
    {
        name: 'mask',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show a mask element behind the speeddial'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the component is disabled.'
    },
    {
        name: 'hideOnClickOutside',
        type: 'boolean',
        default: 'true',
        description: 'Whether the actions close when clicked outside.'
    },
    {
        name: 'buttonClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the button element.'
    },
    {
        name: 'buttonStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the button element.'
    },
    {
        name: 'buttonTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of button element.'
    },
    {
        name: 'maskClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the mask element.'
    },
    {
        name: 'maskStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the mask element.'
    },
    {
        name: 'showIcon',
        type: 'string',
        default: 'pi pi-plus',
        description: 'Show icon of the button element.'
    },
    {
        name: 'hideIcon',
        type: 'string',
        default: 'null',
        description: 'Hide icon of the button element.'
    },
    {
        name: 'rotateAnimation',
        type: 'boolean',
        default: 'true',
        description: 'Defined to rotate showIcon when hideIcon is not present.'
    }
];

const SpeedDialEvents = [
    {
        name: 'onVisibleChange',
        description: 'Fired when the visibility of element changed.',
        arguments: [
            {
                name: 'visible',
                type: 'boolean',
                description: 'Whether the actions are visible.'
            }
        ]
    },
    {
        name: 'onClick',
        description: 'Fired when the button element clicked.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event.'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Fired when the actions are visible.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Fired when the actions are hidden.',
        arguments: []
    }
];

const SpeedDialStyles = [
    { name: 'p-speeddial', description: 'Container element.' },
    {
        name: 'p-speeddial-button',
        description: 'Button element of speeddial.'
    },
    {
        name: 'p-speeddial-mask',
        description: 'Mask element of speeddial.'
    },
    { name: 'p-speeddial-list', description: 'List of the actions.' },
    {
        name: 'p-speeddial-item',
        description: 'Each action item of list.'
    }
];

module.exports = {
    speeddial: {
        name: 'SpeedDial',
        description: 'When pressed, a floating action button can display multiple primary actions that can be performed on a page.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/speeddial',
        props: SpeedDialProps,
        events: SpeedDialEvents,
        styles: SpeedDialStyles
    }
};
