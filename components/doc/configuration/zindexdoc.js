import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ZIndexDoc(props) {
    const code = {
        basic: `
import { PrimeReactContext } from 'primereact/api';

//use in a component
const { setZIndex, autoZIndex } = useContext(PrimeReactContext);

setZIndex({
    modal: 1100,    // dialog, sidebar
    overlay: 1000,  // dropdown, overlaypanel
    menu: 1000,     // overlay menus
    tooltip: 1100   // tooltip
    toast: 1200     // toast
});

setAutoZIndex(true);
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a
                    custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeReact configuration offers the <i>zIndex</i> property
                    to customize the default values for components categories. Default values are described below and can be customized when setting up the context value.
                </p>
                <p>
                    The ZIndex of all components is increased according to their groups in harmony with each other. When <i>autoZIndex</i> is false, each group increments its zIndex within itself.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
