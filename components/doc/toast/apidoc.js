import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="messageapi" label="Message API">
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
                                <td>severity</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Severity of the message.</td>
                            </tr>
                            <tr>
                                <td>summary</td>
                                <td>element/string</td>
                                <td>null</td>
                                <td>Summary content of the message.</td>
                            </tr>
                            <tr>
                                <td>detail</td>
                                <td>element/string</td>
                                <td>null</td>
                                <td>Detail content of the message.</td>
                            </tr>
                            <tr>
                                <td>content</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Custom content of the message. If enabled, summary and details properties are ignored.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the message.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the message.</td>
                            </tr>
                            <tr>
                                <td>contentClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the message content.</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the message content.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the message can be closed manually using the close icon.</td>
                            </tr>
                            <tr>
                                <td>sticky</td>
                                <td>element</td>
                                <td>null</td>
                                <td>When enabled, message is not removed automatically.</td>
                            </tr>
                            <tr>
                                <td>life</td>
                                <td>number</td>
                                <td>3000</td>
                                <td>Delay in milliseconds to close the message automatically.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="severitiesapi" label="Severities">
                <p>There are four possible values for the severity of a message.</p>

                <ul>
                    <li>success</li>
                    <li>info</li>
                    <li>warn</li>
                    <li>error</li>
                </ul>
            </DocSubSection>

            <DocSubSection id="showingmessages" label="Showing Messages">
                <p>Show method accepts either a single message or an array of messages.</p>

                <CodeHighlight>
                    {`
<Toast ref={toast}></Toast>

<Button onClick={showSuccess} label="Success" className="p-button-success" />
<Button onClick={showInfo} label="Info" className="p-button-info" />
<Button onClick={showWarn} label="Warn" className="p-button-warning" />
<Button onClick={showError} label="Error" className="p-button-danger" />
<Button onClick={showMultiple} label="Multiple" />
`}
                </CodeHighlight>

                <CodeHighlight lang="js">
                    {`
showSuccess() {
    toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
}

showInfo() {
    toast.current.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
}

showWarn() {
    toast.current.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
}

showError() {
    toast.current.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
}

showMultiple() {
    toast.current.show([
        {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]);
}
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="closable" label="Closable">
                <p>Toasts are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set closable to false.</p>

                <CodeHighlight lang="js">
                    {`
toast.current.show({closable: false, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="sticky" label="Sticky">
                <p>
                    Messages are cleared automatically after the timeout defined by <i>life</i> property which is 3 seconds by default. Use <i>sticky</i> mode to make them stay until they are manually removed.
                </p>

                <CodeHighlight lang="js">
                    {`
//sticky
toast.current.show({sticky: true, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});

//automatically removed after 5 seconds
toast.current.show({life: 5000, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="positionapi" label="Position">
                <p>
                    There are four positions available for the toast container defined by the <i>position</i> property that defaults to "top-right". Other valid values are "top-left", "bottom-left" and "bottom-right"
                </p>

                <CodeHighlight>
                    {`
<Toast ref={toast} position="top-left"></Toast>
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="clearingmessages" label="Clearing Messages">
                <p>
                    <i>clear()</i> method removes all messages from Toast.
                </p>

                <CodeHighlight>
                    {`
toast.current.clear();
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="replacingmessages" label="Replacing Messages">
                <p>
                    <i>replace(newMessages)</i> method adds new messages after removing all old messages.
                </p>

                <CodeHighlight lang="js">
                    {`
toast.current.replace(newMessages);
`}
                </CodeHighlight>
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
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to add to initial layering of PrimeReact components which start from 1000.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>topright</td>
                                <td>Position of the toast in viewport, valid values are "top-right", "top-left", "bottom-left" and "bottom-right".</td>
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
                            <tr>
                                <td>appendTo</td>
                                <td>DOM element | string</td>
                                <td>self</td>
                                <td>
                                    DOM element instance where the component should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="event" label="Events">
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
                                <td>onRemove</td>
                                <td>message: Removed message </td>
                                <td>Callback to invoke when a message is removed.</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>message: Clicked message </td>
                                <td>Callback to invoke when a message gets clicked.</td>
                            </tr>
                            <tr>
                                <td>onShow</td>
                                <td>-</td>
                                <td>Callback to invoke when message becomes visible.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Callback to invoke when message becomes hidden.</td>
                            </tr>
                            <tr>
                                <td>onMouseEnter</td>
                                <td>event: Mouse Event </td>
                                <td>Callback to invoke when a message gets focus with mouse.</td>
                            </tr>
                            <tr>
                                <td>onMouseLeave</td>
                                <td>event: Mouse Event </td>
                                <td>Callback to invoke when a message loses focus with mouse.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
