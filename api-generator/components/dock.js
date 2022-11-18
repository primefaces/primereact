const DockProps = [
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
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'model',
        type: 'object',
        default: 'null',
        description: 'MenuModel instance to define the action items.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'bottom',
        description: "Position of element. Valid values are 'bottom', 'top', 'left' and 'right'."
    }
];

const DockEvents = [];

const DockStyles = [
    { name: 'p-dock', description: 'Container element.' },
    { name: 'p-dock-list', description: 'List of items.' },
    { name: 'p-dock-item', description: 'Each items in list.' }
];

module.exports = {
    dock: {
        name: 'Dock',
        description: 'Dock is a navigation component consisting of menuitems.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/dock',
        props: DockProps,
        events: DockEvents,
        styles: DockStyles
    }
};
