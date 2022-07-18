const DropdownProps = [
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
        type: 'any',
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
        description: 'Name of the label field of an option when arbitrary objects are used as options instead of SelectItems.'
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
        name: 'valueTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of selected item.'
    },
    {
        name: 'itemTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of items.'
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
        name: 'scrollHeight',
        type: 'string',
        default: '200px',
        description: 'Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.'
    },
    {
        name: 'filter',
        type: 'boolean',
        default: 'false',
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
        name: 'resetFilterOnHide',
        type: 'boolean',
        default: 'false',
        description: 'Clears the filter value when hiding the dropdown.'
    },
    {
        name: 'editable',
        type: 'boolean',
        default: 'false',
        description: 'When present, custom value instead of predefined options can be entered using the editable input field.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Default text to display when no option is selected.'
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field must be filled out before submitting the form.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'appendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'autoFocus',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should automatically get focus on load.'
    },
    {
        name: 'filterInputAutoFocus',
        type: 'boolean',
        default: 'true',
        description: 'When the panel is opened, it specifies that the filter input should focus automatically.'
    },
    {
        name: 'showFilterClear',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, a clear icon is displayed to clear the filtered value.'
    },
    {
        name: 'panelClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the overlay panel element.'
    },
    {
        name: 'panelStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the overlay panel element.'
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
        name: 'showClear',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, a clear icon is displayed to clear the value.'
    },
    {
        name: 'maxLength',
        type: 'number',
        default: 'null',
        description: 'Maximum number of characters to be typed on an editable input.'
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
        name: 'ariaLabel',
        type: 'string',
        default: 'false',
        description: 'Used to define a string that labels the component.'
    },
    {
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Contains the element IDs of labels.'
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
        name: 'showOnFocus',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, overlay panel will be visible with input focus.'
    },
    {
        name: 'virtualScrollerOptions',
        type: 'object',
        default: 'null',
        description: 'Whether to use the virtualScroller feature. The properties of <Link to="virtualscroller">VirtualScroller</Link> component can be used like an object in it.'
    }
];

const DropdownEvents = [
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
        name: 'onMouseDown',
        description: 'Callback to invoke to when a mouse button is pressed',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onContextMenu',
        description: 'Callback to invoke on right-click',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onFocus',
        description: 'Callback to invoke when the element receives focus.',
        arguments: [
            {
                name: 'event',
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
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onFilter',
        description: 'Callback to invoke when the value is filtered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.filter',
                type: 'any',
                description: 'Value of the filter input'
            }
        ]
    }
];

const DropdownStyles = [
    { name: 'p-dropdown', description: 'Container element.' },
    {
        name: 'p-dropdown-label',
        description: 'Element to display label of selected option.'
    },
    { name: 'p-dropdown-trigger', description: 'Icon element.' },
    { name: 'p-dropdown-panel', description: 'Icon element.' },
    {
        name: 'p-dropdown-items-wrapper',
        description: 'Wrapper element of items list.'
    },
    { name: 'p-dropdown-items', description: 'List element of items.' },
    { name: 'p-dropdown-item', description: 'An item in the list.' },
    {
        name: 'p-dropdown-filter-container',
        description: 'Container of filter input.'
    },
    { name: 'p-dropdown-filter', description: 'Filter element.' },
    {
        name: 'p-dropdown-open',
        description: 'Container element when overlay is visible.'
    }
];

module.exports = {
    dropdown: {
        name: 'Dropdown',
        description: 'Dropdown is used to select an item from a collection of options.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/dropdown',
        props: DropdownProps,
        events: DropdownEvents,
        styles: DropdownStyles
    }
};
