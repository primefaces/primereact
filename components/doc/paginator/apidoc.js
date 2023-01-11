import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
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
                                <td>string|object</td>
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
                                <td>Template of the current page report element. Available placeholders are &#123;currentPage&#125;,&#123;totalPages&#125;,&#123;rows&#125;,&#123;first&#125;,&#123;last&#125; and &#123;totalRecords&#125;</td>
                            </tr>
                            <tr>
                                <td>dropdownAppendTo</td>
                                <td>DOM element | string</td>
                                <td>document.body</td>
                                <td>
                                    DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                                </td>
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
                                <td>onPageChange</td>
                                <td>
                                    event.page: New page number <br />
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
            </DocSubSection>
        </>
    );
}
