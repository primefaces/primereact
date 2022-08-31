const PickListProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'source',
        type: 'array',
        default: 'null',
        description: 'An array of objects for the source list.'
    },
    {
        name: 'target',
        type: 'array',
        default: 'null',
        description: 'An array of objects for the target list.'
    },
    {
        name: 'sourceHeader',
        type: 'any',
        default: 'null',
        description: 'Template for the source list caption.'
    },
    {
        name: 'targetHeader',
        type: 'any',
        default: 'null',
        description: 'Template for the target list caption.'
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
        name: 'sourceStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the source list element.'
    },
    {
        name: 'targetStyle',
        type: 'string',
        default: 'null',
        description: 'Inline style of the target list element.'
    },
    {
        name: 'sourceSelection',
        type: 'any',
        default: 'null',
        description: 'Selected item in the source list.'
    },
    {
        name: 'targetSelection',
        type: 'any',
        default: 'null',
        description: 'Selected items in the target list.'
    },
    {
        name: 'showSourceControls',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show buttons of source list.'
    },
    {
        name: 'showTargetControls',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show buttons of target list.'
    },
    {
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Template function that gets the options for both source and target items and returns the content for it.'
    },
    {
        name: 'sourceItemTemplate',
        type: 'function',
        default: 'null',
        description: 'Template function that gets the options for the source items and returns the content for it.'
    },
    {
        name: 'targetItemTemplate',
        type: 'function',
        default: 'null',
        description: 'Template function that gets the options for the target items and returns the content for it.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'filterBy',
        type: 'string',
        default: 'null',
        description: 'When specified displays an input field to filter the items on keyup and decides which field to search (Accepts multiple fields with a comma).'
    },
    {
        name: 'filterMatchMode',
        type: 'string',
        default: 'contains',
        description: 'Defines how the items are filtered, valid values are "contains" (default) "startsWith", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt" and "gte".'
    },
    {
        name: 'filterLocale',
        type: 'string',
        default: 'undefined',
        description: "Locale to use in filtering. The default locale is the host environment's current locale."
    },
    {
        name: 'sourceFilterValue',
        type: 'string',
        default: 'null',
        description: 'Filter value in the target list.'
    },
    {
        name: 'targetFilterValue',
        type: 'string',
        default: 'null',
        description: 'Filter value in the source list.'
    },
    {
        name: 'showSourceFilter',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show filter input for source list when filterBy is enabled.'
    },
    {
        name: 'showTargetFilter',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show filter input for target list when filterBy is enabled.'
    },
    {
        name: 'sourceFilterPlaceholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text on source filter input.'
    },
    {
        name: 'targetFilterPlaceholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text on target filter input.'
    },
    {
        name: 'sourceFilterTemplate',
        type: 'any',
        default: 'null',
        description: 'Template for the source filter content.'
    },
    {
        name: 'targetFilterTemplate',
        type: 'any',
        default: 'null',
        description: 'Template for the target filter content.'
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
        description: 'Name of the field that uniquely identifies the a record in the data.'
    }
];

const PickListEvents = [
    {
        name: 'onChange',
        description: 'Callback to invoke when items are moved from source to target.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.source',
                type: 'any',
                description: 'Source list'
            },
            {
                name: 'event.target',
                type: 'any',
                description: 'Target list'
            }
        ]
    },
    {
        name: 'onMoveToSource',
        description: 'Callback to invoke when items are moved from target to source.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'onMoveAllToSource',
        description: 'Callback to invoke when all items are moved from target to source.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'onMoveToTarget',
        description: 'Callback to invoke when items are moved from source to target.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'onMoveAllToTarget',
        description: 'Callback to invoke when all items are moved from source to target.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'onSourceSelectionChange',
        description: 'Callback to invoke when items are selected within source list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'items',
                type: 'any',
                description: 'Selected items array'
            }
        ]
    },
    {
        name: 'onTargetSelectionChange',
        description: 'Callback to invoke when items are selected within target list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'items',
                type: 'any',
                description: 'Selected items array'
            }
        ]
    },
    {
        name: 'onSourceFilterChange',
        description: 'Callback to invoke when items are filtered within source list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Filtered value'
            }
        ]
    },
    {
        name: 'onTargetFilterChange',
        description: 'Callback to invoke when items are filtered within target list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Filtered value'
            }
        ]
    }
];

const PickListStyles = [
    { name: 'p-picklist', description: 'Container element.' },
    {
        name: 'p-picklist-source-controls',
        description: 'Container of source list buttons.'
    },
    {
        name: 'p-picklist-target-controls',
        description: 'Container of target list buttons.'
    },
    { name: 'p-picklist-buttons', description: 'Container of buttons.' },
    {
        name: 'p-picklist-listwrapper',
        description: 'Parent of a list element.'
    },
    { name: 'p-picklist-list', description: 'List element.' },
    { name: 'p-picklist-item', description: 'An item in the list.' }
];

module.exports = {
    picklist: {
        name: 'PickList',
        description: 'PickList is used to reorder items between different lists.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/picklist',
        props: PickListProps,
        events: PickListEvents,
        styles: PickListStyles
    }
};
