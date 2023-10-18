import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CSSTransitionDoc(props) {
    const code = {
        basic: `
import { PrimeReactContext } from 'primereact/api';

//use in a component
const { setCSSTransition } = useContext(PrimeReactContext);

setCSSTransition(false);
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact components utilize <a href="https://www.npmjs.com/package/react-transition-group">react-transition-group</a> internally to implement animations. Setting <i>cssTransition</i> to false disables all animations.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
