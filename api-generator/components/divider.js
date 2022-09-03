const DividerProps = [
    {
        name: 'align',
        type: 'string',
        default: 'null',
        description: 'Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center", "bottom" for vertical.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'horizontal',
        description: 'Specifies the orientation, valid values are "horizontal" and "vertical".'
    },
    {
        name: 'type',
        type: 'String',
        default: 'solid',
        description: 'Border style type, default is "solid" and other options are "dashed" and "dotted".'
    }
];

const DividerEvents = [];

const DividerStyles = [
    { name: 'p-divider', description: 'Container element.' },
    {
        name: 'p-divider-horizontal',
        description: 'Container element in horizontal layout.'
    },
    {
        name: 'p-divider-vertical',
        description: 'Container element in vertical layout.'
    },
    {
        name: 'p-divider-solid',
        description: 'Container element with solid border.'
    },
    {
        name: 'p-divider-dashed',
        description: 'Container element with dashed border.'
    },
    {
        name: 'p-divider-dotted',
        description: 'Container element with dotted border.'
    },
    {
        name: 'p-divider-left',
        description: 'Container element with content aligned to left.'
    },
    {
        name: 'p-divider-right',
        description: 'Container element with content aligned to right.'
    },
    {
        name: 'p-divider-center',
        description: 'Container element with content aligned to center.'
    },
    {
        name: 'p-divider-bottom',
        description: 'Container element with content aligned to bottom.'
    },
    {
        name: 'p-divider-top',
        description: 'Container element with content aligned to top.'
    }
];

module.exports = {
    divider: {
        name: 'Divider',
        description: 'Divider is used to separate contents.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/divider',
        props: DividerProps,
        events: DividerEvents,
        styles: DividerStyles
    }
};
