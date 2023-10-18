const AccordionProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'activeIndex',
        type: 'number|number[]',
        default: 'null',
        description: 'Active index or indexes of the element. Use an array of numbers for multiple indexes. the "multiple" prop must be set to true in order to specify multiple indexes.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, multiple tabs can be activated at the same time.'
    },
    {
        name: 'expandIcon',
        type: 'string',
        default: 'pi pi-chevron-right',
        description: 'Icon of a collapsed tab.'
    },
    {
        name: 'collapseIcon',
        type: 'string',
        default: 'pi pi-chevron-down',
        description: 'Icon of an expanded tab.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const AccordionEvents = [
    {
        name: 'onTabOpen',
        description: 'Callback to invoke when a tab gets expanded.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'index',
                type: 'number',
                description: 'Index or indexes of the tab (number or array of numbers).'
            }
        ]
    },
    {
        name: 'onTabClose',
        description: 'Callback to invoke when an active tab is collapsed by clicking on the header.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'index',
                type: 'number',
                description: 'Index of the tab.'
            }
        ]
    },
    {
        name: 'onTabChange',
        description: 'Callback to invoke when state of the accordion changes.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'index',
                type: 'number',
                description: 'Index of the tab.'
            }
        ]
    }
];

const AccordionStyles = [
    {
        name: 'p-accordion',
        description: 'Container element.'
    },
    {
        name: 'p-accordion-header',
        description: 'Header of a tab.'
    },
    {
        name: 'p-accordion-content',
        description: 'Container of a tab.'
    }
];

module.exports = {
    accordion: {
        name: 'Accordion',
        description: 'Accordion groups a collection of contents in tabs.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/accordion',
        props: AccordionProps,
        events: AccordionEvents,
        styles: AccordionStyles
    }
};
