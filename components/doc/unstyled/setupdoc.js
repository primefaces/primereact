import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { Button } from '../../lib/button/Button';

export function SetupDoc(props) {
    const code1 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
...
return(
    <PrimerReactProvider value={{ unstyled: true }}>
        <App />
    </PrimerReactProvider>
)
`
    };
    const code2 = {
        basic: `
<Button label="Check" icon="pi pi-check" unstyled></Button>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Unstyled mode is enabled for the whole suite by setting <i>unstyled</i> as true during PrimeReact installation.
                </p>
                <DocSectionCode code={code1} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>
                    Alternatively even in the default styled mode, a particular component can still be used as unstyled by adding the <i>unstyled</i> prop of the component.
                </p>
                <div className="card flex justify-content-center">
                    <Button label="Check" icon="pi pi-check" unstyled />
                </div>
                <DocSectionCode code={code2} import hideToggleCode hideCodeSandbox hideStackBlitz />
            </DocSectionText>
        </>
    );
}
