import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="propertiesofdataviewlayout" label="Properties of DataViewLayoutOptions">
                <h5>Properties of DataViewLayoutOptions</h5>
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
                                <td>layout</td>
                                <td>string</td>
                                <td>list</td>
                                <td>Layout of the items, valid values are "list" and "grid".</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>A property to uniquely identify an item.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="eventsofdataview" label="Events of DataViewLayoutOptions">
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
                                <td>onChange</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value = layout mode e.g. "list" or "grid"
                                </td>
                                <td>Callback to invoke when layout mode is changed.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="paginator" label="Paginator">
                <p>
                    Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display. Visit the <Link href="/paginator"> paginator</Link>{' '}
                    paginator component for more information about the available properties.
                </p>

                <p>
                    Pagination can either be used in Controlled or Uncontrolled manner. In controlled mode, <i>first</i> and <i>onPage</i> properties needs to be defined to control the pagination state.
                </p>

                <CodeHighlight>
                    {`
<DataView value={products} layout={layout} itemTemplate={itemTemplate} paginator rows={10} first={first} onPage={(e) => setFirst(e.first)}></DataView>
`}
                </CodeHighlight>

                <p>
                    In uncontrolled mode, only <i>paginator</i> property needs to be enabled. Initial page state can be still be provided using the <i>first</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in
                    further updates. If you programmatically need to update the paginator, prefer to use the component as controlled.
                </p>
                <CodeHighlight>
                    {`
<DataView value={products} layout={layout} itemTemplate={itemTemplate} paginator rows={10}></DataView>
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="sorting" label="Sorting">
                <p>
                    <i>sortField</i> and <i>sortOrder</i> properties are available for sorting functionality, for flexibility there is no built-in UI available so that a custom UI can be used for the sorting element. Here is an example that uses a
                    dropdown where simply updating the sortField-sortOrder bindings of the DataView initiates sorting.
                </p>

                <CodeHighlight lang="js">
                    {`
const sortOptions = [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
];

const header = (
    <div className="grid">
        <div className="col-12 md:col-4">
            <Dropdown options={sortOptions} value={sortKey} placeholder="Sort By" onChange={onSortChange} />
        </div>
    </div>
);

<DataView value={products} header={header} sortOrder={sortOrder} sortField={sortField} />

`}
                </CodeHighlight>

                <CodeHighlight className="js">
                    {`
const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        setSortOrder(-1);
        setSortField(value.substring(1, value.length));
        setSortKey(value);
    }
    else {
        setSortOrder(1);
        setSortField(value);
        setSortKey(value);
    }
}
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="lazyloading" label="Lazy Loading">
                <p>
                    Lazy loading is useful to deal with huge datasets, in order to implement lazy loading use the pagination in controlled mode and utilize the <i>onPage</i> callback to load your data from the backend. Pagination in this case needs
                    to display the logical number of records so bind this value to the <i>totalRecords</i> property so that paginator can display itself according to the total records although you'd only need to load the data of the current page.
                    Refer to <Link href="/datatable/lazy">DataTable</Link> lazy loading for a sample implementation.
                </p>
            </DocSubSection>

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
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>JSX or string</td>
                                <td>null</td>
                                <td>Header content of the component.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>JSX or string</td>
                                <td>null</td>
                                <td>Footer content of the component.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of objects to display.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>list</td>
                                <td>Layout of the items, valid values are "list" and "grid".</td>
                            </tr>
                            <tr>
                                <td>rows</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of rows to display per page.</td>
                            </tr>
                            <tr>
                                <td>first</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Index of the first record to render.</td>
                            </tr>
                            <tr>
                                <td>totalRecords</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Number of total records, defaults to length of value when not defined.</td>
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
                                <td>(&123;currentPage&125; of &123;totalPages&125;)</td>
                                <td>Template of the current page report element.</td>
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
                                <td>emptyMessage</td>
                                <td>string</td>
                                <td>No records found.</td>
                                <td>Text to display when there is no data.</td>
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
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>lazy</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if data is loaded and interacted with in lazy manner.</td>
                            </tr>
                            <tr>
                                <td>gutter</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the grid structure in the container has gutter. Default value is false.</td>
                            </tr>
                            <tr>
                                <td>itemTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets the option along with the layout mdoe and returns the content.</td>
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
                                <td>onPage</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.first: Index of the first records on page. <br />
                                    event.rows: Number of records to display per page.
                                </td>
                                <td>Callback to invoke on pagination.</td>
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
                                <td>p-dataview</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-list</td>
                                <td>Container element in list layout.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-grid</td>
                                <td>Container element in grid layout.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-header</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-footer</td>
                                <td>Footer section.</td>
                            </tr>
                            <tr>
                                <td>p-dataview-content</td>
                                <td>Container of items.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        The container element that wraps the layout options buttons has a <i>group</i> role whereas each button element uses <i>button</i> role and <i>aria-pressed</i> is updated depending on selection state. Values to describe the
                        buttons are derived from the <i>aria.listView</i> and <i>aria.gridView</i> properties of the <Link href="/locale">locale</Link> API respectively.
                    </p>

                    <p>
                        Refer to <Link href="/paginator">paginator</Link> accessibility documentation for the paginator of the component.
                    </p>

                    <h4>Keyboard Support</h4>
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
                                    <td>Moves focus to the buttons.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Toggles the checked state of a button.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
