import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Chip uses the <i>label</i> property as the default <i>aria-label</i>, since any attribute is passed to the root element <i>aria-labelledby</i> or <i>aria-label</i> can be used to override the default behavior. Removable chips have a{' '}
                <i>tabIndex</i> and focusable with the tab key.
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
                                <i>backspace</i>
                            </td>
                            <td>Hides removable.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
