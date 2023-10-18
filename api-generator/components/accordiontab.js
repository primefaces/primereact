const AccordionTabProps = [
    {
        name: 'header',
        type: 'string',
        default: 'null',
        description: 'Orientation of tab headers.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the tab is disabled.'
    },
    {
        name: 'headerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the tab header.'
    },
    {
        name: 'headerStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the tab header.'
    },
    {
        name: 'headerTemplate',
        type: 'any',
        default: 'null',
        description: 'Template of the tab header.'
    },
    {
        name: 'contentClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the tab content.'
    },
    {
        name: 'contentStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the tab content.'
    }
];

const AccordionTabEvents = [];

const AccordionTabStyles = [];

module.exports = {
    accordiontab: {
        name: 'AccordionTab',
        description: 'Accordion element consists of one or more AccordionTab elements.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/accordion',
        props: AccordionTabProps,
        events: AccordionTabEvents,
        styles: AccordionTabStyles
    }
};
