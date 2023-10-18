const SidebarProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
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
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the dialog.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'left',
        description: 'Specifies the position of the sidebar, valid values are "left" and "right".'
    },
    {
        name: 'fullScreen',
        type: 'boolean',
        default: 'false',
        description: 'Adds a close icon to the header to hide the dialog.'
    },
    {
        name: 'blockScroll',
        type: 'boolean',
        default: 'false',
        description: 'Whether to block scrolling of the document when sidebar is active.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Whether to dismiss sidebar on click of the mask.'
    },
    {
        name: 'showCloseIcon',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display a close icon inside the panel.'
    },
    {
        name: 'ariaCloseLabel',
        type: 'string',
        default: 'close',
        description: 'Aria label of the close icon.'
    },
    {
        name: 'icons',
        type: 'any',
        default: 'null',
        description: 'Custom icons template for the header.'
    },
    {
        name: 'modal',
        type: 'boolean',
        default: 'true',
        description: 'Whether to add a translucent overlay behind the sidebar.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'closeOnEscape',
        type: 'boolean',
        default: 'true',
        description: 'Specifies if pressing escape key should hide the sidebar.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const SidebarEvents = [
    {
        name: 'onHide',
        description: 'Callback to invoke when sidebar gets hidden.',
        arguments: []
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when sidebar gets shown.',
        arguments: []
    }
];

const SidebarStyles = [
    { name: 'p-sidebar', description: 'Container element' },
    {
        name: 'p-sidebar-left',
        description: 'Container element of left sidebar.'
    },
    {
        name: 'p-sidebar-right',
        description: 'Container element of right sidebar.'
    },
    {
        name: 'p-sidebar-top',
        description: 'Container element of top sidebar.'
    },
    {
        name: 'p-sidebar-bottom',
        description: 'Container element of bottom sidebar.'
    },
    {
        name: 'p-sidebar-full',
        description: 'Container element of a full screen sidebar.'
    },
    {
        name: 'p-sidebar-active',
        description: 'Container element when sidebar is visible.'
    },
    { name: 'p-sidebar-close', description: 'Close anchor element.' },
    { name: 'p-sidebar-sm', description: 'Small sized sidebar.' },
    { name: 'p-sidebar-md', description: 'Medium sized sidebar.' },
    { name: 'p-sidebar-lg', description: 'Large sized sidebar.' },
    {
        name: 'p-sidebar-view',
        description: 'The page view is displayed according to the sidebar position.'
    },
    {
        name: 'p-sidebar-content',
        description: 'A content is displayed according to the sidebar position. To use this style, a sidebar must be created inside that content using the appendTo property and this content must have position:"relative" style.'
    },
    {
        name: 'p-sidebar-mask',
        description: 'Modal layer of the sidebar.'
    }
];

module.exports = {
    sidebar: {
        name: 'Sidebar',
        description: 'Sidebar is a panel component displayed as an overlay.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/sidebar',
        props: SidebarProps,
        events: SidebarEvents,
        styles: SidebarStyles
    }
};
