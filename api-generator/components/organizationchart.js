const OrganizationChartProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of nested TreeNodes.'
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
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines the selection mode, valid values "single" and "multiple".'
    },
    {
        name: 'selection',
        type: 'any',
        default: 'null',
        description: 'A single treenode instance or an array to refer to the selections.'
    },
    {
        name: 'nodeTemplate',
        type: 'function',
        default: 'null',
        description: 'Template function that gets a node as a parameter and returns a content.'
    }
];

const OrganizationChartEvents = [
    {
        name: 'onNodeSelect',
        description: 'Callback to invoke when a node is selected.',
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
        name: 'onSelectionChange',
        description: 'Callback to invoke when node selection changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'New selection.'
            }
        ]
    }
];

const OrganizationChartStyles = [
    { name: 'p-organizationchart', description: 'Container element.' },
    {
        name: 'p-organizationchart-table',
        description: 'Table container of a node.'
    },
    {
        name: 'p-organizationchart-lines',
        description: 'Connector lines container.'
    },
    {
        name: 'p-organizationchart-nodes',
        description: 'Contained of node children.'
    },
    {
        name: 'p-organizationchart-line-right',
        description: 'Right side line of a node connector.'
    },
    {
        name: 'p-organizationchart-line-left',
        description: 'Left side line of a node connector.'
    },
    {
        name: 'p-organizationchart-line-top',
        description: 'Top side line of a node connector.'
    }
];

module.exports = {
    organizationchart: {
        name: 'OrganizationChart',
        description: 'OrganizationChart visualizes hierarchical organization data.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/organizationchart',
        props: OrganizationChartProps,
        events: OrganizationChartEvents,
        styles: OrganizationChartStyles
    }
};
