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
        description: 'Function that gets the option and returns the content for it.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description: '                                        <td>'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    }
];

const PickListEvents = [

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
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/picklist',
        props: PickListProps,
        events: PickListEvents,
        styles: PickListStyles
    }
};
