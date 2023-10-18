const PaginatorProps = [
    {
        name: 'totalRecords',
        type: 'number',
        default: '0',
        description: 'Number of total records.'
    },
    {
        name: 'rows',
        type: 'number',
        default: '0',
        description: 'Data count to display per page.'
    },
    {
        name: 'first',
        type: 'number',
        default: '0',
        description: 'Zero-relative number of the first row to be displayed.'
    },
    {
        name: 'pageLinkSize',
        type: 'number',
        default: '5',
        description: 'Number of page links to display.'
    },
    {
        name: 'rowsPerPageOptions',
        type: 'array',
        default: 'null',
        description: 'Array of integer values to display inside rows per page dropdown.'
    },
    {
        name: 'style',
        type: 'string',
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
        name: 'template',
        type: 'string|object',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        description: 'Template of the paginator.'
    },
    {
        name: 'leftContent',
        type: 'any',
        default: 'null',
        description: 'Content to inject into the left side of the paginator.'
    },
    {
        name: 'rightContent',
        type: 'any',
        default: 'null',
        description: 'Content to inject into the right side of the paginator.'
    },
    {
        name: 'currentPageReportTemplate',
        type: 'string',
        default: '(&#123;currentPage&#125; of &#123;totalPages&#125;)',
        description: 'Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}.'
    },
    {
        name: 'dropdownAppendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    }
];

const PaginatorEvents = [
    {
        name: 'onPageChange',
        description: 'Callback to invoke when page changes, the event object contains information about the new state.',
        arguments: [
            {
                name: 'event.page',
                type: 'number',
                description: 'New page number'
            },
            {
                name: 'event.first',
                type: 'number',
                description: 'Index of first record'
            },
            {
                name: 'event.rows',
                type: 'number',
                description: 'Number of rows to display in new page'
            },
            {
                name: 'event.pageCount',
                type: 'number',
                description: 'Total number of pages'
            }
        ]
    }
];

const PaginatorStyles = [
    { name: 'p-paginator', description: 'Container element.' },
    { name: 'p-paginator-first', description: 'First page element.' },
    { name: 'p-paginator-prev', description: 'Previous page element.' },
    {
        name: 'p-paginator-pages',
        description: 'Container of page links.'
    },
    { name: 'p-paginator-page', description: 'A page link.' },
    { name: 'p-paginator-next', description: 'Next pge element.' },
    { name: 'p-paginator-last', description: 'Last page element.' },
    {
        name: 'p-paginator-rpp-options',
        description: 'Rows per page dropdown.'
    }
];

module.exports = {
    paginator: {
        name: 'Paginator',
        description: 'Paginator is a generic widget to display content in paged format.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/paginator',
        props: PaginatorProps,
        events: PaginatorEvents,
        styles: PaginatorStyles
    }
};
