const TagProps = [
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value to display inside the tag.'
    },
    {
        name: 'severity',
        type: 'string',
        default: 'null',
        description: 'Severity type of the tag.'
    },
    {
        name: 'rounded',
        type: 'boolean',
        default: 'false',
        description: 'Whether the corners of the tag are rounded.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Icon of the tag to display next to the value.'
    }
];

const TagEvents = [];

const TagStyles = [
    { name: 'p-tag', description: 'Tag element' },
    { name: 'p-tag-rounded', description: 'Rounded element' },
    { name: 'p-tag-icon', description: 'Icon of the tag' },
    { name: 'p-tag-value', description: 'Value of the tag' }
];

module.exports = {
    tag: {
        name: 'Tag',
        description: 'Tag component is used to categorize content.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/tag',
        props: TagProps,
        events: TagEvents,
        styles: TagStyles
    }
};
