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
                <p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are as follows;</p>
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
                                <td>Identifier of the input element.</td>
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
                                <td>Style class of the component.</td>
                            </tr>
                            <tr>
                                <td>trigger</td>
                                <td>string|array</td>
                                <td>@</td>
                                <td>Set trigger keyword.</td>
                            </tr>
                            <tr>
                                <td>suggestions</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of suggestions to display.</td>
                            </tr>
                            <tr>
                                <td>field</td>
                                <td>string|array</td>
                                <td>null</td>
                                <td>Field of a suggested object to resolve and display.</td>
                            </tr>
                            <tr>
                                <td>inputStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the input field.</td>
                            </tr>
                            <tr>
                                <td>inputClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the input field.</td>
                            </tr>
                            <tr>
                                <td>panelClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the overlay panel element.</td>
                            </tr>
                            <tr>
                                <td>panelStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the overlay panel element.</td>
                            </tr>
                            <tr>
                                <td>scrollHeight</td>
                                <td>string</td>
                                <td>200px</td>
                                <td>Maximum height of the suggestions panel.</td>
                            </tr>
                            <tr>
                                <td>autoHighlight</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When enabled, highlights the first item in the list by default.</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Placeholder text for the input.</td>
                            </tr>
                            <tr>
                                <td>delay</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Delay between keystrokes to wait before sending a query.</td>
                            </tr>
                            <tr>
                                <td>headerTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of header.</td>
                            </tr>
                            <tr>
                                <td>footerTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of footer.</td>
                            </tr>
                            <tr>
                                <td>itemTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Custom template for the items.</td>
                            </tr>
                            <tr>
                                <td>transitionOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    The properties of{' '}
                                    <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">
                                        CSSTransition
                                    </a>{' '}
                                    can be customized, except for "nodeRef" and "in" properties.
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
                                <td>onChange</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when value changes.</td>
                            </tr>
                            <tr>
                                <td>onFocus</td>
                                <td>event: Browser event.</td>
                                <td>Callback to invoke when the element receives focus.</td>
                            </tr>
                            <tr>
                                <td>onBlur</td>
                                <td>event: Browser event.</td>
                                <td>Callback to invoke when the element loses focus.</td>
                            </tr>
                            <tr>
                                <td>onShow</td>
                                <td>-</td>
                                <td>Callback to invoke when overlay panel becomes visible.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Callback to invoke when overlay panel becomes hidden.</td>
                            </tr>
                            <tr>
                                <td>onSearch</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.trigger: Current trigger keyword.
                                </td>
                                <td>Callback to invoke when search. </td>
                            </tr>
                            <tr>
                                <td>onSelect</td>
                                <td>
                                    event.originalEvent: Browser event
                                    <br />
                                    event.suggestion: Selected item
                                </td>
                                <td>Callback to invoke when selection changes.</td>
                            </tr>
                            <tr>
                                <td>onInput</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on input event of input field.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
