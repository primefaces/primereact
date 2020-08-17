import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class PaginatorDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';
import './PaginatorDemo.scss';

export class PaginatorDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first: 0,
            rows: 10,
            first2: 0
        };

        this.onPageChange = this.onPageChange.bind(this);
        this.onPageChange2 = this.onPageChange2.bind(this);
    }

    onPageChange(event) {
        this.setState({
            first: event.first,
            rows: event.rows
        });
    }

    onPageChange2(event) {
        this.setState({
            first2: event.first,
            rows2: event.rows
        });
    }

    render() {
        const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => this.setState({ first2: 0 })} />;
        const rightContent = <Button type="button" icon="pi pi-search" />;

        return (
            <div className="paginator-demo">
                <div className="card">
                    <h5>Basic</h5>
                    <Paginator first={this.state.first} rows={this.state.rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={this.onPageChange}></Paginator>

                    <h5>Custom Template</h5>
                    <Paginator first={this.state.first2} rows={1} totalRecords={12} onPageChange={this.onPageChange2}
                        leftContent={leftContent} rightContent={rightContent}
                        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

                    <div className="image-gallery">
                        <img alt={this.state.first2} src={\`showcase/demo/images/nature/nature\${this.state.first2 + 1}.jpg\`} />
                    </div>
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {Paginator} from 'primereact/paginator';

const PaginatorDemo = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const onPageChange2 = (event) => {
        setFirst2(event.first);
        setRows2(event.rows);
    };

    return (
        <div>
            <h5>Default</h5>
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={onPageChange}></Paginator>

            <h5>Custom Template</h5>
            <Paginator first={first2} rows={rows2} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={onPageChange2}
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {Paginator} from 'primereact/paginator';

const PaginatorDemo = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(10);

    const onPageChange = (event: { first: number, rows: number }) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const onPageChange2 = (event: { first: number, rows: number }) => {
        setFirst2(event.first);
        setRows2(event.rows);
    };

    return (
        <div>
            <h5>Default</h5>
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={onPageChange}></Paginator>

            <h5>Custom Template</h5>
            <Paginator first={first2} rows={rows2} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={onPageChange2}
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Paginator } from 'primereact/paginator';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Paginator is used as a controlled component with <i>first</i>, <i>rows</i> (optional) and <i>onPageChange</i> properties.</p>

<CodeHighlight>
{`
<Paginator first={this.state.first} rows={this.state.rows} onPageChange={(e) => this.setState({first: e.first})}></Paginator>
`}
</CodeHighlight>

                        <h5>Rows and TotalRecords</h5>
                        <p>Rows and TotalRecords define how many pages the paginator should display. Paginator below will have 10 pages.</p>
<CodeHighlight>
{`
<Paginator rows={10} totalRecords={120} first={this.state.first} onPageChange={(e) => this.setState({first: e.first})}></Paginator>
`}
</CodeHighlight>

                        <h5>Rows Per Page</h5>
                        <p>Number of items per page can be changed by the user using a dropdown if you define rowsPerPageOptions as an array of possible values. In this case,
                        rows property should also be updated
            </p>
<CodeHighlight>
{`
<Paginator first={this.state.first} rows={this.state.rows} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={(e) => this.setState({first: e.first, rows: e.rows})}></Paginator>
`}
</CodeHighlight>

                        <h5>Template</h5>
                        <p>Paginator elements can be customized using the template property using the predefined keys, default value is
                        "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that
            can be placed inside a paginator.</p>

                        <ul>
                            <li>FirstPageLink</li>
                            <li>PrevPageLink</li>
                            <li>PageLinks</li>
                            <li>NextPageLink</li>
                            <li>LastPageLink</li>
                            <li>RowsPerPageDropdown</li>
                            <li>CurrentPageReport</li>
                        </ul>

                        <h5>CurrentPageReport</h5>
                        <p>Current page report item in the itemplate displays information about the pagination state. Default value is (&#123;currentPage&#125; of &#123;totalPages&#125;)
                whereas available placeholders are the following;</p>
                        <ul>
                            <li>&#123;currentPage&#125;</li>
                            <li>&#123;totalPages&#125;</li>
                            <li>&#123;rows&#125;</li>
                            <li>&#123;first&#125;</li>
                            <li>&#123;last&#125;</li>
                            <li>&#123;totalRecords&#125;</li>
                        </ul>

                        <h5>Properties</h5>
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
                                        <td>totalRecords</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Number of total records.</td>
                                    </tr>
                                    <tr>
                                        <td>rows</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Data count to display per page.</td>
                                    </tr>
                                    <tr>
                                        <td>first</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Zero-relative number of the first row to be displayed.</td>
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
                                        <td>style</td>
                                        <td>string</td>
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
                                        <td>template</td>
                                        <td>string</td>
                                        <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                                        <td>Template of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>leftContent</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content to inject into the left side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>rightContent</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content to inject into the right side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>currentPageReportTemplate</td>
                                        <td>string</td>
                                        <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                                        <td>Template of the current page report element. Available placeholders are
                                        &#123;currentPage&#125;,&#123;totalPages&#125;,&#123;rows&#125;,&#123;first&#125;,&#123;last&#125; and &#123;totalRecords&#125;
                            </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events</h5>
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
                                        <td>onPageChange</td>
                                        <td>event.page: New page number <br />
                                event.first: Index of first record <br />
                                event.rows: Number of rows to display in new page <br />
                                event.page: Index of the new page <br />
                                event.pageCount: Total number of pages
                            </td>
                                        <td>Callback to invoke when page changes, the event object contains information about the new state.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                                        <td>p-paginator</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-first</td>
                                        <td>First page element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-prev</td>
                                        <td>Previous page element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-pages</td>
                                        <td>Container of page links.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-page</td>
                                        <td>A page link.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-next</td>
                                        <td>Next pge element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-last</td>
                                        <td>Last page element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-rpp-options</td>
                                        <td>Rows per page dropdown.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="PaginatorDemo" sources={this.sources} />
<CodeHighlight lang="scss">
{`
.paginator-demo {
    .p-button.p-button-icon-only {
        border-radius: 0;
    }

    .image-gallery {
        text-align: center;
        padding: 1rem;
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
