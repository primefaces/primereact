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
        type: 'object',
        default: 'null',
        description: 'Options to customize the chart.'
    },
    {
        name: 'plugins',
        type: 'array',
        default: 'null',
        description: 'Used to custom plugins of the chart.'
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
    },
    {
        name: 'ariaLabel',
        type: 'string',
        default: 'options.plugins.title.text',
        description: ' ARIA label for the chart canvas. Defaults to options.plugins.title.text if available.'
    }
];

const ChartEvents = [];

const ChartStyles = [];

module.exports = {
    chart: {
        name: 'Chart',
        description: 'Chart components are based on Charts.js, an open source HTML5 based charting library.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/chart',
        props: ChartProps,
        events: ChartEvents,
        styles: ChartStyles
    }
};
