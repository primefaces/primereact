import { DocSectionText } from '@/components/doc/common/docsectiontext';

import { CodeHighlight } from '@/components/doc/common/codehighlight';
import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Dialog component uses <i>dialog</i> role along with <i>aria-labelledby</i> referring to the header element however any attribute is passed to the root element so you may use <i>aria-labelledby</i> to override this default behavior. In
                addition <i>aria-modal</i> is added since focus is kept within the popup.
            </p>
            <p>
                It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary.
            </p>
            <p>
                Trigger element also requires <i>aria-expanded</i> and <i>aria-controls</i> to be handled explicitly.
            </p>
            <p>
                Close element is a <i>button</i> with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <Link href="/locale">locale</Link> API by default, you may use
                <i>closeButtonProps</i> to customize the element and override the default <i>aria-label</i>.
            </p>
            <CodeHighlight>
                {`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} aria-controls={visible ? 'dlg' : null} aria-expanded={visible ? true : false} />

<Dialog id="dlg" header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
<p>Content</p>
</Dialog>
`}
            </CodeHighlight>

            <h3>Overlay Keyboard Support</h3>
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
                            <td>Moves focus to the next the focusable element within the dialog.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>shift</i> + <i>tab</i>
                            </td>
                            <td>Moves focus to the previous the focusable element within the dialog.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>escape</i>
                            </td>
                            <td>
                                Closes the dialog if <i>closeOnEscape</i> is true.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Close Button Keyboard Support</h3>
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
                            <td>Closes the dialog.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Closes the dialog.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
