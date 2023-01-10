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
        </>
    );
}
