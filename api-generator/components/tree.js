const TreeProps = [
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
        description: 'An array of treenodes.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines the selection mode, valid values "single", "multiple", and "checkbox".'
    },
    {
        name: 'selectionKeys',
        type: 'any',
        default: 'null',
        description: 'A single or an array of keys to control the selection state.'
    },
    {
        name: 'contextMenuSelectionKey',
        type: 'any',
        default: 'null',
        description: 'A single key to control the selection with the context menu.'
    },
    {
        name: 'expandedKeys',
        type: 'array',
        default: 'null',
        description: 'An array of keys to represent the state of the tree expansion state in controlled mode.'
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
        name: 'contentStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the tree content.'
    },
    {
        name: 'contentClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the tree content.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'propagateSelectionUp',
        type: 'boolean',
        default: 'true',
        description: 'Whether checkbox selections propagate to ancestor nodes.'
    },
    {
        name: 'propagateSelectionDown',
        type: 'boolean',
        default: 'true',
        description: 'Whether checkbox selections propagate to descendant nodes.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display loading indicator.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'pi pi-spin',
        description: 'Icon to display when tree is loading.'
    },
    {
        name: 'dragdropScope',
        type: 'string',
        default: 'false',
        description: 'Unique key to enable dragdrop functionality.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'The template of header.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'The template of footer.'
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
        name: 'nodeTemplate',
        type: 'any',
        default: 'false',
        description: 'Template of node element.'
    },
    {
        name: 'togglerTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of toggler element.'
    },
    {
        name: 'filterTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of filter element.'
    },
    {
        name: 'showHeader',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the header or not.'
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
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    }
];

const TreeEvents = [
    {
        name: 'onSelect',
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
                description: 'Unselected node instance.'
            }
        ]
    },
    {
        name: 'onUnselect',
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
                description: 'Expanded node instance.'
            }
        ]
    },
    {
        name: 'onExpand',
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
        name: 'onCollapse',
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
        name: 'onSelectionChange',
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
        name: 'onContextMenuSelectionChange',
        description: 'Callback to invoke when selection changes with a context menu.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Selected node key.'
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
        name: 'onDragDrop',
        description: 'Callback to invoke when a node is toggled.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'New value after the dragdrop.'
            }
        ]
    },
    {
        name: 'onContextMenu',
        description: 'Callback to invoke when a node is selected with a context menu.',
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
        name: 'onFilterValueChange',
        description: 'Callback to invoke when filter value changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'the filtered value'
            }
        ]
    },
    {
        name: 'onNodeClick',
        description: 'Callback to invoke when the node is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.node',
                type: 'any',
                description: 'the current node'
            }
        ]
    },
    {
        name: 'onNodeDoubleClick',
        description: 'Callback to invoke when the node is double-clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.node',
                type: 'any',
                description: 'the current node'
            }
        ]
    }
];

const TreeStyles = [
    { name: 'p-tree', description: 'Main container element' },
    {
        name: 'p-tree-horizontal',
        description: 'Main container element in horizontal mode'
    },
    { name: 'p-tree-container', description: 'Container of nodes' },
    { name: 'p-treenode', description: 'A treenode element' },
    { name: 'p-treenode-content', description: 'Content of a treenode' },
    { name: 'p-treenode-toggler', description: 'Toggle element' },
    { name: 'p-treenode-toggler-icon', description: 'Toggle icon' },
    { name: 'p-treenode-icon', description: 'Icon of a treenode' },
    { name: 'p-treenode-label', description: 'Label of a treenode' },
    {
        name: 'p-treenode-children',
        description: 'Container element for node children'
    }
];

module.exports = {
    tree: {
        name: 'Tree',
        description: 'Tree is used to display hierarchical data.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/tree',
        props: TreeProps,
        events: TreeEvents,
        styles: TreeStyles
    }
};
