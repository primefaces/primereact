import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="treenodeapi" label="TreeNode API">
                <p>Following properties of the API are currently utilized by the TreeTable.</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>key</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Unique key of the node.</td>
                            </tr>
                            <tr>
                                <td>data</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Data represented by the node.</td>
                            </tr>
                            <tr>
                                <td>children</td>
                                <td>TreeNode[]</td>
                                <td>null</td>
                                <td>An array of treenodes as children.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the node.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the node.</td>
                            </tr>
                            <tr>
                                <td>selectable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Whether the node is selectable when selection mode is enabled.</td>
                            </tr>
                            <tr>
                                <td>leaf</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Specifies if the node has children. Used in lazy loading.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <p>Dynamic columns are also possible by creating the column component dynamically.</p>
            <CodeHighlight lang="js">
                {`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export const TreeTableDemo = () => {

    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        nodeservice = new NodeService();
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, [])

    let cols = [
        {field: 'name', header: 'Name'},
        {field: 'size', header: 'Size'},
        {field: 'type', header: 'Type'}
    ];

    let dynamicColumns = cols.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <TreeTable value={nodes}>
            {dynamicColumns}
        </TreeTable>
    );
}
`}
            </CodeHighlight>
            <DocSubSection id="columncomponent" label="Column Component">
                <p>Column component defines various options that are utilized by the TreeTable to specify corresponding features.</p>

                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>columnKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of a column if field property is not defined. Only utilized by reorderableColumns feature at the moment.</td>
                            </tr>
                            <tr>
                                <td>field</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property of a row data.</td>
                            </tr>
                            <tr>
                                <td>sortField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property of a row data used for sorting, defaults to field.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Header content of the column.</td>
                            </tr>
                            <tr>
                                <td>body</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Body content of the column.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the column.</td>
                            </tr>
                            <tr>
                                <td>sortable</td>
                                <td>any</td>
                                <td>false</td>
                                <td>Defines if a column is sortable.</td>
                            </tr>
                            <tr>
                                <td>sortFunction</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Sort function for custom sorting.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if a column can be filtered.</td>
                            </tr>
                            <tr>
                                <td>filterMatchMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in" and "custom".</td>
                            </tr>
                            <tr>
                                <td>filterType</td>
                                <td>string</td>
                                <td>text</td>
                                <td>Type of the filter input field.</td>
                            </tr>
                            <tr>
                                <td>filterPlaceholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines placeholder of the input fields.</td>
                            </tr>
                            <tr>
                                <td>filterDelay</td>
                                <td>number</td>
                                <td>300</td>
                                <td>Delay in milliseconds before filtering the data.</td>
                            </tr>
                            <tr>
                                <td>filterLocale</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                            </tr>
                            <tr>
                                <td>filterMaxlength</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Specifies the maximum number of characters allowed in the filter element.</td>
                            </tr>
                            <tr>
                                <td>filterElement</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Element for custom filtering.</td>
                            </tr>
                            <tr>
                                <td>filterFunction</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Custom filter function.</td>
                            </tr>
                            <tr>
                                <td>filterHeaderStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the filter column header.</td>
                            </tr>
                            <tr>
                                <td>filterHeaderClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the filter header column.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column.</td>
                            </tr>
                            <tr>
                                <td>headerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column.</td>
                            </tr>
                            <tr>
                                <td>headerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column.</td>
                            </tr>
                            <tr>
                                <td>bodyStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column.</td>
                            </tr>
                            <tr>
                                <td>bodyClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column.</td>
                            </tr>
                            <tr>
                                <td>footerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column.</td>
                            </tr>
                            <tr>
                                <td>footerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column.</td>
                            </tr>
                            <tr>
                                <td>expander</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays an icon to toggle expansion of children.</td>
                            </tr>
                            <tr>
                                <td>frozen</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the column is fixed in horizontal scrolling or not.</td>
                            </tr>
                            <tr>
                                <td>colSpan</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of columns to span for grouping.</td>
                            </tr>
                            <tr>
                                <td>rowSpan</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of rows to span for grouping.</td>
                            </tr>
                            <tr>
                                <td>editor</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function to provide the cell editor input.</td>
                            </tr>
                            <tr>
                                <td>cellEditValidator</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Validator function to validate the cell input value.</td>
                            </tr>
                            <tr>
                                <td>reorderable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Used to defined reorderableColumns per column when reorderableColumns of table is enabled, defaults to value of reorderableColumns.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="properties" label="Properties">
                <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of treenodes to display.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Header content of the table.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the table.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Style class of the component.</td>
                            </tr>
                            <tr>
                                <td>tableStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the table element.</td>
                            </tr>
                            <tr>
                                <td>tableClassName</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Style class of the table element.</td>
                            </tr>
                            <tr>
                                <td>expandedKeys</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of keys to represent the state of the tree expansion state in controlled mode.</td>
                            </tr>
                            <tr>
                                <td>paginator</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified as true, enables the pagination.</td>
                            </tr>
                            <tr>
                                <td>paginatorPosition</td>
                                <td>string</td>
                                <td>bottom</td>
                                <td>Position of the paginator, options are "top","bottom" or "both".</td>
                            </tr>
                            <tr>
                                <td>alwaysShowPaginator</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show it even there is only one page.</td>
                            </tr>
                            <tr>
                                <td>paginatorClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the paginator element.</td>
                            </tr>
                            <tr>
                                <td>paginatorTemplate</td>
                                <td>string|object</td>
                                <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                                <td>
                                    Template of the paginator. For details, refer to the template section of the <Link href="/paginator">paginator documentation</Link> for further options.
                                </td>
                            </tr>
                            <tr>
                                <td>paginatorLeft</td>
                                <td>Element</td>
                                <td>null</td>
                                <td>Content for the left side of the paginator.</td>
                            </tr>
                            <tr>
                                <td>paginatorRight</td>
                                <td>Element</td>
                                <td>null</td>
                                <td>Content for the right side of the paginator.</td>
                            </tr>
                            <tr>
                                <td>pageLinkSize</td>
                                <td>number</td>
                                <td>5</td>
                                <td>Number of page links to display.</td>
                            </tr>
                            <tr>
                                <td>rowsPerPageOptions</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Array of integer values to display inside rows per page dropdown.</td>
                            </tr>
                            <tr>
                                <td>currentPageReportTemplate</td>
                                <td>string</td>
                                <td>({`{currentPage} of {totalPages}`})</td>
                                <td>
                                    Template of the current page report element. Available placeholders are
                                    {` {currentPage}, {totalPages}, {rows}, {first}, {last} and {totalRecords}`}
                                </td>
                            </tr>
                            <tr>
                                <td>paginatorDropdownAppendTo</td>
                                <td>DOM element | string</td>
                                <td>document.body</td>
                                <td>
                                    DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                                </td>
                            </tr>
                            <tr>
                                <td>first</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Index of the first row to be displayed.</td>
                            </tr>
                            <tr>
                                <td>rows</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of rows to display per page.</td>
                            </tr>
                            <tr>
                                <td>totalRecords</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of total records, defaults to length of value when not defined.</td>
                            </tr>
                            <tr>
                                <td>lazy</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if data is loaded and interacted with in lazy manner.</td>
                            </tr>
                            <tr>
                                <td>sortField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the field to sort data by default.</td>
                            </tr>
                            <tr>
                                <td>sortOrder</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Order to sort the data by default.</td>
                            </tr>
                            <tr>
                                <td>multiSortMeta</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>
                            </tr>
                            <tr>
                                <td>sortMode</td>
                                <td>string</td>
                                <td>single</td>
                                <td>Defines whether sorting works on single column or on multiple columns.</td>
                            </tr>
                            <tr>
                                <td>defaultSortOrder</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Default sort order of an unsorted column.</td>
                            </tr>
                            <tr>
                                <td>removableSort</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, columns can have an un-sorted state.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                            </tr>
                            <tr>
                                <td>selectionKeys</td>
                                <td>any</td>
                                <td>null</td>
                                <td>A single or an array of keys to control the selection state.</td>
                            </tr>
                            <tr>
                                <td>contextMenuSelectionKey</td>
                                <td>any</td>
                                <td>null</td>
                                <td>A single key to control the selection with the context menu.</td>
                            </tr>
                            <tr>
                                <td>metaKeySelection</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>
                                    Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch
                                    enabled devices, metaKeySelection is turned off automatically.
                                </td>
                            </tr>
                            <tr>
                                <td>selectOnEdit</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.</td>
                            </tr>
                            <tr>
                                <td>propagateSelectionUp</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether checkbox selections propagate to ancestor nodes.</td>
                            </tr>
                            <tr>
                                <td>propagateSelectionDown</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether checkbox selections propagate to descendant nodes.</td>
                            </tr>
                            <tr>
                                <td>autoLayout</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the cell widths scale according to their content or not.</td>
                            </tr>
                            <tr>
                                <td>rowClassName</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that takes the row data and returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.</td>
                            </tr>
                            <tr>
                                <td>loading</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays a loader to indicate data load is in progress.</td>
                            </tr>
                            <tr>
                                <td>loadingIcon</td>
                                <td>string</td>
                                <td>pi pi-spinner</td>
                                <td>The icon to show while indicating data load is in progress.</td>
                            </tr>
                            <tr>
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>scrollable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, enables horizontal and/or vertical scrolling.</td>
                            </tr>
                            <tr>
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Height of the scroll viewport.</td>
                            </tr>
                            <tr>
                                <td>reorderableColumns</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, columns can be reordered using drag and drop.</td>
                            </tr>
                            <tr>
                                <td>filters</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of FilterMetadata objects to provide external filters.</td>
                            </tr>
                            <tr>
                                <td>globalFilter</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value of the global filter to use in filtering.</td>
                            </tr>
                            <tr>
                                <td>globalFilterMatchMode</td>
                                <td>string</td>
                                <td>contains</td>
                                <td>Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".</td>
                            </tr>
                            <tr>
                                <td>filterMode</td>
                                <td>string</td>
                                <td>lenient</td>
                                <td>Mode for filtering valid values are lenient and strict. Default is lenient.</td>
                            </tr>
                            <tr>
                                <td>headerColumnGroup</td>
                                <td>ColumnGroup</td>
                                <td>null</td>
                                <td>ColumnCroup component for header.</td>
                            </tr>
                            <tr>
                                <td>footerColumnGroup</td>
                                <td>ColumnGroup</td>
                                <td>null</td>
                                <td>ColumnCroup component for footer.</td>
                            </tr>
                            <tr>
                                <td>frozenHeaderColumnGroup</td>
                                <td>ColumnGroup</td>
                                <td>null</td>
                                <td>ColumnCroup component for header of frozen columns.</td>
                            </tr>
                            <tr>
                                <td>frozenFooterColumnGroup</td>
                                <td>ColumnGroup</td>
                                <td>null</td>
                                <td>ColumnCroup component for footer of frozen columns.</td>
                            </tr>
                            <tr>
                                <td>frozenWidth</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Width of the frozen part in scrollable DataTable.</td>
                            </tr>
                            <tr>
                                <td>resizableColumns</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, columns can be resized using drag and drop.</td>
                            </tr>
                            <tr>
                                <td>columnResizeMode</td>
                                <td>string</td>
                                <td>fit</td>
                                <td>Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".</td>
                            </tr>
                            <tr>
                                <td>emptyMessage</td>
                                <td>string</td>
                                <td>No records found</td>
                                <td>Text to display when there is no data.</td>
                            </tr>
                            <tr>
                                <td>rowHover</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, background of the rows change on hover.</td>
                            </tr>
                            <tr>
                                <td>showGridlines</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to show grid lines between cells.</td>
                            </tr>
                            <tr>
                                <td>stripedRows</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to displays rows with alternating colors.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onExpand</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Expanded node instance.
                                </td>
                                <td>Callback to invoke when a node is expanded.</td>
                            </tr>
                            <tr>
                                <td>onCollapse</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Collapsed node instance.
                                </td>
                                <td>Callback to invoke when a node is collapsed.</td>
                            </tr>
                            <tr>
                                <td>onToggle</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Toggled node instance.
                                </td>
                                <td>Callback to invoke when a node is toggled.</td>
                            </tr>
                            <tr>
                                <td>onPage</td>
                                <td>
                                    event.first: Index of the first row. <br />
                                    event.rows: Rows per page.
                                </td>
                                <td>Callback to invoke on pagination.</td>
                            </tr>
                            <tr>
                                <td>onSort</td>
                                <td>
                                    event.sortField: Field to sort against. <br />
                                    event.sortOrder: Sort order as integer. <br />
                                    event.multiSortMeta: MultiSort metadata.
                                </td>
                                <td>Callback to invoke on sort.</td>
                            </tr>
                            <tr>
                                <td>onFilter</td>
                                <td>event.filters: Collection of active filters.</td>
                                <td>Callback to invoke on filtering.</td>
                            </tr>
                            <tr>
                                <td>onSelect</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Selected node instance.
                                </td>
                                <td>Callback to invoke when a node is selected.</td>
                            </tr>
                            <tr>
                                <td>onUnselect</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.node: Unselected node instance.
                                </td>
                                <td>Callback to invoke when a node is unselected.</td>
                            </tr>
                            <tr>
                                <td>onRowClick</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Clicked row data
                                </td>
                                <td>Callback to invoke when a row is clicked.</td>
                            </tr>
                            <tr>
                                <td>onSelectionChange</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: Selected node key(s).
                                </td>
                                <td>Callback to invoke when selection changes.</td>
                            </tr>
                            <tr>
                                <td>onContextMenuSelectionChange</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: Selected node key.
                                </td>
                                <td>Callback to invoke when selection changes with a context menu.</td>
                            </tr>
                            <tr>
                                <td>onColumnResizeEnd</td>
                                <td>
                                    event.element: DOM element of the resized column. event.column: Properties of the resized column.
                                    <br />
                                    event.delta: Change in column width
                                </td>
                                <td>Callback to invoke when a column is resized.</td>
                            </tr>
                            <tr>
                                <td>onColReorder</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.dragIndex: Index of the dragged column <br />
                                    event.dropIndex: Index of the dropped column <br />
                                    event.columns: Columns array after reorder.
                                </td>
                                <td>Callback to invoke when a column is reordered.</td>
                            </tr>
                            <tr>
                                <td>onContextMenu</td>
                                <td>
                                    event.originalEvent: Original event instance. <br />
                                    event.data: Collapsed row data
                                </td>
                                <td>Callback to invoke when a context menu is clicked.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-treetable</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-treetable-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-treetable-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-column-title</td>
                                <td>Title of a column.</td>
                            </tr>
                            <tr>
                                <td>p-sortable-column</td>
                                <td>Sortable column header.</td>
                            </tr>
                            <tr>
                                <td>p-treetable-scrollable-header</td>
                                <td>Container of header in a scrollable table.</td>
                            </tr>
                            <tr>
                                <td>p-treetable-scrollable-body</td>
                                <td>Container of body in a scrollable table.</td>
                            </tr>
                            <tr>
                                <td>p-treetable-scrollable-footer</td>
                                <td>Container of footer in a scrollable table.</td>
                            </tr>
                            <tr>
                                <td>p-treetable-emptymessage</td>
                                <td>Cell containing the empty message.</td>
                            </tr>
                            <tr>
                                <td>p-treetable-toggler</td>
                                <td>Toggler icon.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>
                        DataTable uses a <i>treegrid</i> element whose attributes can be extended with the <i>tableProps</i> option. This property allows passing aria roles and attributes like <i>aria-label</i> and <i>aria-describedby</i> to define
                        the table for readers. Default role of the table is <i>table</i>. Header, body and footer elements use <i>rowgroup</i>, rows use <i>row</i> role, header cells have <i>columnheader</i> and body cells use <i>cell</i> roles.
                        Sortable headers utilizer <i>aria-sort</i> attribute either set to "ascending" or "descending".
                    </p>

                    <p>
                        Row elements manage <i>aria-expanded</i> for state along with <i>aria-posinset</i>, <i>aria-setsize</i> and <i>aria-level</i> attribute to define the hierachy.
                    </p>

                    <p>
                        When selection is enabled, <i>aria-selected</i> is set to true on a row. In checkbox mode, the built-in checkbox component use <i>checkbox</i> role with <i>aria-checked</i> state attribute.
                    </p>

                    <p>Editable cells use custom templating so you need to manage aria roles and attributes manually if required.</p>

                    <p>
                        Paginator is a standalone component used inside the DataTable, refer to the <Link href="/paginator">paginator</Link> for more information about the accessibility features.
                    </p>

                    <h6>Sortable Headers Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>tab</i>
                                    </td>
                                    <td>Moves through the headers.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Sorts the column.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Sorts the column.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>tab</i>
                                    </td>
                                    <td>
                                        Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable
                                        element in the page tab sequence.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>tab</i>
                                    </td>
                                    <td>
                                        Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable
                                        element in the page tab sequence.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Selects the focused treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Selects the focused treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous treenode.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>If node is closed, opens the node otherwise moves focus to the first child node.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>If node is open, closes the node otherwise moves focus to the parent node.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
