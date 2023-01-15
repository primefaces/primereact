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
        description: 'The template of left section.'
    },
    {
        name: 'right',
        type: 'any',
        default: 'null',
        description: 'The template of right section'
    },
    {
        name: 'start',
        type: 'any',
        default: 'null',
        description: 'The template of start section.'
    },
    {
        name: 'center',
        type: 'any',
        default: 'null',
        description: 'The template of center section.'
    },
    {
        name: 'end',
        type: 'any',
        default: 'null',
        description: 'The template of end section.'
    }
];

const ToolbarEvents = [];

const ToolbarStyles = [
    { name: 'p-toolbar', description: 'Main container element.' },
    {
        name: 'p-toolbar-group-left',
        description: 'Left content container.'
    },
    {
        name: 'p-toolbar-group-right',
        description: 'Right content container.'
    },
    {
        name: 'p-toolbar-group-start',
        description: 'Start content container.'
    },
    {
        name: 'p-toolbar-group-center',
        description: 'Center content container.'
    },
    {
        name: 'p-toolbar-group-end',
        description: 'End content container.'
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
