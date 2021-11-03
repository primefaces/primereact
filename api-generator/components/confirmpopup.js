const ConfirmPopupProps = [
    {
        name: 'target',
        type: 'DomElement',
        default: 'null',
        description: 'Element to align the overlay. (Required)'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the confirm popup.'
    },
    {
        name: 'message',
        type: 'string',
        default: 'null',
        description: 'Message of the confirmation.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Icon to display next to the message.'
    },
    {
        name: 'acceptLabel',
        type: 'string',
        default: 'Yes',
        description: 'Label of the accept button.'
    },
    {
        name: 'rejectLabel',
        type: 'string',
        default: 'No',
        description: 'Label of the reject button.'
    },
    {
        name: 'acceptIcon',
        type: 'string',
        default: 'null',
        description: 'Icon of the accept button.'
    },
    {
        name: 'rejectIcon',
        type: 'string',
        default: 'null',
        description: 'Icon of the reject button.'
    },
    {
        name: 'acceptClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the accept button.'
    },
    {
        name: 'rejectClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the reject button.'
    },
    {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Enables to hide the popup when outside is clicked.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer content of the confirm popup.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
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
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const ConfirmPopupEvents = [
    {
        name: 'accept',
        description: 'Callback to execute when action is confirmed.',
        arguments: []
    },
    {
        name: 'reject',
        description: 'Callback to execute when action is rejected.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when confirm popup is hidden.',
        arguments: [
            {
                name: 'result',
                type: 'string',
                description: ' Indicates with which selection the popup was closed. Valid values are "accept", "reject" and undefined (outside click).'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when overlay panel becomes visible.',
        arguments: []
    }
];

const ConfirmPopupStyles = [
    { name: 'p-confirm-popup', description: 'Container element.' },
    { name: 'p-confirm-content', description: 'Content element.' },
    { name: 'p-confirm-popup-icon', description: 'Message icon.' },
    { name: 'p-confirm-popup-message', description: 'Message text.' },
    {
        name: 'p-confirm-popup-footer',
        description: 'Footer element for buttons.'
    }
];

module.exports = {
    confirmpopup: {
        name: 'ConfirmPopup',
        description: 'ConfirmPopup displays a confirmation overlay displayed relatively to its target.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/confirmpopup',
        props: ConfirmPopupProps,
        events: ConfirmPopupEvents,
        styles: ConfirmPopupStyles
    }
};
