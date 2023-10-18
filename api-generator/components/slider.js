const SliderProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'number',
        default: '0',
        description: 'Value of the component.'
    },
    {
        name: 'animate',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, displays an animation on click of the slider bar.'
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
        name: 'orientation',
        type: 'string',
        default: 'horizontal',
        description: 'Orientation of the slider, valid values are horizontal and vertical.'
    },
    {
        name: 'step',
        type: 'number',
        default: '1',
        description: 'Step factor to increment/decrement the value.'
    },
    {
        name: 'range',
        type: 'boolean',
        default: 'false',
        description: 'When speficed, allows two boundary values to be picked.'
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
        description: 'Style class of the element.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    }
];

const SliderEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke on value change via slide.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'any',
                description: 'Slide event'
            }
        ]
    },
    {
        name: 'onSlideEnd',
        description: 'Callback to invoke when slide ends.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'any',
                description: 'Slide event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'New value.'
            }
        ]
    }
];

const SliderStyles = [
    { name: 'p-slider', description: 'Container element' },
    { name: 'p-slider-handle', description: 'Handle element.' }
];

module.exports = {
    slider: {
        name: 'Slider',
        description: 'Slider is a component to provide input using dragging of a handle.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/slider',
        props: SliderProps,
        events: SliderEvents,
        styles: SliderStyles
    }
};
