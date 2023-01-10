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
                        Sidebar component uses <i>complementary</i> role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like <i>aria-labelledby</i> can be
                        added. In addition <i>aria-modal</i> is added since focus is kept within the sidebar when opened.
                    </p>
                    <p>
                        It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary.
                    </p>
                    <p>
                        Trigger element also requires <i>aria-expanded</i> and <i>aria-controls</i> to be handled explicitly.
                    </p>

                    <CodeHighlight>
                        {`
<Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} aria-controls={visible ? 'sbar' : null} aria-expanded={visible ? true : false}/>

<Sidebar id="sbar" visible={visible} onHide={() => setVisible(false)} role="region">
    Content
</Sidebar>
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
                                    <td>Moves focus to the next the focusable element within the sidebar.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>tab</i>
                                    </td>
                                    <td>Moves focus to the previous the focusable element within the sidebar.</td>
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

                    <h4>Close Button Keyboard Support</h4>
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
                                    <td>Closes the sidebar.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Closes the sidebar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
