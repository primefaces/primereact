const SlideMenuProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'model',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'popup',
        type: 'boolean',
        default: 'false',
        description: 'Defines if menu would displayed as a popup.'
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
        name: 'easing',
        type: 'string',
        default: 'ease-out',
        description: 'Easing animation to use for sliding.'
    },
    {
        name: 'effectDuration',
        type: 'any',
        default: '250',
        description: 'Duration of the sliding animation in milliseconds.'
    },
    {
        name: 'backLabel',
        type: 'string',
        default: 'Back',
        description: 'Label of element to navigate back.'
    },
    {
        name: 'menuWidth',
        type: 'number',
        default: '190',
        description: 'Width of the submenus.'
    },
    {
        name: 'viewportHeight',
        type: 'number',
        default: '175',
        description: 'Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.'
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
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const SlideMenuEvents = [
    {
        name: 'onShow',
        description: 'Callback to invoke when a popup menu is shown.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when a popup menu is hidden.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onNavigate',
        description: 'Callback to invoke when a menu is navigated to.',
        arguments: [
            {
                name: 'event.level',
                type: 'number',
                description: 'The menu level navigated to'
            }
        ]
    }
];

const SlideMenuStyles = [
    { name: 'p-slidemenu', description: 'Container element.' },
    { name: 'p-slidemenu-wrapper', description: 'Wrapper of content.' },
    { name: 'p-slidemenu-content', description: 'Content element.' },
    {
        name: 'p-slidemenu-backward',
        description: 'Element to navigate to previous menu on click.'
    },
    { name: 'p-menu-list', description: 'List element.' },
    { name: 'p-menuitem', description: 'Menuitem element.' },
    { name: 'p-menuitem-text', description: 'Label of a menuitem.' },
    { name: 'p-menuitem-icon', description: 'Icon of a menuitem.' },
    { name: 'p-submenu-icon', description: 'Arrow icon of a submenu.' }
];

module.exports = {
    slidemenu: {
        name: 'SlideMenu',
        description: 'SlideMenu displays submenus with a slide animation.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/slidemenu',
        props: SlideMenuProps,
        events: SlideMenuEvents,
        styles: SlideMenuStyles
    }
};
