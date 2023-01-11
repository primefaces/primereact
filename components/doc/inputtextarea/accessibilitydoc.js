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
                        InputTextarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using{' '}
                        <i>aria-labelledby</i>, <i>aria-label</i> props.
                    </p>
                    <CodeHighlight>
                        {`
<label htmlFor="address1">Address 1</label>
<InputTextarea id="address1" />

<span id="address2">Address 2</span>
<InputTextarea aria-labelledby="address2" />

<InputTextarea aria-label="Address Details"/>
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
                                    <td>Moves focus to the input.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
