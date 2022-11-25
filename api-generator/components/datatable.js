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
        type: 'React.CSSProperties',
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
        description: 'Template of the current page report element. Available placeholders are {currentPage}, {totalPages}, {rows}, {first}, {last} and {totalRecords}'
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
        name: 'selectionAriaLabel',
        type: 'string',
        default: 'null',
        description: 'A field property from the row to add "Select {field}" and "Unselect {field}" ARIA labels to checkbox/radio buttons.'
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
        description:
            'Defines whether metaKey is requred or not for the selection.When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'selectOnEdit',
        type: 'boolean',
        default: 'true',
        description: 'Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.'
    },
    {
        name: 'selectionPageOnly',
        type: 'boolean',
        default: 'false',
        description: 'When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.'
    },
    {
        name: 'selectionAutoFocus',
        type: 'boolean',
        default: 'true',
        description: 'When a selectable row is clicked on RadioButton and Checkbox selection, it automatically decides whether to focus on elements such as checkbox or radio.'
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
        name: 'reorderableRows',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, rows can be reordered using drag and drop.'
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
        name: 'globalFilterMatchMode',
        type: 'string',
        default: 'contains',
        description: 'Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".'
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
        description: `Function that takes the row data and <br/> returns an object in "&#123;'styleclass' : condition&#125;" format to define a class name for a particular row.`
    },
    {
        name: 'cellClassName',
        type: 'function',
        default: 'null',
        description: `Function that takes the cell data and <br/> returns an object in "&#123;'styleclass' : condition&#125;" format to define a class name for a particular cell.`
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
        description: 'A function to implement custom export. Need to return string value. event.data: Field data. event.rows: Column field.'
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
        name: 'isDataSelectable',
        type: 'function',
        default: 'null',
        description: 'Function that returns a boolean to decide whether the data should be selectable.'
    },
    {
        name: 'customSaveState',
        type: 'function',
        default: 'null',
        description: 'A function to implement custom saveState with stateStorage="custom".state: the object to be stored.'
    },
    {
        name: 'customRestoreState',
        type: 'function',
        default: 'null',
        description: 'A function to implement custom restoreState with stateStorage="custom". Need to return state object.'
    }
];

