import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HideOverlaysDoc(props) {
    const code = {
        basic: `
import { PrimeReactContext } from 'primereact/api';

//use in a component
const { setHideOverlayOnScroll } = useContext(PrimeReactContext);

setHideOverlayOnScroll(true);
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Define behavior if the browser window is scrolled while displaying an overlay panel like a Dropdown or Calendar. Depending on your organization's accessibility needs some prefer panels to be closed on scrolling and some prefer the
                    overlay follow the scroll. Default value is false.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
