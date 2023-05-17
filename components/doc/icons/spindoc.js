import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SpinDoc(props) {
    const code = {
        basic: `
<i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
<i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }}></i>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Special <i>pi-spin</i> class applies infinite rotation to an icon.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center gap-3">
                <i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>
                <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }}></i>
            </div>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
