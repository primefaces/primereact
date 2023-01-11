import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
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
