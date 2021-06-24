const PanelProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Custom header template of the panel.'
    },
    {
        name: 'headerTemplate',
        type: 'any',
        default: 'null',
        description: 'Header template of the panel to customize more.'
    },
    {
        name: 'toggleable',
        type: 'boolean',
        default: 'false',
        description: 'Defines if content of panel can be expanded and collapsed.'
    },
    {
        name: 'icons',
        type: 'any',
        default: 'null',
        description: 'Custom icons template for the header.'
    },
    {
        name: 'style',
        type: 'object',
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
        name: 'collapsed',
        type: 'boolean',
        default: 'false',
        description: 'Defines the initial state of panel content, supports one or two-way binding as well.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const PanelEvents = [

];

const PanelStyles = [
    { name: 'p-panel', description: 'Container element.' },
    { name: 'p-panel-titlebar', description: 'Header section.' },
    { name: 'p-panel-title', description: 'Title text of panel.' },
    { name: 'p-panel-titlebar-toggler', description: 'Toggle icon.' },
    { name: 'p-panel-content', description: 'Content of panel.' }
  ];

module.exports = {
    panel: {
        name: 'Panel',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/panel',
        props: PanelProps,
        events: PanelEvents,
        styles: PanelStyles
    }
};
