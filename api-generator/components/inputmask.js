const InputMaskProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'string',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'type',
        type: 'string',
        default: 'text',
        description: 'HTML5 input type'
    },
    {
        name: 'mask',
        type: 'string',
        default: 'null',
        description: 'Mask pattern.'
    },
    {
        name: 'slotChar',
        type: 'string',
        default: '-',
        description: 'Placeholder character in mask, default is underscore.'
    },
    {
        name: 'autoClear',
        type: 'boolean',
        default: 'true',
        description: 'Clears the incomplete value on blur.'
    },
    {
        name: 'unmask',
        type: 'boolean',
        default: 'false',
        description: 'Defines if model sets the raw unmasked value to bound value or the formatted mask value.'
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
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Advisory information to display on input.'
    },
    {
        name: 'size',
        type: 'number',
        default: 'null',
        description: 'Size of the input field.'
    },
    {
        name: 'maxLength',
        type: 'number',
        default: 'null',
        description: 'Maximum number of character allows in the input field.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Specifies tab order of the element.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element value cannot be altered.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field is read-only.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input field.'
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element must be filled out before submitting the form.'
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

const InputMaskEvents = [
    {
        name: 'onFocus',
        description: 'Callback to invoke when input receives focus.',
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
        description: 'Callback to invoke when input loses focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onComplete',
        description: 'Callback to invoke on when user completes the mask pattern.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'string',
                description: 'New value of the component'
            }
        ]
    },
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
                type: 'string',
                description: 'New value of the component'
            }
        ]
    }
];

const InputMaskStyles = [];

module.exports = {
    inputmask: {
        name: 'InputMask',
        description: 'InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inputmask',
        props: InputMaskProps,
        events: InputMaskEvents,
        styles: InputMaskStyles
    }
};
