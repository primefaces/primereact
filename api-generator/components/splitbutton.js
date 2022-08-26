const SplitButtonProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Identifier of the component.'
    },
    {
        name: 'label',
        type: 'string',
        default: 'null',
        description: 'Text of the button.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Name of the icon.'
    },
    {
        name: 'loadingIcon',
        type: 'any',
        default: 'null',
        description: 'Name of the loading icon or JSX.Element for loading icon.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Display loading icon of the button'
    },
    {
        name: 'model',
        type: 'object',
        default: 'null',
        description: 'MenuModel instance to define the overlay items.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'true',
        description: 'When present, it specifies that the element should be visible.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'ClassName of the component.'
    },
    {
        name: 'buttonClassName',
        type: 'string',
        default: 'null',
        description: 'ClassName of the button.'
    },
    {
        name: 'menuStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the overlay menu.'
    },
    {
        name: 'menuClassName',
        type: 'string',
        default: 'null',
        description: 'ClassName class of the overlay menu.'
    },
    {
        name: 'menuButtonClassName',
        type: 'string',
        default: 'null',
        description: 'ClassName class of menu dropdown button.'
    },
    {
        name: 'buttonProps',
        type: 'object',
        default: 'undefined',
        description: 'Props for the main button, any prop is passed implicity to the button element.'
    },
    {
        name: 'menuButtonProps',
        type: 'object',
        default: 'undefined',
        description: 'Props for the dropdown button, any prop is passed implicity to the dropdown button element.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
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
        name: 'buttonTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of the default button.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    },
    {
        name: 'dropdownIcon',
        type: 'string',
        default: 'pi pi-chevron-down',
        description: 'Icon class of the dropdown icon.'
    }
];

const SplitButtonEvents = [
    {
        name: 'onClick',
        description: 'Callback to invoke when main button is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when overlay panel becomes visible.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when overlay panel becomes hidden.',
        arguments: []
    }
];

const SplitButtonStyles = [
    { name: 'p-splitbutton', description: 'Container element.' },
    { name: 'p-splitbutton-button', description: 'Dropdown button.' },
    { name: 'p-menu', description: 'Overlay menu.' }
];

module.exports = {
    splitbutton: {
        name: 'SplitButton',
        description: 'SplitButton groups a set of commands in an overlay with a default command.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/splitbutton',
        props: SplitButtonProps,
        events: SplitButtonEvents,
        styles: SplitButtonStyles
    }
};
