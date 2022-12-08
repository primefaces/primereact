const ListBoxProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'object',
        default: 'null',
        description: 'Selected value to display.'
    },
    {
        name: 'options',
        type: 'array',
        default: 'null',
        description: 'An array of objects to display as the available options.'
    },
    {
        name: 'optionLabel',
        type: 'string',
        default: 'null',
        description: 'Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.'
    },
    {
        name: 'optionValue',
        type: 'string',
        default: 'null',
        description: 'Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.'
    },
    {
        name: 'optionDisabled',
        type: 'function | string',
        default: 'null',
        description: 'Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.'
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
        description: 'Property name or getter function that refers to the children options of option group.'
    },
    {
        name: 'itemTemplate',
        type: 'any',
        default: 'null',
        description: 'Custom template for the items.'
    },
    {
        name: 'filterTemplate',
        type: 'any',
        default: 'null',
        description: 'Custom template for the filter element.'
    },
    {
        name: 'emptyMessage',
        type: 'string',
        default: 'No results found',
        description: 'Text to display when there are no options available.'
    },
    {
        name: 'emptyFilterMessage',
        type: 'any',
        default: 'No results found',
        description: 'Template to display when filtering does not return any results.'
    },
    {
        name: 'optionGroupTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of an option group item.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'listStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of inner list element.'
    },
    {
        name: 'listClassName',
        type: 'string',
        default: 'null',
        description: 'Inline style class of inner list element.'
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
        description: 'When specified, disables the component.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'false',
        description: 'A property to uniquely match the value in options for better performance.'
    },
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'When specified, allows selecting multiple values.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'filter',
        type: 'boolean',
        default: 'false',
        description: 'When specified, displays a filter input at header.'
    },
    {
        name: 'filterBy',
        type: 'string',
        default: 'label',
        description: 'When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.'
    },
    {
        name: 'filterValue',
        type: 'string',
        default: 'null',
        description: 'When specified, filter displays with this value.'
    },
    {
        name: 'filterMatchMode',
        type: 'string',
        default: 'contains',
        description: 'Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".'
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
        name: 'filterInputProps',
        type: 'object',
        default: 'undefined',
        description: 'Props for the filter input, any prop is passed implicity to the filter input element.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
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
        name: 'virtualScrollerOptions',
        type: 'object',
        default: 'null',
        description: 'Whether to use the virtualScroller feature. The properties of <Link to="virtualscroller">VirtualScroller</Link> component can be used like an object in it.'
    }
];

const ListBoxEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when value of listbox changes.',
        arguments: [
            {
                name: 'event.originalValue',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'even.value',
                type: 'any',
                description: 'Single value or an array of values depending on the selection mode'
            }
        ]
    },
    {
        name: 'onFilterValueChange',
        description: 'Callback to invoke when filter value changes.',
        arguments: [
            {
                name: 'event.originalValue',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'even.value',
                type: 'any',
                description: 'the filtered value'
            }
        ]
    }
];

const ListBoxStyles = [
    { name: 'p-listbox', description: 'Main container element.' },
    { name: 'p-listbox-header', description: 'Header element.' },
    {
        name: 'p-listbox-list-wrapper',
        description: 'Container of list element.'
    },
    { name: 'p-listbox-list', description: 'List element.' },
    {
        name: 'p-listbox-item',
        description: 'An item in the list element.'
    }
];

module.exports = {
    listbox: {
        name: 'ListBox',
        description: 'ListBox is used to select one or more values from a list of items.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/listbox',
        props: ListBoxProps,
        events: ListBoxEvents,
        styles: ListBoxStyles
    }
};
