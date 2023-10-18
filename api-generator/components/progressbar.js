const ProgressBarProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'number',
        default: 'null',
        description: 'Current value of the progress.'
    },
    {
        name: 'showValue',
        type: 'boolean',
        default: 'true',
        description: 'Show or hide progress bar value.'
    },
    {
        name: 'unit',
        type: 'string',
        default: '%',
        description: 'Unit sign appended to the value.'
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
        name: 'mode',
        type: 'string',
        default: 'determinate',
        description: 'Defines the mode of the progress, valid values are "determinate" and "indeterminate".'
    },
    {
        name: 'color',
        type: 'string',
        default: 'null',
        description: 'Color for the background of the progress.'
    },
    {
        name: 'displayValueTemplate',
        type: 'Element',
        default: 'null',
        description: 'Custom display value template'
    }
];

const ProgressBarEvents = [
    {
        name: 'displayValueTemplate',
        description: 'TODO',
        arguments: [
            {
                name: 'event.value',
                type: 'any',
                description: 'TODO'
            }
        ]
    }
];

const ProgressBarStyles = [
    { name: 'p-progressbar', description: 'Container element.' },
    {
        name: 'p-progressbar-determinate',
        description: 'Container element of a determinate progressbar.'
    },
    {
        name: 'p-progressbar-indeterminate',
        description: 'Container element of an indeterminate progressbar.'
    },
    {
        name: 'p-progressbar-value',
        description: 'Element whose width changes according to value.'
    },
    {
        name: 'p-progressbar-label',
        description: 'Label element that displays the current value.'
    }
];

module.exports = {
    progressbar: {
        name: 'ProgressBar',
        description: 'ProgressBar is a process status indicator.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/progressbar',
        props: ProgressBarProps,
        events: ProgressBarEvents,
        styles: ProgressBarStyles
    }
};
