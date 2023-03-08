const DataViewProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'header',
        type: 'JSX or string',
        default: 'null',
        description: 'Header content of the component.'
    },
    {
        name: 'footer',
        type: 'JSX or string',
        default: 'null',
        description: 'Footer content of the component.'
    },
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of objects to display.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'list',
        description: 'Layout of the items, valid values are "list" and "grid".'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'A property to uniquely identify an item.'
    },
    {
        name: 'rows',
        type: 'number',
        default: 'null',
        description: 'Number of rows to display per page.'
    },
    {
        name: 'first',
        type: 'number',
        default: '0',
        description: 'Index of the first record to render.'
    },
    {
        name: 'totalRecords',
        type: 'number',
        default: 'null',
        description: 'Number of total records, defaults to length of value when not defined.'
    },
    {
        name: 'paginator',
        type: 'boolean',
        default: 'false',
        description: 'When specified as true, enables the pagination.'
    },
    {
        name: 'paginatorPosition',
        type: 'string',
        default: 'bottom',
        description: 'Position of the paginator, options are "top","bottom" or "both".'
    },
    {
        name: 'alwaysShowPaginator',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show it even there is only one page.'
    },
    {
        name: 'paginatorClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the paginator element.'
    },
    {
        name: 'paginatorTemplate',
        type: 'string|object',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        description: 'Template of the paginator. For details, refer to the template section of the <Link to="/paginator">paginator documentation</Link> for further options.'
    },
    {
        name: 'paginatorLeft',
        type: 'Element',
        default: 'null',
        description: 'Content for the left side of the paginator.'
    },
    {
        name: 'paginatorRight',
        type: 'Element',
        default: 'null',
        description: 'Content for the right side of the paginator.'
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
        name: 'currentPageReportTemplate',
        type: 'string',
        default: '(&#123;currentPage&#125; of &#123;totalPages&#125;)',
        description: 'Template of the current page report element.'
    },
    {
        name: 'paginatorDropdownAppendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'emptyMessage',
        type: 'string',
        default: 'No records found.',
        description: 'Text to display when there is no data.'
    },
    {
        name: 'sortField',
        type: 'string',
        default: 'null',
        description: 'Name of the field to sort data by default.'
    },
    {
        name: 'sortOrder',
        type: 'number',
        default: 'null',
        description: 'Order to sort the data by default.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
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
        name: 'lazy',
        type: 'boolean',
        default: 'false',
        description: 'Defines if data is loaded and interacted with in lazy manner.'
    },
    {
        name: 'itemTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that gets the option along with the layout mode and returns the content.'
    }
];

const DataViewEvents = [
    {
        name: 'onLoad',
        description: 'Callback to invoke when layout mode is changed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'layout mode e.g. "list" or "grid"'
            }
        ]
    }
];

const DataViewStyles = [
    { name: 'p-dataview', description: 'Container element.' },
    {
        name: 'p-dataview-list',
        description: 'Container element in list layout.'
    },
    {
        name: 'p-dataview-grid',
        description: 'Container element in grid layout.'
    },
    { name: 'p-dataview-header', description: 'Header section.' },
    { name: 'p-dataview-footer', description: 'Footer section.' },
    { name: 'p-dataview-content', description: 'Container of items.' }
];

module.exports = {
    dataview: {
        name: 'DataView',
        description: 'DataView displays data in grid or list layout with pagination and sorting features.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/dataview',
        props: DataViewProps,
        events: DataViewEvents,
        styles: DataViewStyles
    }
};
