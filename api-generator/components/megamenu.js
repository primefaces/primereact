const MegaMenuProps = [
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
        name: 'orientation',
        type: 'string',
        default: 'horizontal',
        description: 'Defines the orientation, valid values are horizontal and vertical.'
    },
    {
        name: 'start',
        type: 'any',
        default: 'null',
        description: 'The template of starting element.'
    },
    {
        name: 'end',
        type: 'any',
        default: 'null',
        description: 'The template of trailing element'
    }
];

const MegaMenuEvents = [];

const MegaMenuStyles = [
    { name: 'p-megamenu', description: 'Container element.' },
    { name: 'p-menu-list', description: 'List element.' },
    { name: 'p-menuitem', description: 'Menuitem element.' },
    { name: 'p-menuitem-text', description: 'Label of a menuitem.' },
    { name: 'p-menuitem-icon', description: 'Icon of a menuitem.' },
    { name: 'p-submenu-icon', description: 'Arrow icon of a submenu.' }
];

module.exports = {
    megamenu: {
        name: 'MegaMenu',
        description: 'MegaMenu is navigation component that displays submenus together.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/megamenu',
        props: MegaMenuProps,
        events: MegaMenuEvents,
        styles: MegaMenuStyles
    }
};
