const CascadeSelectProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
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
        name: 'options',
        type: 'array',
        default: 'null',
        description: 'An array of selectitems to display as the available options.'
    },
    {
        name: 'optionLabel',
        type: 'string',
        default: 'null',
        description: 'Property name or getter function to use as the label of an option.'
    },
    {
        name: 'optionValue',
        type: 'string',
        default: 'null',
        description: 'Property name or getter function to use as the value of an option, defaults to the option itself when not defined.'
    },
    {
        name: 'optionGroupLabel',
        type: 'string',
        default: 'null',
        description: 'Property name or getter function to use as the label of an option group.'
    },
    {
        name: 'optionGroupChildren',
        type: 'string',
        default: 'null',
        description: 'Property name or getter function to retrieve the items of a group.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Default text to display when no option is selected.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'A property to uniquely identify an option.'
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
        description: 'Identifier of the underlying input element.'
    },
    {
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'itemTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of items.'
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

const CascadeSelectEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke on value change',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Value of the checkbox'
            }
        ]
    },
    {
        name: 'onGroupChange',
        description: 'Callback to invoke when a group changes',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            }
        ]
    },
    {
        name: 'onBeforeShow',
        description: 'Callback to invoke before the overlay is shown.',
        argument: []
    },
    {
        name: 'onBeforeHide',
        description: 'Callback to invoke before the overlay is hidden.',
        arguments: []
    },
    {
        name: 'onShow',
        description: 'Callback to invoke when the overlay is shown.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when the overlay is hidden.',
        arguments: []
    }
];

const CascadeSelectStyles = [
    { name: 'p-cascadeselect', description: 'Container element.' },
    {
        name: 'p-cascadeselect-label',
        description: 'Element to display label of selected option.'
    },
    { name: 'p-cascadeselect-trigger', description: 'Icon element.' },
    { name: 'p-cascadeselect-panel', description: 'Icon element.' },
    {
        name: 'p-cascadeselect-items-wrapper',
        description: 'Wrapper element of items list.'
    },
    {
        name: 'p-cascadeselect-items',
        description: 'List element of items.'
    },
    { name: 'p-cascadeselect-item', description: 'An item in the list.' }
];

module.exports = {
    cascadeselect: {
        name: 'CascadeSelect',
        description: 'CascadeSelect displays a nested structure of options.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/cascadeselect',
        props: CascadeSelectProps,
        events: CascadeSelectEvents,
        styles: CascadeSelectStyles
    }
};
