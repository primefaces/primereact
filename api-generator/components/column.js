const ColumnProps = [
    {
        name: 'columnKey',
        type: 'string',
        default: 'null',
        description: 'Identifier of a column if field property is not defined. Only utilized by reorderableColumns feature at the moment.'
    },
    {
        name: 'field',
        type: 'string',
        default: 'null',
        description: 'Property of a row data.'
    },
    {
        name: 'sortField',
        type: 'string',
        default: 'null',
        description: 'Property of a row data used for sorting, defaults to field.'
    },
    {
        name: 'filterField',
        type: 'string',
        default: 'null',
        description: 'Property of a row data used for filtering, defaults to field.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Header content of the column.'
    },
    {
        name: 'body',
        type: 'any',
        default: 'null',
        description: 'Body content of the column.'
    },
    {
        name: 'loadingBody',
        type: 'function',
        default: 'null',
        description: 'Function to return the body content of the column to display when virtual scroll loads the new data.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer content of the column.'
    },
    {
        name: 'sortable',
        type: 'boolean',
        default: 'false',
        description: 'Defines if a column is sortable.'
    },
    {
        name: 'sortFunction',
        type: 'function',
        default: 'null',
        description: 'Sort function for custom sorting.'
    },
    {
        name: 'sortableDisabled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the data of columns with this property cannot be sorted or changed by the user.'
    },
    {
        name: 'filter',
        type: 'boolean',
        default: 'false',
        description: 'Defines if a column can be filtered.'
    },
    {
        name: 'filterMatchMode',
        type: 'string',
        default: 'null',
        description: 'Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".'
    },
    {
        name: 'filterType',
        type: 'string',
        default: 'text',
        description: 'Type of the filter input field.'
    },
    {
        name: 'filterPlaceholder',
        type: 'string',
        default: 'null',
        description: 'Defines placeholder of the input fields.'
    },
    {
        name: 'filterMaxlength',
        type: 'number',
        default: 'null',
        description: 'Specifies the maximum number of characters allowed in the filter element.'
    },
    {
        name: 'filterElement',
        type: 'object',
        default: 'null',
        description: 'Element for custom filtering.'
    },
    {
        name: 'filterFunction',
        type: 'function',
        default: 'null',
        description: 'Custom filter function.'
    },
    {
        name: 'excludeGlobalFilter',
        type: 'boolean',
        default: 'false',
        description: 'Whether to exclude from global filtering or not.'
    },
    {
        name: 'filterHeaderStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the filter header.'
    },
    {
        name: 'filterHeaderClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the filter header.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the column.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the column.'
    },
    {
        name: 'headerStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the header.'
    },
    {
        name: 'headerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the header.'
    },
    {
        name: 'bodyStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the body.'
    },
    {
        name: 'bodyClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the body.'
    },
    {
        name: 'footerStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the footer.'
    },
    {
        name: 'footerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the footer.'
    },
    {
        name: 'expander',
        type: 'boolean',
        default: 'false',
        description: 'Displays an icon to toggle row expansion.'
    },
    {
        name: 'frozen',
        type: 'boolean',
        default: 'false',
        description: 'Whether the column is fixed in horizontal scrolling or not.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines column based selection mode, options are "single" and "multiple".'
    },
    {
        name: 'colSpan',
        type: 'number',
        default: 'null',
        description: 'Number of columns to span for grouping.'
    },
    {
        name: 'rowSpan',
        type: 'number',
        default: 'null',
        description: 'Number of rows to span for grouping.'
    },
    {
        name: 'editor',
        type: 'function',
        default: 'null',
        description: 'Function to provide the cell editor input.'
    },
    {
        name: 'editorValidator',
        type: 'function',
        default: 'null',
        description: 'Validator function to validate the cell input value.'
    },
    {
        name: 'editorValidatorEvent',
        type: 'string',
        default: 'click',
        description: 'Event to trigger the validation, possible values are "click" and "blur".'
    },
    {
        name: 'onBeforeEditorShow',
        type: 'function',
        default: 'null',
        description: 'Callback to invoke before the cell editor is shown.'
    },
    {
        name: 'onBeforeEditorHide',
        type: 'function',
        default: 'null',
        description: 'Callback to invoke before the cell editor is hidden.'
    },
    {
        name: 'onEditorInit',
        type: 'function',
        default: 'null',
        description: 'Callback to invoke when cell edit is initiated.'
    },
    {
        name: 'onEditorSubmit',
        type: 'function',
        default: 'null',
        description: 'Callback to execute when editor is submitted.'
    },
    {
        name: 'onEditorCancel',
        type: 'function',
        default: 'null',
        description: 'Callback to execute when editor is cancelled.'
    },
    {
        name: 'rowReorder',
        type: 'boolean',
        default: 'false',
        description: 'Whether this column displays an icon to reorder the rows.'
    },
    {
        name: 'rowReorderIcon',
        type: 'string',
        default: 'pi pi-bars',
        description: 'Icon of the drag handle to reorder rows.'
    },
    {
        name: 'rowEditor',
        type: 'boolean',
        default: 'false',
        description: 'Displays icons to edit row.'
    },
    {
        name: 'exportable',
        type: 'boolean',
        default: 'true',
        description: 'Defines whether the column is exported or not.'
    },
    {
        name: 'reorderable',
        type: 'boolean',
        default: 'null',
        description: 'Used to defined reorderableColumns per column when reorderableColumns of table is enabled, defaults to value of reorderableColumns.'
    }
];

const ColumnEvents = [
    {
        name: 'loadingBody',
        description: 'TODO',
    },
    {
        name: 'onEditorInit',
        description: 'TODO',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onEditorSubmit',
        description: 'TODO',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'onEditorCancel',
        description: 'TODO',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'sortFunction',
        description: 'TODO',
        arguments: [
            {
                name: 'event.field',
                type: 'string',
                description: 'TODO'
            }
        ]
    },
    {
        name: 'filterFunction',
        description: 'TODO',
        arguments: [
            {
                name: 'event.value',
                type: 'any',
                description: 'TODO'
            },
            {
                name: 'event.filter',
                type: 'any',
                description: 'TODO'
            },
            {
                name: 'event.filterLocale',
                type: 'string',
                description: 'TODO'
            }
        ]
    },
    {
        name: 'editorValidator',
        description: 'TODO',
        arguments: [
            {
                name: 'event.original Event',
                type: 'object',
                description: 'Browser Event'
            }
        ]
    },
    {
        name: 'editorValidator',
        description: 'TODO',
        arguments: [
            {
                name: 'event.original Event',
                type: 'object',
                description: 'Browser Event'
            }
        ]
    },
    {
        name: 'editorValidator',
        description: 'TODO',
        arguments: [
            {
                name: 'event.original Event',
                type: 'object',
                description: 'Browser Event'
            }
        ]
    },
    {
        name: 'onBeforeEditorHide',
        description: 'TODO',
        arguments: [
            {
                name: 'event.original Event',
                type: 'object',
                description: 'Browser Event'
            }
        ]
    },
    {
        name: 'onBeforeEditorShow',
        description: 'TODO',
        arguments: [
            {
                name: 'event.original Event',
                type: 'object',
                description: 'Browser Event'
            }
        ]
    }
];

const ColumnStyles = [

];

module.exports = {
    column: {
        name: 'Column',
        description: 'Column component defines various options to specify corresponding features.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/column',
        props: ColumnProps,
        events: ColumnEvents,
        styles: ColumnStyles
    }
};
