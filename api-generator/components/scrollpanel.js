const ScrollPanelProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
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

const ScrollPanelEvents = [];

const ScrollPanelStyles = [
    { name: 'p-scrollpanel', description: 'Container element.' },
    {
        name: 'p-scrollpanel-wrapper',
        description: 'Wrapper of content section.'
    },
    { name: 'p-scrollpanel-content', description: 'Content section.' },
    { name: 'p-scrollpanel-bar', description: 'Scrollbar handle.' },
    {
        name: 'p-scrollpanel-bar-x',
        description: 'Scrollbar handle of a horizontal bar.'
    },
    {
        name: 'p-scrollpanel-bar-y',
        description: 'Scrollbar handle of a vertical bar'
    }
];

module.exports = {
    scrollpanel: {
        name: 'ScrollPanel',
        description: 'ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/scrollpanel',
        props: ScrollPanelProps,
        events: ScrollPanelEvents,
        styles: ScrollPanelStyles
    }
};
