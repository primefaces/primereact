const ContextMenuProps = [
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
        name: 'global',
        type: 'boolean',
        default: 'false',
        description: 'Attaches the menu to document instead of a particular item.'
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

const ContextMenuEvents = [

];

const ContextMenuStyles = [
    { name: 'p-contextmenu', description: 'Container element.' },
    { name: 'p-menu-list', description: 'List element.' },
    { name: 'p-menuitem', description: 'Menuitem element.' },
    { name: 'p-menuitem-text', description: 'Label of a menuitem.' },
    { name: 'p-menuitem-icon', description: 'Icon of a menuitem.' },
    { name: 'p-submenu-icon', description: 'Arrow icon of a submenu.' }
];

module.exports = {
    contextmenu: {
        name: 'ContextMenu',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/contextmenu',
        props: ContextMenuProps,
        events: ContextMenuEvents,
        styles: ContextMenuStyles
    }
};
