import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level
                of reader support in the upcoming versions.
            </p>

            <h3>Keyboard Support</h3>
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
                            <td>Moves focus through the focusable elements within the chart.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>enter</i>
                            </td>
                            <td>Toggles the expanded state of a node.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Toggles the expanded state of a node.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>numpad enter</i>
                            </td>
                            <td>Toggles the expanded state of a node.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
