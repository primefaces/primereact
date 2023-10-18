const ToastProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to add to initial layering of PrimeReact components which start from 1000.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'topright',
        description: 'Position of the toast in viewport, valid values are "top-right", "top-left", "bottom-left" and "bottom-right".'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'self',
        description: "DOM element instance where the component should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    }
];

const ToastEvents = [
    {
        name: 'onRemove',
        description: 'Callback to invoke when a message is removed.',
        arguments: [
            {
                name: 'message',
                type: 'any',
                description: 'Removed message'
            }
        ]
    },
    {
        name: 'onClick',
        description: 'Callback to invoke when a message gets clicked.',
        arguments: [
            {
                name: 'message',
                type: 'any',
                description: 'Clicked message'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when message becomes visible.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when message becomes hidden.',
        arguments: []
    },
    {
        name: 'onMouseEnter',
        description: 'Callback to invoke when a message gets focus with mouse.',
        arguments: [
            {
                name: 'event',
                type: 'MouseEvent',
                description: 'Mouse Event'
            }
        ]
    },
    {
        name: 'onMouseLeave',
        description: 'Callback to invoke when a message loses focus with mouse.',
        arguments: [
            {
                name: 'event',
                type: 'MouseEvent',
                description: 'Mouse Event'
            }
        ]
    }
];

const ToastStyles = [
    { name: 'p-toast', description: 'Main container element.' },
    {
        name: 'p-toast-container',
        description: 'Container of a message item.'
    },
    { name: 'p-toast-item', description: 'Message element.' },
    {
        name: 'p-toast-icon-close',
        description: 'Close icon of a message.'
    },
    { name: 'p-toast-image', description: 'Severity icon.' },
    {
        name: 'p-toast-message',
        description: 'Container of message texts.'
    },
    { name: 'p-toast-title', description: 'Summary of the message.' }
];

module.exports = {
    toast: {
        name: 'Toast',
        description: 'Toast is used to display messages in an overlay.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/toast',
        props: ToastProps,
        events: ToastEvents,
        styles: ToastStyles
    }
};
