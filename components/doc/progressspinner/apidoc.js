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
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>strokeWidth</td>
                                <td>string</td>
                                <td>2</td>
                                <td>Width of the circle stroke.</td>
                            </tr>
                            <tr>
                                <td>fill</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Color for the background of the circle.</td>
                            </tr>
                            <tr>
                                <td>animationDuration</td>
                                <td>string</td>
                                <td>2s</td>
                                <td>Duration of the rotate animation.</td>
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
                                <td>p-progress-spinner</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-progress-circle</td>
                                <td>SVG element.</td>
                            </tr>
                            <tr>
                                <td>p-progress-path</td>
                                <td>Circle element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>
                        ProgressSpinner components uses <i>progressbar</i> role. Value to describe the component can be defined using <i>aria-labelledby</i> and <i>aria-label</i> props.
                    </p>
                    <CodeHighlight>
                        {`
<ProgressSpinner aria-label="Loading" />
`}
                    </CodeHighlight>

                    <h6>Keyboard Support</h6>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
