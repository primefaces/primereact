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
                        Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. Chip list uses <i>listbox</i> role with{' '}
                        <i>aria-orientation</i> set to horizontal whereas each chip has the <i>option</i> role with <i>aria-label</i> set to the label of the chip.
                    </p>
                    <CodeHighlight>
                        {`
<label htmlFor="chips1">Tags</label>
<Chips inputId="chips1" />

<span id="chips2">Tags</span>
<Chips aria-labelledby="chips2" />

<Chips aria-label="Tags" />
`}
                    </CodeHighlight>

                    <h4>Input Field Keyboard Support</h4>
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
                                    <td>Moves focus to the input element</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Adds a new chips using the input field value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>backspace</i>
                                    </td>
                                    <td>Deletes the previous chip if the input field is empty.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>Moves focus to the previous chip if available and input field is empty.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>Chip Keyboard Support</h4>
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
                                        <i>left arrow</i>
                                    </td>
                                    <td>Moves focus to the previous chip if available.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>Moves focus to the next chip, if there is none then input field receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>backspace</i>
                                    </td>
                                    <td>Deletes the chips and adds focus to the input field.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
