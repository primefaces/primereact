const ToolbarProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
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
        name: 'left',
        type: 'any',
        default: 'null',
        description: 'The template of left element.'
    },
    {
        name: 'right',
        type: 'any',
        default: 'null',
        description: 'The template of right element'
    }
];

const ToolbarEvents = [

];

const ToolbarStyles = [
    { name: 'p-toolbar', description: 'Main container element.' },
    {
        name: 'p-toolbar-group-left',
        description: 'Left content container.'
    },
    {
        name: 'p-toolbar-group-right',
        description: 'Right content container.'
    }
];

module.exports = {
    toolbar: {
        name: 'Toolbar',
        description: 'Toolbar is a grouping component for buttons and other content.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/toolbar',
        props: ToolbarProps,
        events: ToolbarEvents,
        styles: ToolbarStyles
    }
};
