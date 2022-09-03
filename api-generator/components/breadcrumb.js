const BreadCrumbProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'model',
        type: 'MenuItem[]',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'home',
        type: 'MenuItem',
        default: 'null',
        description: 'MenuItem configuration for the home icon.'
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

const BreadCrumbEvents = [];

const BreadCrumbStyles = [
    { name: 'p-breadcrumb', description: 'Container element.' },
    { name: 'p-menuitem', description: 'Menuitem element.' },
    { name: 'p-menuitem-text', description: 'Label of a menuitem.' },
    { name: 'p-breadcrumb-chevron', description: 'Chevron element.' }
];

module.exports = {
    breadcrumb: {
        name: 'BreadCrumb',
        description: 'Breadcrumb provides contextual information about page hierarchy.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/breadcrumb',
        props: BreadCrumbProps,
        events: BreadCrumbEvents,
        styles: BreadCrumbStyles
    }
};