const DataTableEvents = [
    {
        name: 'onSelectionChange',
        description: 'Callback to invoke when selection changes.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Selection object'
            }
        ]
    },
    {
        name: 'onContextMenuSelectionChange',
        description: 'Callback to invoke when a row selected with right click.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Selection object'
            }
        ]
    },
    {
        name: 'onRowToggle',
        description: 'Callback to invoke when a row is toggled or collapsed.',
        arguments: [
            {
                name: 'event.data',
                type: 'any[]',
                description: 'Expanded rows'
            }
        ]
    },
    {
        name: 'onColumnResizeEnd',
        description: 'Callback to invoke when a column is resized.',
        arguments: [
            {
                name: 'event.element',
                type: 'object',
                description: 'DOM element of the resized column.'
            },
            {
                name: 'event.column',
                type: 'any',
                description: 'Properties of the resized column.'
            },
            {
                name: 'event.delta',
                type: 'number',
                description: 'Change in column width.'
            }
        ]
    },
    {
        name: 'onColumnResizerClick',
        description: 'Callback to invoke when a resizer element is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.element',
                type: 'object',
                description: 'DOM element of the column.'
            },
            {
                name: 'event.column',
                type: 'any',
                description: 'Properties of the column.'
            }
        ]
    },
    {
        name: 'onColumnResizerDoubleClick',
        description: 'Callback to invoke when a resizer element is double clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.element',
                type: 'object',
                description: 'DOM element of the column.'
            },
            {
                name: 'event.column',
                type: 'any',
                description: 'Properties of the column.'
            }
        ]
    },
    {
        name: 'onSort',
        description: 'Callback to invoke on sort.',
        arguments: [
            {
                name: 'event.sortField',
                type: 'string',
                description: 'Field to sort against.'
            },
            {
                name: 'event.sortOrder',
                type: 'any',
                description: 'Sort order as integer.'
            },
            {
                name: 'event.multiSortMeta',
                type: 'any',
                description: 'MultiSort metadata.'
            }
        ]
    },
    {
        name: 'onPage',
        description: 'Callback to invoke on pagination.',
        arguments: [
            {
                name: 'event.sortField',
                type: 'number',
                description: 'Index of the first row.'
            },
            {
                name: 'event.rows',
                type: 'number',
                description: 'Rows per page.'
            }
        ]
    },
    {
        name: 'onFilter',
        description: 'Callback to invoke on filtering.',
        arguments: [
            {
                name: 'event.filters',
                type: 'any',
                description: 'Collection of active filters.'
            }
        ]
    },
    {
        name: 'onVirtualScroll',
        description: 'Callback to invoke during virtual scrolling.',
        arguments: [
            {
                name: 'event.first',
                type: 'number',
                description: 'Index of the first row.'
            }
        ]
    },
    {
        name: 'onAllRowsSelect',
        description: 'Callback to invoke when all rows are selected using the header checkbox.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Selected rows data.'
            },
            {
                name: 'event.type',
                type: 'any',
                description: 'Type of the selection, valid value is "all".'
            }
        ]
    },
    {
        name: 'onAllRowsUnselect',
        description: 'Callback to invoke when all rows are unselected using the header checkbox.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Unselected rows data.'
            },
            {
                name: 'event.type',
                type: 'any',
                description: 'Type of the selection, valid value is "all".'
            }
        ]
    },
    {
        name: 'onRowClick',
        description: 'Callback to invoke when a row is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Clicked row data'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Clicked row data index'
            }
        ]
    },
    {
        name: 'onRowDoubleClick',
        description: 'Callback to invoke when a row is double clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Clicked row data'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Clicked row data index'
            }
        ]
    },
    {
        name: 'onRowMouseEnter',
        description: 'Callback to invoke when a row is mouse hovered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Clicked row data'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Clicked row data index'
            }
        ]
    },
    {
        name: 'onRowMouseLeave',
        description: 'Callback to invoke when a row is moused out.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Clicked row data'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Clicked row data index'
            }
        ]
    },
    {
        name: 'onRowSelect',
        description: 'Callback to invoke when a row is unselected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Selected row data.'
            },
            {
                name: 'event.type',
                type: 'any',
                description: 'Type of the selection, valid values are "row", "radio" or "checkbox".'
            }
        ]
    },
    {
        name: 'onRowExpand',
        description: 'Callback to invoke when a row is expanded.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Expanded row data.'
            }
        ]
    },
    {
        name: 'onRowCollapse',
        description: 'Callback to invoke when a row is collapsed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Collapsed row data.'
            }
        ]
    },
    {
        name: 'onContextMenu',
        description: 'Callback to invoke when a context menu is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event instance.'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Collapsed row data.'
            }
        ]
    },
    {
        name: 'onColReorder',
        description: 'Callback to invoke when a column is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.dragIndex',
                type: 'number',
                description: 'Index of the dragged column.'
            },
            {
                name: 'event.dropIndex',
                type: 'number',
                description: 'Index of the dropped column.'
            },
            {
                name: 'event.columns',
                type: 'object',
                description: 'Columns array after reorder.'
            }
        ]
    },
    {
        name: 'onRowReOrder',
        description: 'Callback to invoke when a row is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'New value after reorder '
            },
            {
                name: 'event.dragIndex',
                type: 'number',
                description: 'Index of the dragged row.'
            },
            {
                name: 'event.dropIndex',
                type: 'number',
                description: 'Index of the drop location.'
            }
        ]
    },
    {
        name: 'onValueChange',
        description: 'Callback to invoke after filtering and sorting to pass the rendered value.',
        arguments: [
            {
                name: 'value',
                type: 'any',
                description: 'Browser event.'
            }
        ]
    },
    {
        name: 'rowEditValidator',
        description: 'Callback to invoke to validate the editing row when the save icon is clicked on row editing mode.',
        arguments: [
            {
                name: 'data',
                type: 'any',
                description: 'Editing row data'
            }
        ]
    },
    {
        name: 'onRowEditInit',
        description: 'Callback to invoke when the editing icon is clicked on row editing mode.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Editing row data'
            }
        ]
    },
    {
        name: 'onRowEditSave',
        description: 'Callback to invoke when the save icon is clicked on row editing mode.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Editing row data'
            }
        ]
    },
    {
        name: 'onRowEditCancel',
        description: 'Callback to invoke when the cancel icon is clicked on row editing mode.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Editing row data'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Editing row data index'
            }
        ]
    },
    {
        name: 'onRowEditChange',
        description: 'Callback to invoke when the row editor is programmatically shown/hidden on row editing mode.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'any',
                description: 'Editing rows data'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Current editing row data index'
            }
        ]
    },
    {
        name: 'onStateSave',
        description: 'Callback to invoke table state is saved.',
        arguments: [
            {
                name: 'state',
                type: 'object',
                description: 'Table state'
            }
        ]
    },
    {
        name: 'onStateRestore',
        description: 'Callback to invoke table state is restored.',
        arguments: [
            {
                name: 'state',
                type: 'object',
                description: 'Table state'
            }
        ]
    }
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
        description: 'DataTable displays data in tabular format.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/datatable',
        props: DataTableProps,
        events: DataTableEvents,
        styles: DataTableStyles
    }
};
