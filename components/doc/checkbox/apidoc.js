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
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the inner native radiobutton.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value of the checkbox.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the checkbox element .</td>
                            </tr>
                            <tr>
                                <td>checked</td>
                                <td>any</td>
                                <td>false</td>
                                <td>Specifies whether a checkbox should be checked or not.</td>
                            </tr>
                            <tr>
                                <td>trueValue</td>
                                <td>any</td>
                                <td>true</td>
                                <td>Value in checked state.</td>
                            </tr>
                            <tr>
                                <td>falseValue</td>
                                <td>any</td>
                                <td>false</td>
                                <td>Value in unchecked state.</td>
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
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element value cannot be altered.</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the value cannot be changed.</td>
                            </tr>
                            <tr>
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>pi pi-check</td>
                                <td>Icon class of the checkbox icon.</td>
                            </tr>
                            <tr>
                                <td>tooltip</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Content of the tooltip.</td>
                            </tr>
                            <tr>
                                <td>tooltipOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
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
                                <td>onChange</td>
                                <td>
                                    event.originalEvent: Original event <br />
                                    event.value: Value of the checkbox <br />
                                    event.checked: Checked state as a boolean.
                                </td>
                                <td>Callback to invoke on value change</td>
                            </tr>
                            <tr>
                                <td>onMouseDown</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke to when a mouse button is pressed.</td>
                            </tr>
                            <tr>
                                <td>onContextMenu</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on right-click.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
