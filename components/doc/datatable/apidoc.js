import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
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
                                <td>filterField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property of a row data used for filtering, defaults to field.</td>
                            </tr>
                            <tr>
                                <td>exportField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Property of a row data used for exporting, defaults to field.</td>
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
                                <td>bodyStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the body.</td>
                            </tr>
                            <tr>
                                <td>bodyClassName</td>
                                <td>string | function</td>
                                <td>null</td>
                                <td>Style class of the body. If using a function must return a string.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the column.</td>
                            </tr>
                            <tr>
                                <td>sortable</td>
                                <td>boolean</td>
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
                                <td>sortableDisabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, the data of columns with this property cannot be sorted or changed by the user.</td>
                            </tr>
                            <tr>
                                <td>dataType</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Depending on the dataType of the column, suitable match modes are displayed.</td>
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
                                <td>Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".</td>
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
                                <td>excludeGlobalFilter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to exclude from global filtering or not.</td>
                            </tr>
                            <tr>
                                <td>filterHeaderStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the filter header.</td>
                            </tr>
                            <tr>
                                <td>filterHeaderClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the filter header.</td>
                            </tr>
                            <tr>
                                <td>showFilterMenu</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display the filter overlay.</td>
                            </tr>
                            <tr>
                                <td>showFilterOperator</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When enabled, match all and match any operator selector is displayed.</td>
                            </tr>
                            <tr>
                                <td>showClearButton</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Displays a button to clear the column filtering.</td>
                            </tr>
                            <tr>
                                <td>showApplyButton</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Displays a button to apply the column filtering.</td>
                            </tr>
                            <tr>
                                <td>showFilterMatchModes</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the match modes selector.</td>
                            </tr>
                            <tr>
                                <td>showFilterMenuOptions</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to show the match modes selector and match operator selector.</td>
                            </tr>
                            <tr>
                                <td>showAddButton</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When enabled, a button is displayed to add more rules.</td>
                            </tr>
                            <tr>
                                <td>filterMatchModeOptions</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of label-value pairs to override the global match mode options.</td>
                            </tr>
                            <tr>
                                <td>maxConstraints</td>
                                <td>number</td>
                                <td>2</td>
                                <td>Maximum number of constraints for a column filter.</td>
                            </tr>
                            <tr>
                                <td>filterMenuClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the column filter overlay.</td>
                            </tr>
                            <tr>
                                <td>filterMenuStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the column filter overlay.</td>
                            </tr>
                            <tr>
                                <td>align</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Aligns the content of the column, valid values are left, right and center.</td>
                            </tr>
                            <tr>
                                <td>alignHeader</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Aligns the header of the column, valid values are left, right and center.</td>
                            </tr>
                            <tr>
                                <td>alignFrozen</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Position of a frozen column, valid values are left and right.</td>
                            </tr>
                            <tr>
                                <td>hidden</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the column is rendered.</td>
                            </tr>
                            <tr>
                                <td>onFilterClear</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke when the filter meta is cleared.</td>
                            </tr>
                            <tr>
                                <td>onFilterApplyClick</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke when the apply button is clicked.</td>
                            </tr>
                            <tr>
                                <td>onFilterMatchModeChange</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke when the match mode option is changed.</td>
                            </tr>
                            <tr>
                                <td>onFilterOperatorChange</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke when the filter operator option is changed.</td>
                            </tr>
                            <tr>
                                <td>onFilterConstraintAdd</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke when a new constraint is added.</td>
                            </tr>
                            <tr>
                                <td>onFilterConstraintRemove</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke when a constraint is removed.</td>
                            </tr>
                            <tr>
                                <td>filterClear</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of clear element in menu.</td>
                            </tr>
                            <tr>
                                <td>filterApply</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of apply element in menu.</td>
                            </tr>
                            <tr>
                                <td>filterHeader</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of header element in menu.</td>
                            </tr>
                            <tr>
                                <td>filterFooter</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of footer element in menu.</td>
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
                                <td>Inline style of the header.</td>
                            </tr>
                            <tr>
                                <td>headerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the header.</td>
                            </tr>
                            <tr>
                                <td>headerTooltip</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Content of the header tooltip.</td>
                            </tr>
                            <tr>
                                <td>headerTooltipOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Configuration of the header tooltip, refer to the tooltip documentation for more information.</td>
                            </tr>
                            <tr>
                                <td>footerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the footer.</td>
                            </tr>
                            <tr>
                                <td>footerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the footer.</td>
                            </tr>
                            <tr>
                                <td>expander</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays an icon to toggle row expansion.</td>
                            </tr>
                            <tr>
                                <td>frozen</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the column is fixed in horizontal scrolling or not.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines column based selection mode, options are "single" and "multiple".</td>
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
                                <td>cellEditValidatorEvent</td>
                                <td>string</td>
                                <td>click</td>
                                <td>Event to trigger the validation, possible values are "click" and "blur".</td>
                            </tr>
                            <tr>
                                <td>onBeforeCellEditShow</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke before the cell editor is shown.</td>
                            </tr>
                            <tr>
                                <td>onBeforeCellEditHide</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke before the cell editor is hidden.</td>
                            </tr>
                            <tr>
                                <td>onCellEditInit</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to invoke when cell edit is initiated.</td>
                            </tr>
                            <tr>
                                <td>onCellEditComplete</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to execute when editor is submitted.</td>
                            </tr>
                            <tr>
                                <td>onCellEditCancel</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to execute when editor is cancelled.</td>
                            </tr>
                            <tr>
                                <td>rowReorder</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether this column displays an icon to reorder the rows.</td>
                            </tr>
                            <tr>
                                <td>rowReorderIcon</td>
                                <td>string</td>
                                <td>pi pi-bars</td>
                                <td>Icon of the drag handle to reorder rows.</td>
                            </tr>
                            <tr>
                                <td>rowEditor</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays icons to edit row.</td>
                            </tr>
                            <tr>
                                <td>exportable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Defines whether the column is exported or not.</td>
                            </tr>
                            <tr>
                                <td>reorderable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Used to defined reorderableColumns per column when reorderableColumns of table is enabled, defaults to value of reorderableColumns.</td>
                            </tr>
                            <tr>
                                <td>resizeable</td>
                                <td>boolean</td>
                                <td>null</td>
                                <td>Used to defined resizeableColumns per column when resizeableColumns of table is enabled, defaults to value of resizeableColumns.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                                <td>An array of objects to display.</td>
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
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the table element.</td>
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
                                <td>
                                    FirstPageLink PrevPageLink PageLinks <br /> NextPageLink LastPageLink RowsPerPageDropdown
                                </td>
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
                                <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                                <td>Template of the current page report element. Available placeholders are &#123;currentPage&#125;, &#123;totalPages&#125;, &#123;rows&#125;, &#123;first&#125;, &#123;last&#125; and &#123;totalRecords&#125;</td>
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
                                <td>emptyMessage</td>
                                <td>any</td>
                                <td>No records found</td>
                                <td>Text to display when there is no data.</td>
                            </tr>
                            <tr>
                                <td>selectionMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Specifies the selection mode, valid values are "single", "multiple", "radiobutton" and "checkbox".</td>
                            </tr>
                            <tr>
                                <td>dragSelection</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, a rectangle that can be dragged can be used to make a range selection.</td>
                            </tr>
                            <tr>
                                <td>selection</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Selected row in single mode or an array of values in multiple mode.</td>
                            </tr>
                            <tr>
                                <td>selectionAriaLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>A field property from the row to add "Select &#123;field&#125;" and "Unselect &#123;field&#125;" ARIA labels to checkbox/radio buttons.</td>
                            </tr>
                            <tr>
                                <td>contextMenuSelection</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Selected row in single mode or an array of values in multiple mode.</td>
                            </tr>
                            <tr>
                                <td>compareSelectionBy</td>
                                <td>string</td>
                                <td>deepEquals</td>
                                <td>
                                    Algorithm to define if a row is selected, valid values are "equals" that compares by reference and <br /> "deepEquals" that compares all fields.
                                </td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>A property to uniquely identify a record in data.</td>
                            </tr>
                            <tr>
                                <td>metaKeySelection</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>
                                    Defines whether metaKey is requred or not for the selection. <br />
                                    When true metaKey needs to be pressed to select or unselect an item and <br />
                                    when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
                                </td>
                            </tr>
                            <tr>
                                <td>selectionPageOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.</td>
                            </tr>
                            <tr>
                                <td>selectionAutoFocus</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When a selectable row is clicked on RadioButton and Checkbox selection, it automatically decides whether to focus on elements such as checkbox or radio.</td>
                            </tr>
                            <tr>
                                <td>selectOnEdit</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.</td>
                            </tr>
                            <tr>
                                <td>headerColumnGroup</td>
                                <td>ColumnGroup</td>
                                <td>null</td>
                                <td>ColumnGroup component for header.</td>
                            </tr>
                            <tr>
                                <td>footerColumnGroup</td>
                                <td>ColumnGroup</td>
                                <td>null</td>
                                <td>ColumnGroup component for footer.</td>
                            </tr>
                            <tr>
                                <td>rowExpansionTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that receives the row data as the parameter and returns the expanded row content. You can override the rendering of the content by setting options.customRendering = true.</td>
                            </tr>
                            <tr>
                                <td>expandedRows</td>
                                <td>array|object</td>
                                <td>null</td>
                                <td>A collection of rows or a map object row data keys that are expanded.</td>
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
                                <td>
                                    Defines whether the overall table width should change on column resize, <br /> valid values are "fit" and "expand".
                                </td>
                            </tr>
                            <tr>
                                <td>reorderableColumns</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, columns can be reordered using drag and drop.</td>
                            </tr>
                            <tr>
                                <td>reorderableRows</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, rows can be reordered using drag and drop.</td>
                            </tr>
                            <tr>
                                <td>filters</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of FilterMetadata objects to provide external filters.</td>
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
                                <td>scrollDirection</td>
                                <td>string</td>
                                <td>vertical|horizontal</td>
                                <td>Orientation of the scrolling, options are "vertical", "horizontal" and "both".</td>
                            </tr>
                            <tr>
                                <td>virtualScrollerOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    Whether to use the virtualScroller feature. The properties of <Link href="/virtualscroller">VirtualScroller</Link> component can be used like an object in it.
                                    <br />
                                    <b>Note:</b> Currently only vertical orientation mode is supported.
                                </td>
                            </tr>
                            <tr>
                                <td>frozenWidth</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Width of the frozen part in scrollable DataTable.</td>
                            </tr>
                            <tr>
                                <td>frozenValue</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Items of the frozen part in scrollable DataTable.</td>
                            </tr>
                            <tr>
                                <td>csvSeparator</td>
                                <td>string</td>
                                <td>,</td>
                                <td>Character to use as the csv separator.</td>
                            </tr>
                            <tr>
                                <td>exportFilename</td>
                                <td>string</td>
                                <td>download</td>
                                <td>Name of the exported file.</td>
                            </tr>
                            <tr>
                                <td>rowGroupMode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the row grouping mode, valid values are "subheader" and "rowgroup".</td>
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
                                <td>
                                    Function that takes the row data and <br /> returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.
                                </td>
                            </tr>
                            <tr>
                                <td>cellClassName</td>
                                <td>function</td>
                                <td>null</td>
                                <td>
                                    Function that takes the cell data and <br /> returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.
                                </td>
                            </tr>
                            <tr>
                                <td>rowGroupHeaderTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function to provide the content of row group header.</td>
                            </tr>
                            <tr>
                                <td>rowGroupFooterTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function to provide the content of row group footer.</td>
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
                                <td>stateKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of a stateful table to use in state storage.</td>
                            </tr>
                            <tr>
                                <td>stateStorage</td>
                                <td>string</td>
                                <td>session</td>
                                <td>
                                    Defines where a stateful table keeps its state, <br /> valid values are "session" for sessionStorage, "local" for localStorage and "custom".
                                </td>
                            </tr>
                            <tr>
                                <td>editMode</td>
                                <td>string</td>
                                <td>cell</td>
                                <td>Defines editing mode, options are "cell" and "row".</td>
                            </tr>
                            <tr>
                                <td>editingRows</td>
                                <td>array|object</td>
                                <td>null</td>
                                <td>A collection of rows to represent the current editing data in row edit mode.</td>
                            </tr>
                            <tr>
                                <td>exportFunction</td>
                                <td>function</td>
                                <td>null</td>
                                <td>
                                    A function to implement custom export. Need to return string value. <br />
                                    event.data: Field data. <br />
                                    event.field: Column field. event.rowData: Row data. event.column: Column.
                                </td>
                            </tr>
                            <tr>
                                <td>expandableRowGroups</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Makes row groups toggleable, default is false.</td>
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
                            <tr>
                                <td>size</td>
                                <td>string</td>
                                <td>normal</td>
                                <td>Define to set alternative sizes. Valid values: "small", "normal" and "large".</td>
                            </tr>
                            <tr>
                                <td>responsiveLayout</td>
                                <td>string</td>
                                <td>stack</td>
                                <td>Defines the responsive mode, valid options are "stack" and "scroll".</td>
                            </tr>
                            <tr>
                                <td>breakpoint</td>
                                <td>string</td>
                                <td>960px</td>
                                <td>The breakpoint to define the maximum width boundary when using stack responsive layout.</td>
                            </tr>
                            <tr>
                                <td>filterDisplay</td>
                                <td>string</td>
                                <td>menu</td>
                                <td>Layout of the filter elements, valid values are "row" and "menu".</td>
                            </tr>
                            <tr>
                                <td>expandedRowIcon</td>
                                <td>string</td>
                                <td>pi pi-chevron-down</td>
                                <td>Icon of the row toggler to display the row as expanded.</td>
                            </tr>
                            <tr>
                                <td>collapsedRowIcon</td>
                                <td>string</td>
                                <td>pi pi-chevron-up</td>
                                <td>Icon of the row toggler to display the row as collapsed.</td>
                            </tr>
                            <tr>
                                <td>globalFilter</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value of the global filter to use in filtering.</td>
                            </tr>
                            <tr>
                                <td>globalFilterFields</td>
                                <td>string[]</td>
                                <td>null</td>
                                <td>Define fields to be filtered globally.</td>
                            </tr>
                            <tr>
                                <td>globalFilterMatchMode</td>
                                <td>string</td>
                                <td>contains</td>
                                <td>Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".</td>
                            </tr>
                            <tr>
                                <td>showSelectionElement</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that returns a boolean by passing the row data to decide if the radio or checkbox should be displayed per row.</td>
                            </tr>
                            <tr>
                                <td>showRowReorderElement</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that returns a boolean by passing the row data to decide if the row reorder element should be displayed per row.</td>
                            </tr>
                            <tr>
                                <td>isDataSelectable</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that returns a boolean to decide whether the data should be selectable.</td>
                            </tr>
                            <tr>
                                <td>customSaveState</td>
                                <td>function</td>
                                <td>null</td>
                                <td>
                                    A function to implement custom saveState with stateStorage="custom". <br />
                                    state: the object to be stored.{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>customRestoreState</td>
                                <td>function</td>
                                <td>null</td>
                                <td>A function to implement custom restoreState with stateStorage="custom". Need to return state object.</td>
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
                                <td>onSelectionChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Selection object
                                </td>
                                <td>Callback to invoke when selection changes.</td>
                            </tr>
                            <tr>
                                <td>onContextMenuSelectionChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: Selection object
                                </td>
                                <td>Callback to invoke when a row selected with right click.</td>
                            </tr>
                            <tr>
                                <td>onRowToggle</td>
                                <td>event.data: Expanded rows</td>
                                <td>Callback to invoke when a row is toggled or collapsed.</td>
                            </tr>
                            <tr>
                                <td>onColumnResizeEnd</td>
                                <td>
                                    event.element: DOM element of the resized column.
                                    <br />
                                    event.column: Properties of the resized column.
                                    <br />
                                    event.delta: Change in column width
                                </td>
                                <td>Callback to invoke when a column is resized.</td>
                            </tr>
                            <tr>
                                <td>onColumnResizerClick</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.element: DOM element of the column.
                                    <br />
                                    event.column: Properties of the column.
                                </td>
                                <td>Callback to invoke when a resizer element is clicked.</td>
                            </tr>
                            <tr>
                                <td>onColumnResizerDoubleClick</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.element: DOM element of the column.
                                    <br />
                                    event.column: Properties of the column.
                                </td>
                                <td>Callback to invoke when a resizer element is double clicked.</td>
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
                                <td>onPage</td>
                                <td>
                                    event.first: Index of the first row. <br />
                                    event.rows: Rows per page.
                                </td>
                                <td>Callback to invoke on pagination.</td>
                            </tr>
                            <tr>
                                <td>onFilter</td>
                                <td>event.filters: Collection of active filters.</td>
                                <td>Callback to invoke on filtering.</td>
                            </tr>
                            <tr>
                                <td>onAllRowsSelect</td>
                                <td>
                                    event.originalEvent: Browser event. <br />
                                    event.data: Selected rows data. <br />
                                    event.type: Type of the selection, valid value is "all".
                                </td>
                                <td>Callback to invoke when all rows are selected using the header checkbox.</td>
                            </tr>
                            <tr>
                                <td>onAllRowsUnselect</td>
                                <td>
                                    event.originalEvent: Browser event. <br />
                                    event.data: Unselected rows data. <br />
                                    event.type: Type of the selection, valid value is "all".
                                </td>
                                <td>Callback to invoke when all rows are unselected using the header checkbox.</td>
                            </tr>
                            <tr>
                                <td>onRowClick</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Clicked row data <br />
                                    event.index: Clicked row data index
                                </td>
                                <td>Callback to invoke when a row is clicked.</td>
                            </tr>
                            <tr>
                                <td>onRowDoubleClick</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Clicked row data <br />
                                    event.index: Clicked row data index
                                </td>
                                <td>Callback to invoke when a row is double clicked.</td>
                            </tr>
                            <tr>
                                <td>onRowMouseEnter</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Clicked row data <br />
                                    event.index: Clicked row data index
                                </td>
                                <td>Callback to invoke when a row is hovered with mouse.</td>
                            </tr>
                            <tr>
                                <td>onRowMouseLeave</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Clicked row data <br />
                                    event.index: Clicked row data index
                                </td>
                                <td>Callback to invoke when a row is navigated away from with mouse.</td>
                            </tr>
                            <tr>
                                <td>onRowSelect</td>
                                <td>
                                    event.originalEvent: Browser event. <br />
                                    event.data: Selected row data. <br />
                                    event.type: Type of the selection, valid values are "row", "radio" or "checkbox".
                                </td>
                                <td>Callback to invoke when a row is selected.</td>
                            </tr>
                            <tr>
                                <td>onRowUnselect</td>
                                <td>
                                    event.originalEvent: Browser event. <br />
                                    event.data: Unselected row data. <br />
                                    event.type: Type of the selection, valid values are "row", "radio" or "checkbox".
                                </td>
                                <td>Callback to invoke when a row is unselected.</td>
                            </tr>
                            <tr>
                                <td>onRowExpand</td>
                                <td>
                                    event.originalEvent: Browser event. <br />
                                    event.data: Expanded row data.
                                </td>
                                <td>Callback to invoke when a row is expanded.</td>
                            </tr>
                            <tr>
                                <td>onRowCollapse</td>
                                <td>
                                    event.originalEvent: Browser event. <br />
                                    event.data: Collapsed row data.
                                </td>
                                <td>Callback to invoke when a row is collapsed.</td>
                            </tr>
                            <tr>
                                <td>onContextMenu</td>
                                <td>
                                    event.originalEvent: Original event instance. <br />
                                    event.data: Collapsed row data
                                </td>
                                <td>Callback to invoke when a context menu is clicked.</td>
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
                                <td>onRowOrder</td>
                                <td>
                                    event.originalEvent: Browser event. <br />
                                    event.value: New value after reorder <br />
                                    event.dragIndex: Index of the dragged row <br />
                                    event.dropIndex: Index of the drop location
                                </td>
                                <td>Callback to invoke when a row is reordered.</td>
                            </tr>
                            <tr>
                                <td>onValueChange</td>
                                <td>value: Value displayed by the table.</td>
                                <td>Callback to invoke after filtering and sorting to pass the rendered value.</td>
                            </tr>
                            <tr>
                                <td>rowEditValidator</td>
                                <td>data: Editing row data</td>
                                <td>Callback to invoke to validate the editing row when the save icon is clicked on row editing mode.</td>
                            </tr>
                            <tr>
                                <td>onRowEditInit</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Editing row data{' '}
                                </td>
                                <td>Callback to invoke when the editing icon is clicked on row editing mode.</td>
                            </tr>
                            <tr>
                                <td>onRowEditSave</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Editing row data
                                </td>
                                <td>Callback to invoke when the save icon is clicked on row editing mode.</td>
                            </tr>
                            <tr>
                                <td>onRowEditCancel</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Editing row data <br />
                                    event.index: Editing row data index
                                </td>
                                <td>Callback to invoke when the cancel icon is clicked on row editing mode.</td>
                            </tr>
                            <tr>
                                <td>onRowEditChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Editing rows data <br />
                                    event.index: Current editing row data index
                                </td>
                                <td>Callback to invoke when the row editor is programmatically shown/hidden on row editing mode.</td>
                            </tr>
                            <tr>
                                <td>onRowEditComplete</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.data: Original rows data <br />
                                    event.newData: Editing rows data <br />
                                    event.field: Column field <br />
                                    event.index: Current editing row data index{' '}
                                </td>
                                <td>Callback to invoke when row edit is completed.</td>
                            </tr>
                            <tr>
                                <td>onStateSave</td>
                                <td>state: Table state</td>
                                <td>Callback to invoke table state is saved.</td>
                            </tr>
                            <tr>
                                <td>onStateRestore</td>
                                <td>state: Table state</td>
                                <td>Callback to invoke table state is restored.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="methods" label="Methods">
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
                                <td>reset</td>
                                <td>-</td>
                                <td>Resets sort, filter, paginator and columnorder state.</td>
                            </tr>
                            <tr>
                                <td>exportCSV</td>
                                <td>-</td>
                                <td>Exports the data to CSV format.</td>
                            </tr>
                            <tr>
                                <td>filter</td>
                                <td>
                                    value: the filter value <br />
                                    field: the filter field <br />
                                    mode: filter match mode.
                                </td>
                                <td>Filters the data.</td>
                            </tr>
                            <tr>
                                <td>closeEditingCell</td>
                                <td>-</td>
                                <td>Closes the current editing cell when incell editing is enabled.</td>
                            </tr>
                            <tr>
                                <td>resetColumnOrder</td>
                                <td>-</td>
                                <td>Resets column order when reorderableColumns is enabled.</td>
                            </tr>
                            <tr>
                                <td>resetScroll</td>
                                <td>-</td>
                                <td>Resets scroll position.</td>
                            </tr>
                            <tr>
                                <td>restoreTableState</td>
                                <td>state</td>
                                <td>Stored states can be loaded at any time using this method if there is a stateStorage property.</td>
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
                                <td>p-datatable</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-scrollable</td>
                                <td>Container element when table is scrollable.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-wrapper</td>
                                <td>Wrapper of table element.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-table</td>
                                <td>Table element.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-thead</td>
                                <td>Table thead element.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-tbody</td>
                                <td>Table tbody element.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-tfoot</td>
                                <td>Table tfoot element.</td>
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
                                <td>p-frozen-column</td>
                                <td>Frozen column header.</td>
                            </tr>
                            <tr>
                                <td>p-rowgroup-header</td>
                                <td>Header of a rowgroup.</td>
                            </tr>
                            <tr>
                                <td>p-rowgroup-footer</td>
                                <td>Footer of a rowgroup.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-row-expansion</td>
                                <td>Expanded row content.</td>
                            </tr>
                            <tr>
                                <td>p-row-toggler</td>
                                <td>Toggle element for row expansion.</td>
                            </tr>
                            <tr>
                                <td>p-datatable-emptymessage</td>
                                <td>Cell containing the empty message.</td>
                            </tr>
                            <tr>
                                <td>p-row-editor-init</td>
                                <td>Pencil button of row editor.</td>
                            </tr>
                            <tr>
                                <td>p-row-editor-init</td>
                                <td>Save button of row editor.</td>
                            </tr>
                            <tr>
                                <td>p-row-editor-init</td>
                                <td>Cancel button of row editor.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>
                        DataTable uses a <i>table</i> element whose attributes can be extended with the <i>tableProps</i> option. This property allows passing aria roles and attributes like <i>aria-label</i> and <i>aria-describedby</i> to define the
                        table for readers. Default role of the table is <i>table</i>. Header, body and footer elements use <i>rowgroup</i>, rows use <i>row</i> role, header cells have <i>columnheader</i> and body cells use <i>cell</i> roles. Sortable
                        headers utilizer <i>aria-sort</i> attribute either set to "ascending" or "descending".
                    </p>

                    <p>
                        Built-in checkbox and radiobutton components for row selection use <i>checkbox</i> and <i>radiobutton</i> roles respectively with <i>aria-checked</i> state attribute. The label to describe them is retrieved from the
                        <i>aria.selectRow</i> and <i>aria.unselectRow</i> properties of the <Link href="/locale">locale</Link> API. Similarly header checkbox uses <i>selectAll</i> and <i>unselectAll</i> keys. When a row is selected,{' '}
                        <i>aria-selected</i> is set to true on a row.
                    </p>

                    <p>
                        The element to expand or collapse a row is a <i>button</i> with <i>aria-expanded</i> and <i>aria-controls</i> properties. Value to describe the buttons is derived from <i>aria.expandRow</i> and <i>aria.collapseRow</i>{' '}
                        properties of the <Link href="/locale">locale</Link> API.
                    </p>

                    <p>
                        The filter menu button use <i>aria.showFilterMenu</i> and <i>aria.hideFilterMenu</i> properties as <i>aria-label</i> in addition to the <i>aria-haspopup</i>, <i>aria-expanded</i> and <i>aria-controls</i> to define the relation
                        between the button and the overlay. Popop menu has <i>dialog</i> role with <i>aria-modal</i>
                        as focus is kept within the overlay. The operator dropdown use <i>aria.filterOperator</i> and filter constraints dropdown use <i>aria.filterConstraint</i> properties. Buttons to add rules on the other hand utilize{' '}
                        <i>aria.addRule</i> and <i>aria.removeRule</i> properties. The footer buttons similarly use
                        <i>aria.clear</i> and <i>aria.apply</i> properties. <i>filterInputProps</i> of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also
                        may define your own aria labels as well.
                    </p>

                    <p>
                        Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with <i>aria.editRow</i>, <i>aria.cancelEdit</i> and <i>aria.saveEdit</i>{' '}
                        used for the <i>aria-label</i>.
                    </p>

                    <p>
                        Paginator is a standalone component used inside the DataTable, refer to the <Link href="/paginator">paginator</Link> for more information about the accessibility features.
                    </p>

                    <h5>Sortable Headers Keyboard Support</h5>
                    <p>
                        Any button element inside the DataTable used for cases like filter, row expansion, edit are tabbable and can be used with <i>space</i> and <i>enter</i> keys.
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

                    <h6>Filter Menu Keyboard Support</h6>
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
                                    <td>Moves through the elements inside the popup.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>Hides the popup.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Selection Keyboard Support</h6>
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
                                    <td>Moves focus to the first selected row, if there is none then first row receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous row.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next row.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Toggles the selected state of the focused row depending on the metaKeySelection setting.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Toggles the selected state of the focused row depending on the metaKeySelection setting.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Moves focus to the first row.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Moves focus to the last row.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next row and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous row and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>space</i>
                                    </td>
                                    <td>Selects the rows between the most recently selected row and the focused row.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>control</i> + <i>shift</i> + <i>home</i>
                                    </td>
                                    <td>Selects the focused rows and all the options up to the first one.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>control</i> + <i>shift</i> + <i>end</i>
                                    </td>
                                    <td>Selects the focused rows and all the options down to the last one.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>control</i> + <i>a</i>
                                    </td>
                                    <td>Selects all rows.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
