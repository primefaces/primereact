const SelectButtonProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'options',
        type: 'array',
        default: 'null',
        description: 'An array of objects to display as the available options.'
    },
    {
        name: 'optionLabel',
        type: 'string',
        default: 'null',
        description: 'Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.'
    },
    {
        name: 'optionValue',
        type: 'string',
        default: 'null',
        description: 'Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.'
    },
    {
        name: 'optionDisabled',
        type: 'function | string',
        default: 'null',
        description: 'Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'When specified, allows selecting multiple values.'
    },
    {
        name: 'unselectable',
        type: 'boolean',
        default: 'true',
        description: 'Whether selection can be cleared.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
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
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'A property to uniquely match the value in options for better performance.'
    },
    {
        name: 'tooltip',
        type: 'any',
        default: 'null',
        description: 'Content of the tooltip.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: 'Configuration of the tooltip, refer to the tooltip documentation for more information.'
    },
    {
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets the option and returns the content.'
    }
];

const SelectButtonEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Single value or an array of values that are selected.'
            }
        ]
    }
];

const SelectButtonStyles = [];

module.exports = {
    selectbutton: {
        name: 'SelectButton',
        description: 'SelectButton is used to choose single or multiple items from a list using buttons.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/selectbutton',
        props: SelectButtonProps,
        events: SelectButtonEvents,
        styles: SelectButtonStyles
    }
};
