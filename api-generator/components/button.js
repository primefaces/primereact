const ButtonProps = [
    {
        name: 'label',
        type: 'string',
        default: 'null',
        description: 'Text of the button.'
    },
    {
        name: 'icon',
        type: 'any',
        default: 'null',
        description: 'Name of the icon or JSX.Element for icon.'
    },
    {
        name: 'iconPos',
        type: 'string',
        default: 'left',
        description: 'Position of the icon, valid values are "left", "right", "top" and "bottom".'
    },
    {
        name: 'badge',
        type: 'string',
        default: 'null',
        description: 'Value of the badge.'
    },
    {
        name: 'badgeClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the badge.'
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
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'true',
        description: 'When present, it specifies that the element should be visible.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Display loading icon of the button'
    },
    {
        name: 'loadingIcon',
        type: 'any',
        default: 'null',
        description: 'Name of the loading icon or JSX.Element for loading icon.'
    }
];

const ButtonEvents = [];

const ButtonStyles = [
    { name: 'p-button', description: 'Button element' },
    { name: 'p-button-icon', description: 'Icon element' },
    { name: 'p-button-text', description: 'Label element of the button' }
];

module.exports = {
    button: {
        name: 'Button',
        description: 'Button is an extension to standard input element with icons and theming.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/button',
        props: ButtonProps,
        events: ButtonEvents,
        styles: ButtonStyles
    }
};
