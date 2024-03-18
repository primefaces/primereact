import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    const code = {
        basic: `
<span id="dd1">Options</span>
<CascadeSelect aria-labelledby="dd1" />

<CascadeSelect aria-label="Options" />
    `
    };

    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. The cascadeselect element has a <i>combobox</i> role in addition to <i>aria-haspopup</i> and <i>aria-expanded</i>{' '}
                attributes. The relation between the combobox and the popup is created with <i>aria-controls</i> that refers to the id of the popup.
            </p>
            <p>
                The popup list has an id that refers to the <i>aria-controls</i> attribute of the <i>combobox</i> element and uses <i>tree</i> as the role. Each list item has a <i>treeitem</i> role along with <i>aria-label</i>, <i>aria-selected</i>{' '}
                and <i>aria-expanded</i> attributes. The container element of a treenode has the <i>group</i> role. The <i>aria-setsize</i>, <i>aria-posinset</i> and <i>aria-level</i> attributes are calculated implicitly and added to each treeitem.
            </p>

            <p>
                If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the filter input element.
            </p>

            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />

            <h3>Closed State Keyboard Support</h3>
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
                            <td>Moves focus to the cascadeselect element.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>down arrow</i>
                            </td>
                            <td>Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Popup Keyboard Support</h3>
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
                            <td>Hides the popup and moves focus to the next tabbable element.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>shift</i> + <i>tab</i>
                            </td>
                            <td>Hides the popup and moves focus to the previous tabbable element.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>enter</i>
                            </td>
                            <td>Selects the focused option and closes the popup.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Selects the focused option and closes the popup.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>escape</i>
                            </td>
                            <td>Closes the popup, moves focus to the cascadeselect element.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>down arrow</i>
                            </td>
                            <td>Moves focus to the next option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>up arrow</i>
                            </td>
                            <td>Moves focus to the previous option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>right arrow</i>
                            </td>
                            <td>If option is closed, opens the option otherwise moves focus to the first child option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>left arrow</i>
                            </td>
                            <td>If option is open, closes the option otherwise moves focus to the parent option.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
