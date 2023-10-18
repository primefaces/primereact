const SplitterPanelProps = [
    {
        name: 'size',
        type: 'number',
        default: 'null',
        description: 'Size of the element relative to 100%.'
    },
    {
        name: 'minSize',
        type: 'number',
        default: 'null',
        description: 'Minimum size of the element relative to 100%.'
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
        description: 'ClassName of the component.'
    }
];

const SplitterPanelEvents = [];

const SplitterPanelStyles = [];

module.exports = {
    splitterpanel: {
        name: 'SplitterPanel',
        description: 'SplitterPanel is helper component for Splitter.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/splitter',
        props: SplitterPanelProps,
        events: SplitterPanelEvents,
        styles: SplitterPanelStyles
    }
};
