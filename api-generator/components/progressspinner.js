const ProgressSpinnerProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
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
        name: 'strokeWidth',
        type: 'string',
        default: '2',
        description: 'Width of the circle stroke.'
    },
    {
        name: 'fill',
        type: 'string',
        default: 'null',
        description: 'Color for the background of the circle.'
    },
    {
        name: 'animationDuration',
        type: 'string',
        default: '2s',
        description: 'Duration of the rotate animation.'
    }
];

const ProgressSpinnerEvents = [];

const ProgressSpinnerStyles = [
    { name: 'p-progress-spinner', description: 'Container element.' },
    { name: 'p-progress-circle', description: 'SVG element.' },
    { name: 'p-progress-path', description: 'Circle element.' }
];

module.exports = {
    progressspinner: {
        name: 'ProgressSpinner',
        description: 'ProgressSpinner is a process status indicator.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/progressspinner',
        props: ProgressSpinnerProps,
        events: ProgressSpinnerEvents,
        styles: ProgressSpinnerStyles
    }
};
