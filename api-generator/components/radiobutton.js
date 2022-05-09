const RadioButtonProps = [
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
        description: 'Unique identifier of the inner native radiobutton.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the checkbox element .'
    },
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value of the radiobutton.'
    },
    {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        description: 'Specifies whether a radiobutton should be checked or not.'
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
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field must be filled out before submitting the form.'
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

const RadioButtonEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke on radio button click.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Value of the radiobutton'
            },
            {
                name: 'event.checked',
                type: 'any',
                description: 'Checked state as a boolean.'
            }
        ]
    }
];

const RadioButtonStyles = [
    { name: 'p-radiobutton', description: 'Container element' },
    { name: 'p-radiobutton-box', description: 'Container of icon.' },
    { name: 'p-radiobutton-icon', description: 'Icon element.' },
    { name: 'p-radiobutton-label', description: 'Label element.' }
];

module.exports = {
    radiobutton: {
        name: 'RadioButton',
        description: 'RadioButton is an extension to standard radio button element with skinning capabilities.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/radiobutton',
        props: RadioButtonProps,
        events: RadioButtonEvents,
        styles: RadioButtonStyles
    }
};
