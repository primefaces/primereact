const ColorPickerProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the component.'
    },
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'style',
        type: 'CSSProperties',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the component.'
    },
    {
        name: 'defaultColor',
        type: 'string',
        default: 'ff0000',
        description: 'Default color to display when value is null.'
    },
    {
        name: 'inline',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display as an overlay or not.'
    },
    {
        name: 'format',
        type: 'string',
        default: 'hex',
        description: 'Format to use in value binding, supported formats are "hex", "rgb" and "hsb".'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the focus input to match a label defined for the dropdown.'
    },
    {
        name: 'tooltip',
        type: 'any',
        default: 'null',
        description: 'Content of the tooltip.'
    },
    {
        name: 'panelStyle',
        type: 'CSSProperties',
        default: 'null',
        description: 'Inline style of the overlay panel.'
    },
    {
        name: 'panelClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the overlay panel.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: 'Configuration of the tooltip, refer to the tooltip documentation for more information.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const ColorPickerEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when confirm dialog is hidden.',
        arguments: [
            {
                name: 'value',
                type: 'string',
                description: 'Selected color value whose type depends on the format.'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when overlay panel becomes visible.'
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when overlay panel becomes hidden.'
    }
];

const ColorPickerStyles = [
    { name: 'p-colorpicker', description: 'Container element.' },
    {
        name: 'p-colorpicker-overlay',
        description: 'Container element in overlay mode.'
    },
    {
        name: 'p-colorpicker-preview ',
        description: 'Preview input in overlay mode.'
    },
    {
        name: 'p-colorpicker-panel',
        description: 'Panel element of the colorpicker.'
    },
    {
        name: 'p-colorpicker-content',
        description: 'Wrapper that contains color and hue sections.'
    },
    {
        name: 'p-colorpicker-color-selector',
        description: 'Color selector container.'
    },
    { name: 'p-colorpicker-color', description: 'Color element.' },
    {
        name: 'p-colorpicker-color-handle',
        description: 'Handle of the color element.'
    },
    { name: 'p-colorpicker-hue', description: 'Hue slider.' },
    {
        name: 'p-colorpicker-hue-handle',
        description: 'Handle of the hue slider.'
    }
];

module.exports = {
    colorpicker: {
        name: 'ColorPicker',
        description: 'ColorPicker is an input component to select a color.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/colorpicker',
        props: ColorPickerProps,
        events: ColorPickerEvents,
        styles: ColorPickerStyles
    }
};
