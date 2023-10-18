const AutoCompleteProps = [
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
        description: 'Value of the component.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input element.'
    },
    {
        name: 'type',
        type: 'string',
        default: 'text',
        description: 'Type of the input element.'
    },
    {
        name: 'suggestions',
        type: 'array',
        default: 'null',
        description: 'An array of suggestions to display.'
    },
    {
        name: 'field',
        type: 'any',
        default: 'null',
        description: 'Field of a suggested object to resolve and display.'
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
        name: 'forceSelection',
        type: 'boolean',
        default: 'false',
        description: 'When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.'
    },
    {
        name: 'autoHighlight',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, highlights the first item in the list by default.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: '200px',
        description: 'Maximum height of the suggestions panel.'
    },
    {
        name: 'dropdown',
        type: 'boolean',
        default: 'false',
        description: 'Displays a button next to the input field when enabled.'
    },
    {
        name: 'dropdownMode',
        type: 'string',
        default: 'blank',
        description: 'Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.'
    },
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Specifies if multiple values can be selected.'
    },
    {
        name: 'selectionLimit',
        type: 'number',
        default: 'null',
        description: 'Number of maximum options that can be selected.'
    },
    {
        name: 'minLength',
        type: 'number',
        default: '1',
        description: 'Minimum number of characters to initiate a search.'
    },
    {
        name: 'delay',
        type: 'number',
        default: '300',
        description: 'Delay between keystrokes to wait before sending a query.'
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
        description: 'Style class of the component.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the input element.'
    },
    {
        name: 'inputStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'inputClassName',
        type: 'string',
        default: 'null',
        description: 'Inline style of the input field.'
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
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Hint text for the input field.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the input cannot be typed.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'maxLength',
        type: 'number',
        default: 'null',
        description: 'Maximum number of character allows in the input field.'
    },
    {
        name: 'size',
        type: 'number',
        default: 'null',
        description: 'Size of the input field.'
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
        name: 'ariaLabelledBy',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    },
    {
        name: 'itemTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of a list item.'
    },
    {
        name: 'selectedItemTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of a selected item.'
    },
    {
        name: 'optionGroupTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of an option group item.'
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
        name: 'dropdownAriaLabel',
        type: 'string',
        default: 'null',
        description: 'ARIA label for the dropdown button. Defaults to placeholder then Locale "choose" label.'
    },
    {
        name: 'virtualScrollerOptions',
        type: 'object',
        default: 'null',
        description: 'Whether to use the virtualScroller feature. The properties of <Link to="virtualscroller">VirtualScroller</Link> component can be used like an object in it.'
    }
];

const AutoCompleteEvents = [
    {
        name: 'completeMethod',
        description: 'Callback to invoke to search for suggestions.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.query',
                type: 'string',
                description: 'Value to search with'
            }
        ]
    },
    {
        name: 'onChange',
        description: 'Callback to invoke when autocomplete value changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Value of the component'
            }
        ]
    },
    {
        name: 'onFocus',
        description: 'Callback to invoke when autocomplete gets focus.',
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
        description: 'Callback to invoke when autocomplete loses focus.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onSelect',
        description: 'Callback to invoke when a suggestion is selected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Value of the component'
            }
        ]
    },
    {
        name: 'onUnselect',
        description: 'Callback to invoke when a suggestion is selected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Value of the component'
            }
        ]
    },
    {
        name: 'onDropdownClick',
        description: 'Callback to invoke to when dropdown button is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.query',
                type: 'string',
                description: 'Current value of the input field'
            }
        ]
    },
    {
        name: 'onClick',
        description: 'Callback to invoke on click.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onDblClick',
        description: 'Callback to invoke on double click.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onMouseDown',
        description: 'Callback to invoke to when a mouse button is pressed.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onKeyUp',
        description: 'Callback to invoke to when a key is released.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onKeyPress',
        description: 'Callback to invoke to when a key is pressed.',
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
        description: 'Callback to invoke on right-click.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onClear',
        description: 'Callback to invoke when input is cleared by the user.',
        arguments: [
            {
                name: 'event',
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

const AutoCompleteStyles = [
    { name: 'p-autocomplete', description: 'Container element' },
    {
        name: 'p-autocomplete-panel',
        description: 'Overlay panel of suggestions.'
    },
    {
        name: 'p-autocomplete-items',
        description: 'List container of suggestions.'
    },
    {
        name: 'p-autocomplete-item',
        description: 'List item of a suggestion.'
    },
    {
        name: 'p-autocomplete-token',
        description: 'Element of a selected item in multiple mode.'
    },
    {
        name: 'p-autocomplete-token-icon',
        description: 'Close icon element of a selected item in multiple mode.'
    },
    {
        name: 'p-autocomplete-token-label',
        description: 'Label of a selected item in multiple mode.'
    }
];

module.exports = {
    autocomplete: {
        name: 'AutoComplete',
        description: 'AutoComplete is an input component that provides real-time suggestions while being typed.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/autocomplete',
        props: AutoCompleteProps,
        events: AutoCompleteEvents,
        styles: AutoCompleteStyles
    }
};
