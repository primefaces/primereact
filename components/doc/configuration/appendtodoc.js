import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AppendToDoc(props) {
    const code = {
        basic: `
import { PrimeReactContext } from 'primereact/api';
import { useMountEffect } from "primereact/hooks";

//use in a component
const { setAppendTo } = useContext(PrimeReactContext);

useMountEffect(() => {
   setAppendTo('self');
});
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    For components with an overlay like a dropdown, popups can be mounted either into the component or DOM element instance using this option. Valid values are any DOM Element like document body and <i>self</i>. By default all popups
                    are append to document body via Portals.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
