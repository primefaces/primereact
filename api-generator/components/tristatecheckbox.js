const TriStateCheckboxProps = [
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
        description: 'Value of the TriStateCheckbox.'
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
    }
];

const TriStateCheckboxEvents = [
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

const TriStateCheckboxStyles = [
    { name: 'p-chkbox', description: 'Container element' },
    { name: 'p-tristatechkbox', description: 'Container element' },
    { name: 'p-chkbox-box', description: 'Container of icon.' },
    { name: 'p-chkbox-icon', description: 'Icon element.' }
];

module.exports = {
    tristatecheckbox: {
        name: 'TriStateCheckbox',
        description: 'TriStateCheckbox is used to select either "true", "false" or "null" as the value.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/tristatecheckbox',
        props: TriStateCheckboxProps,
        events: TriStateCheckboxEvents,
        styles: TriStateCheckboxStyles
    }
};
