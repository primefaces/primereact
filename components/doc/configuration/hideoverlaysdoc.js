import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function HideOverlaysDoc(props) {
    const code = {
        basic: `
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        hideOverlaysOnDocumentScrolling: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}

//_app.css
body {
  margin: 0px;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Define behavior if the browser window is scrolled while displaying an overlay panel like a Dropdown or Calendar. Depending on your organization's accessibility needs some prefer panels to be closed on scrolling and some prefer the
                    overlay follow the scroll. Default value is false. IMPORTANT: Your <i>document.body</i> must have <i>overflow</i> CSS on this to work properly.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
