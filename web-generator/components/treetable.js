const TreeTableProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of treenodes to display.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Header content of the table.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer content of the table.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'any',
        default: 'null',
        description: 'Style class of the component.'
    },
    {
        name: 'tableStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the table element.'
    },
    {
        name: 'tableClassName',
        type: 'any',
        default: 'null',
        description: 'Style class of the table element.'
    },
    {
        name: 'expandedKeys',
        type: 'array',
        default: 'null',
        description: 'An array of keys to represent the state of the tree expansion state in controlled mode.'
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
        default: '({`{currentPage} of {totalPages}`})',
        description: '                                        <td>'
    },
    {
        name: 'paginatorDropdownAppendTo',
        type: 'DOM element | string',
        default: 'document.body',
        description: "DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located."
    },
    {
        name: 'first',
        type: 'number',
        default: '0',
        description: 'Index of the first row to be displayed.'
    },
    {
        name: 'rows',
        type: 'number',
        default: 'null',
        description: 'Number of rows to display per page.'
    },
    {
        name: 'totalRecords',
        type: 'number',
        default: 'null',
        description: 'Number of total records, defaults to length of value when not defined.'
    },
    {
        name: 'lazy',
        type: 'boolean',
        default: 'false',
        description: 'Defines if data is loaded and interacted with in lazy manner.'
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
        name: 'multiSortMeta',
        type: 'array',
        default: 'null',
        description: 'An array of SortMeta objects to sort the data by default in multiple sort mode.'
    },
    {
        name: 'sortMode',
        type: 'string',
        default: 'single',
        description: 'Defines whether sorting works on single column or on multiple columns.'
    },
    {
        name: 'defaultSortOrder',
        type: 'number',
        default: '1',
        description: 'Default sort order of an unsorted column.'
    },
    {
        name: 'removableSort',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, columns can have an un-sorted state.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines the selection mode, valid values "single", "multiple", and "checkbox".'
    },
    {
        name: 'selectionKeys',
        type: 'any',
        default: 'null',
        description: 'A single or an array of keys to control the selection state.'
    },
    {
        name: 'contextMenuSelectionKey',
        type: 'any',
        default: 'null',
        description: 'A single key to control the selection with the context menu.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description: '                                        <td>'
    },
    {
        name: 'selectOnEdit',
        type: 'boolean',
        default: 'true',
        description: 'Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.'
    },
    {
        name: 'propagateSelectionUp',
        type: 'boolean',
        default: 'true',
        description: 'Whether checkbox selections propagate to ancestor nodes.'
    },
    {
        name: 'propagateSelectionDown',
        type: 'boolean',
        default: 'true',
        description: 'Whether checkbox selections propagate to descendant nodes.'
    },
    {
        name: 'autoLayout',
        type: 'boolean',
        default: 'false',
        description: 'Whether the cell widths scale according to their content or not.'
    },
    {
        name: 'rowClassName',
        type: 'function',
        default: 'null',
        description: `Function that takes the row data and returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.`
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Displays a loader to indicate data load is in progress.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'pi pi-spinner',
        description: 'The icon to show while indicating data load is in progress.'
    },
    {
        name: 'tabIndex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'scrollable',
        type: 'boolean',
        default: 'false',
        description: 'When specified, enables horizontal and/or vertical scrolling.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: 'null',
        description: 'Height of the scroll viewport.'
    },
    {
        name: 'reorderableColumns',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, columns can be reordered using drag and drop.'
    },
    {
        name: 'filters',
        type: 'array',
        default: 'null',
        description: 'An array of FilterMetadata objects to provide external filters.'
    },
    {
        name: 'globalFilter',
        type: 'any',
        default: 'null',
        description: 'Value of the global filter to use in filtering.'
    },
    {
        name: 'filterMode',
        type: 'string',
        default: 'lenient',
        description: 'Mode for filtering valid values are lenient and strict. Default is lenient.'
    },
    {
        name: 'headerColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnCroup component for header.'
    },
    {
        name: 'footerColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnCroup component for footer.'
    },
    {
        name: 'frozenHeaderColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnCroup component for header of frozen columns.'
    },
    {
        name: 'frozenFooterColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnCroup component for footer of frozen columns.'
    },
    {
        name: 'frozenWidth',
        type: 'string',
        default: 'null',
        description: 'Width of the frozen part in scrollable DataTable.'
    },
    {
        name: 'resizableColumns',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, columns can be resized using drag and drop.'
    },
    {
        name: 'columnResizeMode',
        type: 'string',
        default: 'fit',
        description: 'Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".'
    },
    {
        name: 'emptyMessage',
        type: 'string',
        default: 'No records found',
        description: 'Text to display when there is no data.'
    },
    {
        name: 'showGridlines',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show grid lines between cells.'
    },
    {
        name: 'stripedRows',
        type: 'boolean',
        default: 'false',
        description: 'Whether to displays rows with alternating colors.'
    }
];

const TreeTableEvents = [

];

const TreeTableStyles = [
    { name: 'p-treetable', description: 'Container element.' },
    { name: 'p-treetable-header', description: 'Header section.' },
    { name: 'p-treetable-footer', description: 'Footer section.' },
    { name: 'p-column-title', description: 'Title of a column.' },
    { name: 'p-sortable-column', description: 'Sortable column header.' },
    {
        name: 'p-treetable-scrollable-header',
        description: 'Container of header in a scrollable table.'
    },
    {
        name: 'p-treetable-scrollable-body',
        description: 'Container of body in a scrollable table.'
    },
    {
        name: 'p-treetable-scrollable-footer',
        description: 'Container of footer in a scrollable table.'
    },
    {
        name: 'p-treetable-emptymessage',
        description: 'Cell containing the empty message.'
    },
    { name: 'p-treetable-toggler', description: 'Toggler icon.' }
];

module.exports = {
    treetable: {
        name: 'TreeTable',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/treetable',
        props: TreeTableProps,
        events: TreeTableEvents,
        styles: TreeTableStyles
    }
};
