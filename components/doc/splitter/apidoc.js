import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>size</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Size of the element relative to 100%.</td>
                            </tr>
                            <tr>
                                <td>minSize</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Minimum size of the element relative to 100%.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>ClassName of the component.</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>ClassName of the component.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Orientation of the panels, valid values are "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>gutterSize</td>
                                <td>number</td>
                                <td>4</td>
                                <td>Size of the divider in pixels.</td>
                            </tr>
                            <tr>
                                <td>stateKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Storage identifier of a stateful Splitter.</td>
                            </tr>
                            <tr>
                                <td>stateStorage</td>
                                <td>string</td>
                                <td>session</td>
                                <td>Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="eventsofsplitter" label="Events of Splitter">
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
                                <td>onResizeEnd</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.sizes: Sizes of the panels as an array
                                </td>
                                <td>Callback to invoke when resize ends.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>Following is the list of structural style classes</p>
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
                                <td>p-splitter</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-splitter</td>
                                <td>Container element during resize.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-horizontal</td>
                                <td>Container element with horizontal layout.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-vertical</td>
                                <td>Container element with vertical layout.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-panel</td>
                                <td>Splitter panel element.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-gutter</td>
                                <td>Gutter element to use when resizing the panels.</td>
                            </tr>
                            <tr>
                                <td>p-splitter-gutter-handle</td>
                                <td>Handl element of the gutter.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Splitter bar defines <i>separator</i> as the role with <i>aria-orientation</i> set to either horizontal or vertical.
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
                                    <td>Moves focus through the splitter bar.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves a vertical splitter down.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves a vertical splitter up.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>Moves a vertical splitter to the left.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>Moves a vertical splitter to the right.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
