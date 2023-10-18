const BadgeProps = [
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value to display inside the badge.'
    },
    {
        name: 'severity',
        type: 'string',
        default: 'null',
        description: 'Severity type of the badge.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Size of the badge, valid options are "large" and "xlarge".'
    }
];

const BadgeEvents = [];

const BadgeStyles = [
    { name: 'p-badge', description: 'Badge element' },
    {
        name: 'p-overlay-badge',
        description: 'Wrapper of a badge and its target.'
    },
    { name: 'p-badge-dot', description: 'Badge element with no value.' },
    {
        name: 'p-badge-success',
        description: 'Badge element with success severity.'
    },
    {
        name: 'p-badge-info',
        description: 'Badge element with info severity.'
    },
    {
        name: 'p-badge-warning',
        description: 'Badge element with warning severity.'
    },
    {
        name: 'p-badge-danger',
        description: 'Badge element with danger severity.'
    },
    { name: 'p-badge-lg', description: 'Large badge element' },
    { name: 'p-badge-xl', description: 'Extra large badge element' }
];

module.exports = {
    badge: {
        name: 'Badge',
        description: 'Badge is a small status indicator for another element.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/badge',
        props: BadgeProps,
        events: BadgeEvents,
        styles: BadgeStyles
    }
};
