import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HideOverlaysDoc(props) {
    const code = {
        basic: `
PrimeReact.hideOverlaysOnDocumentScrolling = true;
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Define behavior if the browser window is scrolled while displaying an overlay panel like a Dropdown or Calendar. Depending on your organization's accessibility needs some prefer panels to be closed on scrolling and some prefer the
                    overlay follow the scroll. The default behavior will be to close the overlay if you are scrolling the outer window as you are no longer interacting with the component.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
