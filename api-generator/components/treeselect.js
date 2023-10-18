const TreeSelectProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'A single or an object of keys to control the selection state.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input element.'
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
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'options',
        type: 'array',
        default: 'null',
        description: 'An array of options to display.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: '400px',
        description: 'Maximum height of the options panel.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Hint text for the input field.'
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
        description: 'Identifier of the input element.'
    },
    {
        name: 'ariaLabel',
        type: 'string',
        default: 'null',
        description: 'Used to define a string that labels the component.'
    },
    {
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Contains the element IDs of labels.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines the selection mode, valid values "single", "multiple", and "checkbox".'
    },
    {
        name: 'expandedKeys',
        type: 'array',
        default: 'null',
        description: 'An array of keys to represent the state of the tree expansion state in controlled mode.'
    },
    {
        name: 'panelClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the overlay panel element.'
    },
    {
        name: 'panelStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the overlay panel element.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'emptyMessage',
        type: 'string',
        default: 'null',
        description: 'Text to display when there is no data.'
    },
    {
        name: 'display',
        type: 'string',
        default: 'comma',
        description: 'Defines how the selected items are displayed, valid values are "comma" and "chip".'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'valueTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of selected values.'
    },
    {
        name: 'panelHeaderTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of header.'
    },
    {
        name: 'panelFooterTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of footer.'
    },
    {
        name: 'filterTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of filter element'
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
    },
    {
        name: 'filter',
        type: 'boolean',
        default: 'false',
        description: 'When specified, displays an input field to filter the items.'
    },
    {
        name: 'filterValue',
        type: 'string',
        default: 'null',
        description: 'When filtering is enabled, the value of input field.'
    },
    {
        name: 'filterBy',
        type: 'string',
        default: 'label',
        description: 'When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.'
    },
    {
        name: 'filterMode',
        type: 'string',
        default: 'lenient',
        description: 'Mode for filtering valid values are "lenient" and "strict". Default is lenient.'
    },
    {
        name: 'filterPlaceholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text to show when filter input is empty.'
    },
    {
        name: 'filterLocale',
        type: 'string',
        default: 'undefined',
        description: "Locale to use in filtering. The default locale is the host environment's current locale."
    },
    {
        name: 'filterInputAutoFocus',
        type: 'boolean',
        default: 'true',
        description: 'When the panel is opened, it specifies that the filter input should focus automatically.'
    },
    {
        name: 'resetFilterOnHide',
        type: 'boolean',
        default: 'false',
        description: 'Clears the filter value when hiding the dropdown.'
    }
];

const TreeSelectEvents = [
    {
        name: 'onShow',
        description: 'Callback to invoke when the overlay is shown.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when the overlay is hidden.',
        arguments: []
    },
    {
        name: 'onChange',
        description: 'Callback to invoke when selection changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Selected node key(s).'
            }
        ]
    },
    {
        name: 'onToggle',
        description: 'Callback to invoke when a node is toggled.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.node',
                type: 'any',
                description: 'Toggled node instance.'
            }
        ]
    },
    {
        name: 'onNodeSelect',
        description: 'Callback to invoke when selection changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.node',
                type: 'any',
                description: 'Selected node instance.'
            }
        ]
    },
    {
        name: 'onNodeUnselect',
        description: 'Callback to invoke when a node is unselected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.node',
                type: 'any',
                description: 'Unselected node instance.'
            }
        ]
    },
    {
        name: 'onNodeExpand',
        description: 'Callback to invoke when a node is expanded.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.node',
                type: 'any',
                description: 'Expanded node instance.'
            }
        ]
    },
    {
        name: 'onNodeCollapse',
        description: 'Callback to invoke when a node is collapsed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.node',
                type: 'any',
                description: 'Collapsed node instance.'
            }
        ]
    },
    {
        name: 'onFilterValueChange',
        description: 'Callback to invoke when a node is collapsed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'string',
                description: 'Callback to invoke when filter value changes.'
            }
        ]
    }
];

const TreeSelectStyles = [
    { name: 'p-treeselect', description: 'Container element.' },
    {
        name: 'p-treeselect-label-container',
        description: 'Container of the label to display selected items.'
    },
    {
        name: 'p-treeselect-label',
        description: 'Label to display selected items.'
    },
    { name: 'p-treeselect-trigger', description: 'Dropdown button.' },
    {
        name: 'p-treeselect-panel',
        description: 'Overlay panel for items.'
    },
    {
        name: 'p-treeselect-items-wrapper',
        description: 'List container of items.'
    }
];

module.exports = {
    treeselect: {
        name: 'TreeSelect',
        description: 'TreeSelect is a form component to choose from hierarchical data.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/treeselect',
        props: TreeSelectProps,
        events: TreeSelectEvents,
        styles: TreeSelectStyles
    }
};
