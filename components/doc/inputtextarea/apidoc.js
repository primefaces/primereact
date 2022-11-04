import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
            <p>InputTextarea passes any attribute to the underlying textarea element, additional attributes are as follows.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>autoResize</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, height of textarea changes as being typed.</td>
                        </tr>
                        <tr>
                            <td>keyfilter</td>
                            <td>string/regex</td>
                            <td>null</td>
                            <td>Format definition of the keys to block.</td>
                        </tr>
                        <tr>
                            <td>tooltip</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Content of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>tooltipOptions</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>
                Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
            </p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-inputtextarea</td>
                            <td>Textarea element</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
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

            <h4>Dependencies</h4>
            <p>None.</p>
        </>
    );
}
