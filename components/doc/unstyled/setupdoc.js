import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function SetupDoc(props) {
    const code1 = {
        basic: `
import { PrimeReactProvider } from "primereact/api";
...
return(
    <PrimeReactProvider value={{ unstyled: true }}>
        <App />
    </PrimeReactProvider>
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
                <DocSectionCode code={code1} hideToggleCode import hideStackBlitz />
                <p>
                    Alternatively even in the default styled mode, a particular component can still be used as unstyled by adding the <i>unstyled</i> prop of the component.
                </p>
                <div className="card flex justify-content-center">
                    <Button label="Check" icon="pi pi-check" unstyled />
                </div>
                <DocSectionCode code={code2} import hideToggleCode hideStackBlitz />
            </DocSectionText>
        </>
    );
}
