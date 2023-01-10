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
        </>
    );
}
