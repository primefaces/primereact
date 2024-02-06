import { CodeHighlight } from '@/components/doc/common/codehighlight';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Sidebar component uses <i>complementary</i> role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like <i>aria-labelledby</i> can be added. In
                addition <i>aria-modal</i> is added since focus is kept within the sidebar when opened.
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

<Sidebar id="sidebar" visible={visible} onHide={() => setVisible(false)} role="region">
Content
</Sidebar>
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
        </DocSectionText>
    );
}
