const DataViewLayoutOptionsProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'list',
        description: 'Layout of the items, valid values are "list" and "grid".'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    }
];

const DataViewLayoutOptionsEvents = [

];

const DataViewLayoutOptionsStyles = [

];

module.exports = {
    dataviewlayoutoptions: {
        name: 'DataViewLayoutOptions',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/dataview',
        props: DataViewLayoutOptionsProps,
        events: DataViewLayoutOptionsEvents,
        styles: DataViewLayoutOptionsStyles
    }
};
