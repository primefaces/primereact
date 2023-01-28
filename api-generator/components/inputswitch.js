const InputSwitchProps = [
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
        description: 'Inline style of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the input element.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input element.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        description: 'Specifies whether a inputswitch should be checked or not.'
    },
    {
        name: 'trueValue',
        type: 'any',
        default: 'true',
        description: 'Value in checked state.'
    },
    {
        name: 'falseValue',
        type: 'any',
        default: 'false',
        description: 'Value in unchecked state.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
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
    }
];

const InputSwitchEvents = [
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
                type: 'boolean',
                description: 'Checked state as a boolean.'
            }
        ]
    },
    {
        name: 'onFocus',
        description: 'Callback to invoke when the element receives focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onBlur',
        description: 'Callback to invoke when the element loses focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const InputSwitchStyles = [
    { name: 'p-inputswitch', description: 'Container element.' },
    {
        name: 'p-inputswitch-checked',
        description: 'Container element in active state.'
    },
    {
        name: 'p-inputswitch-slider',
        description: 'Slider element behind the handle.'
    }
];

module.exports = {
    inputswitch: {
        name: 'InputSwitch',
        description: 'InputSwitch is used to select a boolean value.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inputswitch',
        props: InputSwitchProps,
        events: InputSwitchEvents,
        styles: InputSwitchStyles
    }
};
