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
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Type of the chart.</td>
                            </tr>
                            <tr>
                                <td>data</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Data to display.</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Options to customize the chart.</td>
                            </tr>
                            <tr>
                                <td>plugins</td>
                                <td>any[]</td>
                                <td>null</td>
                                <td>Used to custom plugins of the chart.</td>
                            </tr>
                            <tr>
                                <td>width</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Width of the chart in non-responsive mode.</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Height of the chart in non-responsive mode.</td>
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
                                <td>ariaLabel</td>
                                <td>string</td>
                                <td>options.plugins.title.text</td>
                                <td>ARIA label for the chart canvas. Defaults to options.plugins.title.text if available.</td>
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
                                <td>refresh</td>
                                <td>-</td>
                                <td>Redraws the graph.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
