const MultiSelectProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input element.'
    },
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'Value of the component.'
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
        description: 'Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.'
    },
    {
        name: 'optionValue',
        type: 'string',
        default: 'null',
        description: 'Property name or getter function to use as the value of an option, defaults to the option itself when not defined.'
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
        name: 'inline',
        type: 'boolean',
        default: 'false',
        description: 'Render the items panel inline.'
    },
    {
        name: 'flex',
        type: 'boolean',
        default: 'false',
        description: 'Use flex layout for the items panel.'
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
        name: 'itemClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the items.'
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
        name: 'scrollHeight',
        type: 'string',
        default: '200px',
        description: 'Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Label to display when there are no selections.'
    },
    {
        name: 'fixedPlaceholder',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display selected items in the label section or always display the placeholder as the default label.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'showClear',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, a clear icon is displayed to clear the value.'
    },
    {
        name: 'filter',
        type: 'boolean',
        default: 'true',
        description: 'When specified, displays an input field to filter the items on keyup.'
    },
    {
        name: 'filterBy',
        type: 'string',
        default: 'label',
        description: 'When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.'
    },
    {
        name: 'filterMatchMode',
        type: 'string',
        default: 'contains',
        description: 'Defines how the items are filtered, valid values are "contains", (default) "startsWith", "endsWith", "equals" and "notEquals".'
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
        name: 'emptyFilterMessage',
        type: 'any',
        default: 'No records found',
        description: 'Template to display when filtering does not return any results.'
    },
    {
        name: 'resetFilterOnHide',
        type: 'boolean',
        default: 'false',
        description: 'Clears the filter value when hiding the dropdown.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'A property to uniquely match the value in options for better performance.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the focusable input.'
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
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets the option and returns the content for it.'
    },
    {
        name: 'filterTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of filter element.'
    },
    {
        name: 'optionGroupTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of an option group item.'
    },
    {
        name: 'selectedItemTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets an item in the value and returns the content for it.'
    },
    {
        name: 'panelHeaderTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of the panel header.'
    },
    {
        name: 'panelFooterTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of the panel footer.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'maxSelectedLabels',
        type: 'number',
        default: '3',
        description: 'Decides how many selected item labels to show at most.'
    },
    {
        name: 'selectionLimit',
        type: 'number',
        default: 'null',
        description: 'Number of maximum options that can be selected.'
    },
    {
        name: 'selectedItemsLabel',
        type: 'string',
        default: '&#123;0&#125; items selected',
        description: 'Label to display after exceeding max selected labels.'
    },
    {
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    },
    {
        name: 'display',
        type: 'string',
        default: 'comma',
        description: "Used mode to display the selected item. Valid values are 'comma' and 'chip'."
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
        name: 'virtualScrollerOptions',
        type: 'object',
        default: 'null',
        description: 'Whether to use the virtualScroller feature. The properties of <Link to="virtualscroller">VirtualScroller</Link> component can be used like an object in it.'
    },
    {
        name: 'showSelectAll',
        type: 'boolean',
        default: 'true',
        description: "Whether to show the select all checkbox inside the panel's header."
    },
    {
        name: 'selectAll',
        type: 'boolean',
        default: 'false',
        description: 'Whether all data is selected.'
    },
    {
        name: 'useOptionAsValue',
        type: 'boolean',
        default: 'false',
        description: 'Defaults to the option itself as the value of an option. Overrides the optionValue prop.'
    },
    {
        name: 'overlayVisible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the overlay panel.'
    }
];

const MultiSelectEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when value changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Current selected values'
            }
        ]
    },
    {
        name: 'onFocus',
        description: 'Callback to invoke when the element receives focus.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onBlur',
        description: 'Callback to invoke when the element loses focus.',
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
        description: 'Callback to invoke when overlay panel becomes visible.'
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when overlay panel becomes hidden.'
    },
    {
        name: 'onFilter',
        description: 'Callback to invoke on filtering.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.filter',
                type: 'string',
                description: 'Filter value.'
            }
        ]
    },
    {
        name: 'onSelectAll',
        description: 'Callback to invoke when all data is selected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.filter',
                type: 'string',
                description: 'Filter value.'
            }
        ]
    }
];

const MultiSelectStyles = [
    { name: 'p-multiselect', description: 'Container element.' },
    {
        name: 'p-multiselect-label-container',
        description: 'Container of the label to display selected items.'
    },
    {
        name: 'p-multiselect-label-container',
        description: 'Label to display selected items.'
    },
    { name: 'p-multiselect-trigger', description: 'Dropdown button.' },
    {
        name: 'p-multiselect-filter-container',
        description: 'Container of filter input.'
    },
    {
        name: 'p-multiselect-panel',
        description: 'Overlay panel for items.'
    },
    {
        name: 'p-multiselect-items',
        description: 'List container of items.'
    },
    { name: 'p-multiselect-item', description: 'An item in the list.' },
    {
        name: 'p-multiselect-token',
        description: "A selected item element container on display='chip' mode."
    },
    {
        name: 'p-chips-token-icon',
        description: "Icon of a selected item element on display='chip' mode."
    },
    {
        name: 'p-chips-token-label',
        description: "Label of a selected item element on display='chip' mode."
    }
];

module.exports = {
    multiselect: {
        name: 'MultiSelect',
        description: 'MultiSelect is used to select multiple items from a collection.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/multiselect',
        props: MultiSelectProps,
        events: MultiSelectEvents,
        styles: MultiSelectStyles
    }
};
