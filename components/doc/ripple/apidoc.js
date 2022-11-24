import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <p>
                Ripple effect is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's main container (e.g. App.js) using the <i>PrimeReact</i> class.
            </p>
            <CodeHighlight lang="js">
                {`
PrimeReact.ripple = true;
`}
            </CodeHighlight>

            <p>
                <span className="font-bold">Note</span>: That would be it to enable ripple on PrimeReact components, next section describes how to use it with your own components and standard elements.
            </p>

            <CodeHighlight lang="css">
                {`
.p-ripple.purple .p-ink {
    background: rgba(256,39,176,.3);
}
`}
            </CodeHighlight>

            <DocSubSection id="styling" label="Styling">
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
                                <td>p-ripple</td>
                                <td>Host element.</td>
                            </tr>
                            <tr>
                                <td>p-ink</td>
                                <td>Ripple element.</td>
                            </tr>
                            <tr>
                                <td>p-ink-active</td>
                                <td>Ripple element during animating.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>
                        Ripple element has the <i>aria-hidden</i> attribute as true so that it gets ignored by the screen readers.
                    </p>

                    <h6>Keyboard Support</h6>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
