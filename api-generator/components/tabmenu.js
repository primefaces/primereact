const TabMenuProps = [
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
        name: 'activeIndex',
        type: 'number',
        default: '0',
        description: 'Active index of menuitem.'
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
    }
];

const TabMenuEvents = [
    {
        name: 'onTabChange',
        description: 'Callback to invoke when active tab changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Selected menuitem'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the selected tab'
            }
        ]
    }
];

const TabMenuStyles = [
    { name: 'p-tabmenu', description: 'Container element.' },
    { name: 'p-tabmenu-nav', description: 'List element of headers.' },
    { name: 'p-tabmenuitem', description: 'Menuitem element.' },
    { name: 'p-menuitem-link', description: 'Link inside a menuitem.' },
    { name: 'p-menuitem-text', description: 'Label of a menuitem.' },
    { name: 'p-menuitem-icon', description: 'Icon of a menuitem.' }
];

module.exports = {
    tabmenu: {
        name: 'TabMenu',
        description: 'Menu is a navigation/command component that displays items as tab headers.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/tabmenu',
        props: TabMenuProps,
        events: TabMenuEvents,
        styles: TabMenuStyles
    }
};
