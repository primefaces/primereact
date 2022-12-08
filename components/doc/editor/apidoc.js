import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
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
                                <td>string</td>
                                <td>null</td>
                                <td>Value of the content.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the container.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the container.</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Placeholder text to show when editor is empty.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to instantiate the editor to read-only mode.</td>
                            </tr>
                            <tr>
                                <td>modules</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    Modules configuration, see <a href="http://quilljs.com/docs/modules/">here</a> for available options.
                                </td>
                            </tr>
                            <tr>
                                <td>formats</td>
                                <td>string[]</td>
                                <td>null</td>
                                <td>
                                    Whitelist of formats to display, see <a href="http://quilljs.com/docs/formats/">here</a> for available options.
                                </td>
                            </tr>
                            <tr>
                                <td>headerTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Style and modules of the toolbar.</td>
                            </tr>
                            <tr>
                                <td>maxLength</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Maximum number of characters the editor will accept.</td>
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
                                <td>onTextChange</td>
                                <td>
                                    event.delta: Representation of the change.
                                    <br />
                                    event.source: Source of change. Will be either "user" or "api".
                                    <br />
                                    event.htmlValue: Current value as html.
                                    <br />
                                    event.textValue: Current value as text.
                                    <br />
                                </td>
                                <td>Callback to invoke when text of editor changes.</td>
                            </tr>
                            <tr>
                                <td>onSelectionChange</td>
                                <td>
                                    event.range: Object with index and length keys indicating where the selection exists.
                                    <br />
                                    event.oldRange: Object with index and length keys indicating where the previous selection was.
                                    <br />
                                    event.source: Source of change. Will be either "user" or "api".
                                </td>
                                <td>Callback to invoke when selected text of editor changes.</td>
                            </tr>
                            <tr>
                                <td>onLoad</td>
                                <td>quill: Quill instance</td>
                                <td>Callback to invoke when the quill modules are loaded.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Refer to <a href="http://beta.quilljs.com/docs/api/#events">Quill documentation</a> for more information.
                </p>
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
                                <td>p-editor-container</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-editor-toolbar</td>
                                <td>Toolbar of the editor</td>
                            </tr>
                            <tr>
                                <td>p-editor-content</td>
                                <td>Editable area</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <p>
                        Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support for{' '}
                        <a href="https://github.com/quilljs/quill/issues/1031">dropdowns</a> in the toolbar that may be overcome with a custom toolbar.
                    </p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
