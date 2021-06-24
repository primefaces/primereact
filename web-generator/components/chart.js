const ChartProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'type',
        type: 'string',
        default: 'null',
        description: 'Type of the chart.'
    },
    {
        name: 'data',
        type: 'any',
        default: 'null',
        description: 'Data to display.'
    },
    {
        name: 'options',
        type: 'any',
        default: 'null',
        description: 'Options to customize the chart.'
    },
    {
        name: 'width',
        type: 'string',
        default: 'null',
        description: 'Width of the chart in non-responsive mode.'
    },
    {
        name: 'height',
        type: 'string',
        default: 'null',
        description: 'Height of the chart in non-responsive mode.'
    },
    {
        name: 'style',
        type: 'string',
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

const ChartEvents = [

];

const ChartStyles = [

];

module.exports = {
    chart: {
        name: 'Chart',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/chart',
        props: ChartProps,
        events: ChartEvents,
        styles: ChartStyles
    }
};
