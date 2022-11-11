import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
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
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Methods</h3>
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
                            <td>refresh</td>
                            <td>-</td>
                            <td>Refreshes the position and size of the scrollbar.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
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
                            <td>p-scrollpanel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-wrapper</td>
                            <td>Wrapper of content section.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-content</td>
                            <td>Content section.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-bar</td>
                            <td>Scrollbar handle.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-bar-x</td>
                            <td>Scrollbar handle of a horizontal bar.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-bar-y</td>
                            <td>Scrollbar handle of a vertical bar</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Accessibility</h3>
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Scrollbars of the ScrollPanel has a <i>scrollbar</i> role along with the <i>aria-controls</i> attribute that refers to the id of the scrollable content container and the <i>aria-orientation</i> to indicate the orientation of
                        scrolling.
                    </p>

                    <h4>Header Keyboard Support</h4>
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
                                        <i>down arrow</i>
                                    </td>
                                    <td>Scrolls content down when vertical scrolling is available.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Scrolls content up when vertical scrolling is available.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left</i>
                                    </td>
                                    <td>Scrolls content left when horizontal scrolling is available.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right</i>
                                    </td>
                                    <td>Scrolls content right when horizontal scrolling is available.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
        </>
    );
}
