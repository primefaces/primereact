const OverlayPanelProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Enables to hide the overlay when outside is clicked.'
    },
    {
        name: 'showCloseIcon',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, displays a close icon at top right corner.'
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
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'ariaCloseLabel',
        type: 'string',
        default: 'close',
        description: 'Aria label of the close icon.'
    },
    {
        name: 'breakpoints',
        type: 'object',
        default: 'null',
        description: 'Object literal to define widths per screen size.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const OverlayPanelEvents = [
    {
        name: 'onShow',
        description: 'Callback to invoke when overlay becomes visible.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when overlay becomes hidden.',
        arguments: []
    }
];

const OverlayPanelStyles = [
    { name: 'p-overlaypanel', description: 'Container element.' },
    {
        name: 'p-overlaypanel-content',
        description: 'Content of the panel.'
    },
    { name: 'p-overlaypanel-close', description: 'Close icon.' }
];

module.exports = {
    overlaypanel: {
        name: 'OverlayPanel',
        description: 'OverlayPanel is a container component that can overlay other components on page.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/overlaypanel',
        props: OverlayPanelProps,
        events: OverlayPanelEvents,
        styles: OverlayPanelStyles
    }
};
