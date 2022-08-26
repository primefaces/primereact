const InputTextareaProps = [
    {
        name: 'autoResize',
        type: 'boolean',
        default: 'false',
        description: 'When present, height of textarea changes as being typed.'
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

const InputTextareaEvents = [];

const InputTextareaStyles = [{ name: 'p-inputtextarea', description: 'Textarea element' }];

module.exports = {
    inputtextarea: {
        name: 'InputTextarea',
        description: 'Inputtextarea add styling and autoResize functionality to standard textarea element.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inputtextarea',
        props: InputTextareaProps,
        events: InputTextareaEvents,
        styles: InputTextareaStyles
    }
};
