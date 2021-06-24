const StepsProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'model',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'activeIndex',
        type: 'number',
        default: '0',
        description: 'Index of the active item.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'true',
        description: 'Whether the items are clickable or not.'
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
    }
];

const StepsEvents = [

];

const StepsStyles = [
    { name: 'p-steps', description: 'Container element.' },
    { name: 'p-steps-item', description: 'Menuitem element.' },
    { name: 'p-steps-number', description: 'Number of menuitem.' },
    { name: 'p-steps-title', description: 'Label of menuitem.' }
];

module.exports = {
    steps: {
        name: 'Steps',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/steps',
        props: StepsProps,
        events: StepsEvents,
        styles: StepsStyles
    }
};
