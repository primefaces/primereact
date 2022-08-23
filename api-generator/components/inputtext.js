const InputTextProps = [
    {
        name: 'keyfilter',
        type: 'string/regex',
        default: 'null',
        description: 'Format definition of the keys to block.'
    },
    {
        name: 'validateOnly',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, instead of blocking keys, input is validated internally to test against the regular expression.'
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

const InputTextEvents = [];

const InputTextStyles = [{ name: 'p-inputtext', description: 'Input element' }];

module.exports = {
    inputtext: {
        name: 'InputText',
        description: 'InputText is an extension to standard input element with theming and keyfiltering.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/inputtext',
        props: InputTextProps,
        events: InputTextEvents,
        styles: InputTextStyles
    }
};
