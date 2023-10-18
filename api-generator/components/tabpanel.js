const TabPanelProps = [
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Orientation of tab headers.'
    },
    {
        name: 'headerTemplate',
        type: 'any',
        default: 'null',
        description: 'Header template of the tab to customize more.'
    },
    {
        name: 'leftIcon',
        type: 'string',
        default: 'null',
        description: 'Icons can be placed at left of a header.'
    },
    {
        name: 'rightIcon',
        type: 'string',
        default: 'null',
        description: 'Icons can be placed at right of a header.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the tab is disabled.'
    },
    {
        name: 'headerStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the tab header.'
    },
    {
        name: 'headerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the tab header.'
    },
    {
        name: 'contentStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the tab content.'
    },
    {
        name: 'contentClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the tab content.'
    }
];

const TabPanelEvents = [];

const TabPanelStyles = [];

module.exports = {
    tabpanel: {
        name: 'TabPanel',
        description: 'TabPanel is helper component for TabView.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/tabview',
        props: TabPanelProps,
        events: TabPanelEvents,
        styles: TabPanelStyles
    }
};
