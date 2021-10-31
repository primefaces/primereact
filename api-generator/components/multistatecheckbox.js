const MultiStateCheckboxProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the native checkbox element.'
    },
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value of the MultiStateCheckbox.'
    },
    {
        name: 'options',
        type: 'array',
        default: 'null',
        description: 'An array to display as the available options.'
    },
    {
        name: 'optionValue',
        type: 'string',
        default: 'null',
        description: 'Property name to use as the value of an option, defaults to the option itself when not defined.'
    },
    {
        name: 'iconTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of icon for the selected option.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the checkbox element .'
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
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element value cannot be altered.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element value cannot be altered.'
    },
    {
        name: 'empty',
        type: 'boolean',
        default: 'true',
        description: 'If false, the empty state is skipped in the chekbox.'
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
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'A property to uniquely match the value in options for better performance.'
    }
];

const MultiStateCheckboxEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke on value change',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Current Value'
            }
        ]
    }
];

const MultiStateCheckboxStyles = [
    { name: 'p-chkbox', description: 'Container element' },
    { name: 'p-multistatechkbox', description: 'Container element' },
    { name: 'p-chkbox-box', description: 'Container of icon.' },
    { name: 'p-chkbox-icon', description: 'Icon element.' }
];

module.exports = {
    multistatecheckbox: {
        name: 'MultiStateCheckbox',
        description: 'MultiStateCheckbox is used to select a state from given multiple states.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/multistatecheckbox',
        props: MultiStateCheckboxProps,
        events: MultiStateCheckboxEvents,
        styles: MultiStateCheckboxStyles
    }
};
