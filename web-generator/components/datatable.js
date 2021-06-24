const DataTableProps = [
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
        description: 'An array of objects to display.'
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
        type: 'string',
        default: 'null',
        description: 'Style class of the table element.'
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
        default: 'FirstPageLink PrevPageLink PageLinks <br /> NextPageLink LastPageLink RowsPerPageDropdown',
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
        description: '                            <td>'
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
        name: 'emptyMessage',
        type: 'any',
        default: 'No records found',
        description: 'Text to display when there is no data.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Specifies the selection mode, valid values are "single", "multiple", "radiobutton" and "checkbox".'
    },
    {
        name: 'dragSelection',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, a rectangle that can be dragged can be used to make a range selection.'
    },
    {
        name: 'selection',
        type: 'any',
        default: 'null',
        description: 'Selected row in single mode or an array of values in multiple mode.'
    },
    {
        name: 'contextMenuSelection',
        type: 'any',
        default: 'null',
        description: 'Selected row in single mode or an array of values in multiple mode.'
    },
    {
        name: 'compareSelectionBy',
        type: 'string',
        default: 'deepEquals',
        description: 'Algorithm to define if a row is selected, valid values are "equals" that compares by reference and <br/> "deepEquals" that compares all fields.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'A property to uniquely identify a record in data.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description: '                            <td>'
    },
    {
        name: 'selectOnEdit',
        type: 'boolean',
        default: 'true',
        description: 'Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.'
    },
    {
        name: 'headerColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnGroup component for header.'
    },
    {
        name: 'footerColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnGroup component for footer.'
    },
    {
        name: 'frozenHeaderColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnGroup component for header of frozen columns.'
    },
    {
        name: 'frozenFooterColumnGroup',
        type: 'ColumnGroup',
        default: 'null',
        description: 'ColumnGroup component for footer of frozen columns.'
    },
    {
        name: 'rowExpansionTemplate',
        type: 'function',
        default: 'null',
        description: 'Function that receives the row data as the parameter and returns the expanded row content.'
    },
    {
        name: 'expandedRows',
        type: 'array|object',
        default: 'null',
        description: 'A collection of rows or a map object row data keys that are expanded.'
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
        description: 'Defines whether the overall table width should change on column resize, <br/> valid values are "fit" and "expand".'
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
        name: 'filterDelay',
        type: 'number',
        default: '300',
        description: 'Delay in milliseconds before filtering the data.'
    },
    {
        name: 'filterLocale',
        type: 'string',
        default: 'undefined',
        description: "Locale to use in filtering. The default locale is the host environment's current locale."
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
        name: 'virtualScroll',
        type: 'boolean',
        default: 'false',
        description: 'Whether the data should be loaded on demand during scroll.'
    },
    {
        name: 'virtualScrollDelay',
        type: 'number',
        default: '250',
        description: 'Delay in virtual scroll before doing a call to lazy load.'
    },
    {
        name: 'virtualRowHeight',
        type: 'number',
        default: '28',
        description: 'Height of a row to use in calculations of virtual scrolling.'
    },
    {
        name: 'frozenWidth',
        type: 'string',
        default: 'null',
        description: 'Width of the frozen part in scrollable DataTable.'
    },
    {
        name: 'frozenValue',
        type: 'array',
        default: 'null',
        description: 'Items of the frozen part in scrollable DataTable.'
    },
    {
        name: 'csvSeparator',
        type: 'string',
        default: ',',
        description: 'Character to use as the csv separator.'
    },
    {
        name: 'exportFilename',
        type: 'string',
        default: 'download',
        description: 'Name of the exported file.'
    },
    {
        name: 'rowGroupMode',
        type: 'string',
        default: 'null',
        description: 'Defines the row grouping mode, valid values are "subheader" and "rowgroup".'
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
        description: `Function that takes the row data and <br/> returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.`
    },
    {
        name: 'rowGroupHeaderTemplate',
        type: 'function',
        default: 'null',
        description: 'Function to provide the content of row group header.'
    },
    {
        name: 'rowGroupFooterTemplate',
        type: 'function',
        default: 'null',
        description: 'Function to provide the content of row group footer.'
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
        name: 'stateKey',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of a stateful table to use in state storage.'
    },
    {
        name: 'stateStorage',
        type: 'string',
        default: 'session',
        description: 'Defines where a stateful table keeps its state, <br/> valid values are "session" for sessionStorage, "local" for localStorage and "custom".'
    },
    {
        name: 'editMode',
        type: 'string',
        default: 'cell',
        description: 'Defines editing mode, options are "cell" and "row".'
    },
    {
        name: 'editingRows',
        type: 'array|object',
        default: 'null',
        description: 'A collection of rows to represent the current editing data in row edit mode.'
    },
    {
        name: 'exportFunction',
        type: 'function',
        default: 'null',
        description: '                            <td>'
    },
    {
        name: 'expandableRowGroups',
        type: 'boolean',
        default: 'false',
        description: 'Makes row groups toggleable, default is false.'
    },
    {
        name: 'rowHover',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, background of the rows change on hover..'
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
    },
    {
        name: 'showSelectionElement',
        type: 'function',
        default: 'null',
        description: 'Function that returns a boolean by passing the row data to decide if the radio or checkbox should be displayed per row.'
    },
    {
        name: 'showRowReorderElement',
        type: 'function',
        default: 'null',
        description: 'Function that returns a boolean by passing the row data to decide if the row reorder element should be displayed per row.'
    },
    {
        name: 'customSaveState',
        type: 'function',
        default: 'null',
        description: '                            <td>'
    },
    {
        name: 'customRestoreState',
        type: 'function',
        default: 'null',
        description: 'A function to implement custom restoreState with stateStorage="custom". Need to return state object.'
    }
];

const DataTableEvents = [

];

const DataTableStyles = [
    { name: 'p-datatable', description: 'Container element.' },
    { name: 'p-datatable-header', description: 'Header section.' },
    { name: 'p-datatable-footer', description: 'Footer section.' },
    { name: 'p-column-title', description: 'Title of a column.' },
    { name: 'p-sortable-column', description: 'Sortable column header.' },
    { name: 'p-column-filter', description: 'Filter element in header.' },
    {
        name: 'p-datatable-scrollable-header',
        description: 'Container of header in a scrollable table.'
    },
    {
        name: 'p-datatable-scrollable-body',
        description: 'Container of body in a scrollable table.'
    },
    {
        name: 'p-datatable-scrollable-footer',
        description: 'Container of footer in a scrollable table.'
    },
    {
        name: 'p-datatable-responsive',
        description: 'Container element of a responsive datatable.'
    },
    {
        name: 'p-datatable-emptymessage',
        description: 'Cell containing the empty message.'
    },
    { name: 'p-rowgroup-header', description: 'Header of a rowgroup.' },
    { name: 'p-rowgroup-footer', description: 'Footer of a rowgroup.' }
];

module.exports = {
    datatable: {
        name: 'DataTable',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/datatable',
        props: DataTableProps,
        events: DataTableEvents,
        styles: DataTableStyles
    }
};
