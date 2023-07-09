import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InputStyleDoc(props) {
    const code = {
        basic: `
import { PrimeReactContext } from 'primereact/api';

//use in a component
const { setInputStyle } = useContext(PrimeReactContext);

setInputStyle('filled');
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Input fields come in two styles, default is <i>outlined</i> with borders around the field whereas <i>filled</i> alternative adds a background color to the field. Applying <i>p-input-filled</i> to an ancestor of an input enables
                    the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application
                    element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set
                    inputStyle to <i>filled</i> at PrimeReact configuration as well.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
