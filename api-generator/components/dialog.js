const DialogProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Title content of the dialog.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer content of the dialog.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the dialog.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'center',
        description: 'Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".'
    },
    {
        name: 'modal',
        type: 'boolean',
        default: 'true',
        description: 'Defines if background should be blocked when dialog is displayed.'
    },
    {
        name: 'resizable',
        type: 'boolean',
        default: 'true',
        description: 'Enables resizing of the content.'
    },
    {
        name: 'draggable',
        type: 'boolean',
        default: 'true',
        description: 'Enables dragging to change the position using header.'
    },
    {
        name: 'minX',
        type: 'number',
        default: '0',
        description: 'Minimum value for the left coordinate of dialog in dragging.'
    },
    {
        name: 'minY',
        type: 'number',
        default: '0',
        description: 'Minimum value for the top coordinate of dialog in dragging.'
    },
    {
        name: 'keepInViewport',
        type: 'boolean',
        default: 'true',
        description: 'Keeps dialog in the viewport.'
    },
    {
        name: 'headerStyle',
        type: 'object',
        default: 'null',
        description: 'Style of the header section.'
    },
    {
        name: 'headerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the header section.'
    },
    {
        name: 'contentStyle',
        type: 'object',
        default: 'null',
        description: 'Style of the content section.'
    },
    {
        name: 'contentClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the content section.'
    },
    {
        name: 'closeOnEscape',
        type: 'boolean',
        default: 'true',
        description: 'Specifies if pressing escape key should hide the dialog.'
    },
    {
        name: 'dismissableMask',
        type: 'boolean',
        default: 'false',
        description: 'Specifies if clicking the modal background should hide the dialog.'
    },
    {
        name: 'rtl',
        type: 'boolean',
        default: 'false',
        description: 'When enabled dialog is displayed in RTL direction.'
    },
    {
        name: 'closable',
        type: 'boolean',
        default: 'true',
        description: 'Adds a close icon to the header to hide the dialog.'
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
        name: 'maskClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the mask.'
    },
    {
        name: 'showHeader',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the header or not.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'maximizable',
        type: 'boolean',
        default: 'false',
        description: 'Whether the dialog can be displayed full screen.'
    },
    {
        name: 'blockScroll',
        type: 'boolean',
        default: 'false',
        description: 'Whether background scroll should be blocked when dialog is visible.'
    },
    {
        name: 'icons',
        type: 'any',
        default: 'null',
        description: 'Custom icons template for the header.'
    },
    {
        name: 'ariaCloseIconLabel',
        type: 'string',
        default: 'null',
        description: 'Defines a string that labels the close icon.'
    },
    {
        name: 'focusOnShow',
        type: 'boolean',
        default: 'true',
        description: 'When enabled, first button receives focus on show.'
    },
    {
        name: 'maximized',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the dialog is initially displayed full screen.'
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

const DialogEvents = [
    {
        name: 'onHide',
        description: 'Callback to invoke when dialog is hidden (Required).',
        arguments: []
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when dialog is showed.',
        arguments: []
    },
    {
        name: 'onMaximize',
        description: 'Callback to invoke when toggle maximize icon is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.maximized',
                type: 'any',
                description: 'Whether to show the dialog or not on fullscreen.'
            }
        ]
    },
    {
        name: 'onDragStart',
        description: 'Callback to invoke when dialog dragging is initiated.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onDrag',
        description: 'Callback to invoke when dragging dialog.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onDragEnd',
        description: 'Callback to invoke when dialog dragging is completed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onDragEnd',
        description: 'Callback to invoke when dialog dragging is completed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onResizeStart',
        description: 'Callback to invoke when dialog resizing is initiated.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onResize',
        description: 'Callback to invoke while resizing dialog.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onResizeEnd',
        description: 'Callback to invoke when dialog resizing is completed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onMaskClick',
        description: 'Callback to invoke when the mask is clicked.',
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
        description: 'Callback to invoke when dialog is clicked.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const DialogStyles = [
    { name: 'p-dialog', description: 'Container element.' },
    { name: 'p-dialog-titlebar', description: 'Container of header.' },
    { name: 'p-dialog-title', description: 'Header element.' },
    {
        name: 'p-dialog-titlebar-icon',
        description: 'Icon container inside header.'
    },
    {
        name: 'p-dialog-titlebar-close',
        description: 'Close icon element.'
    },
    { name: 'p-dialog-content', description: 'Content element' }
];

module.exports = {
    dialog: {
        name: 'Dialog',
        description: 'Dialog is a container to display content in an overlay window.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/dialog',
        props: DialogProps,
        events: DialogEvents,
        styles: DialogStyles
    }
};
