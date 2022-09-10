const PanelMenuProps = [
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
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Whether multiple tabs can be activated at the same time or not.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const PanelMenuEvents = [];

const PanelMenuStyles = [
    { name: 'p-panelmenu', description: 'Container element.' },
    {
        name: 'p-panelmenu-header',
        description: 'Accordion header of root submenu.'
    },
    {
        name: 'p-panelmenu-content',
        description: 'Accordion content of root submenu.'
    },
    { name: 'p-submenu-list', description: 'List element.' },
    { name: 'p-menuitem', description: 'Menuitem element.' },
    { name: 'p-menuitem-text', description: 'Label of a menuitem.' },
    { name: 'p-menuitem-icon', description: 'Icon of a menuitem.' },
    {
        name: 'p-panelmenu-icon',
        description: 'Arrow icon of an accordion header.'
    }
];

module.exports = {
    panelmenu: {
        name: 'PanelMenu',
        description: 'PanelMenu is a hybrid of accordion-tree components.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/panelmenu',
        props: PanelMenuProps,
        events: PanelMenuEvents,
        styles: PanelMenuStyles
    }
};
