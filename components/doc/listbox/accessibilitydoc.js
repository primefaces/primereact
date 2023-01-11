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
                        Value to describe the component can be provided <i>aria-labelledby</i> or <i>aria-label</i> props. The list element has a <i>listbox</i> role with the <i>aria-multiselectable</i> attribute that sets to true when multiple
                        selection is enabled. Each list item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.
                    </p>
                    <p>
                        If filtering is enabled, <i>filterInputProps</i> can be defined to give <i>aria-*</i> props to the input element. Alternatively <i>filterPlaceholder</i> is usually utilized by the screen readers as well.
                    </p>
                    <CodeHighlight>
                        {`
<span id="lb">Options</span>
<ListBox aria-labelledby="lb" />

<ListBox aria-label="City" />
`}
                    </CodeHighlight>
                    <h4>Keyboard Support</h4>
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
                                    <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous option.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next option.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Toggles the selected state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Toggles the selected state of the focused option.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Moves focus to the first option.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Moves focus to the last option.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>down arrow</i>
                                    </td>
                                    <td>Moves focus to the next option and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>up arrow</i>
                                    </td>
                                    <td>Moves focus to the previous option and toggles the selection state.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>shift</i> + <i>space</i>
                                    </td>
                                    <td>Selects the items between the most recently selected option and the focused option.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>control</i> + <i>shift</i> + <i>home</i>
                                    </td>
                                    <td>Selects the focused options and all the options up to the first one.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>control</i> + <i>shift</i> + <i>end</i>
                                    </td>
                                    <td>Selects the focused options and all the options down to the last one.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>control</i> + <i>a</i>
                                    </td>
                                    <td>Selects all options.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
