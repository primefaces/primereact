const ChipsProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the component.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input field.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Advisory information to display on input.'
    },
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'max',
        type: 'number',
        default: 'null',
        description: 'Maximum number of entries allowed.'
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
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    },
    {
        name: 'allowDuplicate',
        type: 'boolean',
        default: 'true',
        description: 'Whether to allow duplicate values or not.'
    },
    {
        name: 'separator',
        type: 'string',
        default: 'null',
        description: 'Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","'
    },
    {
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Template function to return the content of a chip.'
    },
    {
        name: 'keyfilter',
        type: 'string/regex',
        default: 'null',
        description: 'Format definition of the keys to block.'
    },
    {
        name: 'addOnBlur',
        type: 'boolean',
        default: 'null',
        description: 'Whether to add an item when the input loses focus.'
    }
];

const ChipsEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when a chip is added or removed.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onAdd',
        description: 'Callback to invoke when a chip is added.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'any',
                description: 'Added item value'
            }
        ]
    },
    {
        name: 'onRemove',
        description: 'Callback to invoke when a chip is removed.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'any',
                description: 'Removed item value'
            }
        ]
    },
    {
        name: 'onFocus',
        description: 'Callback to invoke when the component gets focus.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onBlur',
        description: 'Callback to invoke when the component loses focus',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onKeyDown',
        description: 'Callback to invoke when the key pressed.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const ChipsStyles = [
    { name: 'p-chips', description: 'Container element' },
    { name: 'p-chips-token', description: 'Chip element container.' },
    { name: 'p-chips-token-icon', description: 'Icon of a chip.' },
    { name: 'p-chips-token-label', description: 'label of a chip.' },
    {
        name: 'p-chips-input-token',
        description: 'Container of input element.'
    }
];

module.exports = {
    chips: {
        name: 'Chips',
        description: 'Chips is used to enter multiple values on an input field.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/chips',
        props: ChipsProps,
        events: ChipsEvents,
        styles: ChipsStyles
    }
};
