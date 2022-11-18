import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
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
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the component.</td>
                            </tr>
                            <tr>
                                <td>left</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of left element.</td>
                            </tr>
                            <tr>
                                <td>right</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of right element</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
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
                                <td>p-toolbar</td>
                                <td>Main container element.</td>
                            </tr>
                            <tr>
                                <td>p-toolbar-group-left</td>
                                <td>Left content container.</td>
                            </tr>
                            <tr>
                                <td>p-toolbar-group-right</td>
                                <td>Right content container.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Toolbar uses <i>toolbar</i> role to the root element, <i>aria-orientation</i> is not included as it defaults to "horizontal". Any valid attribute is passed to the root element so you may add additional properties like{' '}
                        <i>aria-labelledby</i>
                        to define the element if required.
                    </p>

                    <CodeHighlight>
                        {`
<Card role="region">
    Content
</Card>
`}
                    </CodeHighlight>

                    <h3>Keyboard Support</h3>
                    <p>Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
