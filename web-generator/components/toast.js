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
    }
];

const ToastEvents = [

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
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/toast',
        props: ToastProps,
        events: ToastEvents,
        styles: ToastStyles
    }
};
