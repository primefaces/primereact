const KnobProps = [
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
        description: 'Value of the component.'
    },
    {
        name: 'size',
        type: 'number',
        default: '100',
        description: 'Size of the component in pixels.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component value cannot be edited.'
    },
    {
        name: 'step',
        type: 'number',
        default: 'null',
        description: 'Step factor to increment/decrement the value.'
    },
    {
        name: 'min',
        type: 'number',
        default: '0',
        description: 'Mininum boundary value.'
    },
    {
        name: 'max',
        type: 'number',
        default: '100',
        description: 'Maximum boundary value.'
    },
    {
        name: 'valueColor',
        type: 'string',
        default: 'null',
        description: 'Background of the value.'
    },
    {
        name: 'rangeColor',
        type: 'string',
        default: 'null',
        description: 'Background color of the range.'
    },
    {
        name: 'textColor',
        type: 'string',
        default: 'null',
        description: 'Color of the value text.'
    },
    {
        name: 'strokeWidth',
        type: 'number',
        default: '14',
        description: 'Width of the knob stroke.'
    },
    {
        name: 'showValue',
        type: 'boolean',
        default: 'true',
        description: 'Whether the show the value inside the knob.'
    },
    {
        name: 'valueTemplate',
        type: 'string',
        default: '&#123;value&#125;',
        description: 'Template string of the value.'
    }
];

const KnobEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when the value changes.',
        arguments: [
            {
                name: 'value',
                type: 'number',
                description: 'New value'
            }
        ]
    }
];

const KnobStyles = [
    { name: 'p-knob', description: 'Container element.' },
    { name: 'p-knob-range', description: 'Range element.' },
    { name: 'p-knob-value', description: 'Value element.' },
    { name: 'p-knob-text', description: 'Text element.' }
];

module.exports = {
    knob: {
        name: 'Knob',
        description: 'Knob is a form component to define number inputs with a dial.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/knob',
        props: KnobProps,
        events: KnobEvents,
        styles: KnobStyles
    }
};
