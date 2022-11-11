import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
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
                            <td>header</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Header of the card.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Footer of the card.</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Title of the card.</td>
                        </tr>
                        <tr>
                            <td>subTitle</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Secondary title of the card.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
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
                            <td>p-card</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-card-title</td>
                            <td>Title element.</td>
                        </tr>
                        <tr>
                            <td>p-card-subtitle</td>
                            <td>Subtitle element.</td>
                        </tr>
                        <tr>
                            <td>p-card-content</td>
                            <td>Content of the card.</td>
                        </tr>
                        <tr>
                            <td>p-card-footer</td>
                            <td>Footer of the card.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you
                    require to use one of the{' '}
                    <a href="https://www.w3.org/TR/wai-aria/#landmark" alt="Landmark Roles">
                        landmark
                    </a>
                    roles like <i>region</i>, you may use the <i>role</i> property.
                </p>

                <CodeHighlight>
                    {`
<Card role="region">
    Content
</Card>
`}
                </CodeHighlight>

                <h3>Keyboard Support</h3>
                <p>Component does not include any interactive elements.</p>
            </DevelopmentSection>
            <h3>Dependencies</h3>
            <p>None.</p>
        </>
    );
}
