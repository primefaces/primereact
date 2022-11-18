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
                <p>These properties are extended from Dialog properties.</p>
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
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the confirm dialog.</td>
                            </tr>
                            <tr>
                                <td>message</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Message of the confirmation.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon to display next to the message.</td>
                            </tr>
                            <tr>
                                <td>acceptLabel</td>
                                <td>string</td>
                                <td>Yes</td>
                                <td>Label of the accept button.</td>
                            </tr>
                            <tr>
                                <td>rejectLabel</td>
                                <td>string</td>
                                <td>No</td>
                                <td>Label of the reject button.</td>
                            </tr>
                            <tr>
                                <td>acceptIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the accept button.</td>
                            </tr>
                            <tr>
                                <td>rejectIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the reject button.</td>
                            </tr>
                            <tr>
                                <td>acceptClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the accept button.</td>
                            </tr>
                            <tr>
                                <td>rejectClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the reject button.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the confirm dialog.</td>
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
                                <td>accept</td>
                                <td>null</td>
                                <td>Callback to execute when action is confirmed.</td>
                            </tr>
                            <tr>
                                <td>reject</td>
                                <td>null</td>
                                <td>Callback to execute when action is rejected.</td>
                            </tr>

                            <tr>
                                <td>onHide</td>
                                <td>
                                    result: Indicates with which selection the dialog was closed. <br />
                                    Valid values are 'accept', 'reject' and undefined (using close icon).
                                </td>
                                <td>Callback to invoke when confirm dialog is hidden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                                <td>p-confirm-dialog</td>
                                <td>Container element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        ConfirmDialog component uses <i>alertdialog</i> role along with <i>aria-labelledby</i> referring to the header element however any attribute is passed to the root element so you may use <i>aria-labelledby</i> to override this
                        default behavior. In addition <i>aria-modal</i> is added since focus is kept within the popup.
                    </p>
                    <p>
                        It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary.
                    </p>

                    <p>
                        When <i>confirm</i> function is used and a trigger is passed as a parameter, ConfirmDialog adds <i>aria-expanded</i> state attribute and <i>aria-controls</i> to the trigger so that the relation between the trigger and the
                        popup is defined.
                    </p>

                    <CodeHighlight lang="js">
                        {`
const confirm = (event) => {
    confirmDialog({
        trigger: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => acceptFunc(),
        reject: () => rejectFunc()
    });
}

<Button onClick={confirm} icon="pi pi-check" label="Confirm"></Button>

<ConfirmDialog />
`}
                    </CodeHighlight>

                    <p>
                        If the dialog is controlled with the <i>visible</i> property <i>aria-expanded</i> and <i>aria-controls</i> need to be handled explicitly.
                    </p>

                    <CodeHighlight>
                        {`
<ConfirmDialog id="dlg_confirmation" visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />

<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" aria-controls={visible ? 'dlg_confirmation' : null} aria-expanded={visible ? true : false} />
`}
                    </CodeHighlight>

                    <h4>Overlay Keyboard Support</h4>
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
                                    <td>Moves focus to the next the focusable element within the popup.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>tab</i>
                                    </td>
                                    <td>Moves focus to the previous the focusable element within the popup.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>escape</i>
                                    </td>
                                    <td>Closes the popup and moves focus to the trigger.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>Buttons Keyboard Support</h4>
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
                                        <i>enter</i>
                                    </td>
                                    <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
