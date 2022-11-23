import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>

            <DocSubSection id="severities" label="Severities">
                <p>
                    Different color options are available as severity levels. When used as a component use the <i>severity</i> property to apply a severity.
                </p>

                <ul>
                    <li>success</li>
                    <li>info</li>
                    <li>warning</li>
                    <li>danger</li>
                </ul>
                <CodeHighlight>
                    {`
<Badge value="2" severity="success"></Badge>
`}
                </CodeHighlight>
            </DocSubSection>
            <DocSubSection id="properties" label="Properties">
                <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value to display inside the badge.</td>
                            </tr>
                            <tr>
                                <td>severity</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Severity type of the badge.</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Size of the badge, valid options are "large" and "xlarge".</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="styling" label="Styling">
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
                                <td>p-badge</td>
                                <td>Badge element</td>
                            </tr>
                            <tr>
                                <td>p-overlay-badge</td>
                                <td>Wrapper of a badge and its target.</td>
                            </tr>
                            <tr>
                                <td>p-badge-dot</td>
                                <td>Badge element with no value.</td>
                            </tr>
                            <tr>
                                <td>p-badge-success</td>
                                <td>Badge element with success severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-info</td>
                                <td>Badge element with info severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-warning</td>
                                <td>Badge element with warning severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-danger</td>
                                <td>Badge element with danger severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-lg</td>
                                <td>Large badge element</td>
                            </tr>
                            <tr>
                                <td>p-badge-xl</td>
                                <td>Extra large badge element</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>
                        Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic,
                        <i>aria-live</i> may be utilized as well. In case badges need to be tabbable, <i>tabIndex</i> can be added to implement custom key handlers.
                    </p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
