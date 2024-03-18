import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ColorDoc(props) {
    const code = {
        basic: `
<i className="pi pi-check" style={{ color: 'slateblue' }}></i>
<i className="pi pi-times" style={{ color: 'green' }}></i>
<i className="pi pi-search" style={{ color: 'var(--primary-color)' }}></i>
<i className="pi pi-user" style={{ color: '#708090' }}></i>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Icon color is defined with the <i>color</i> property which is inherited from parent by default.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center gap-3">
                <i className="pi pi-check" style={{ color: 'slateblue' }}></i>
                <i className="pi pi-times" style={{ color: 'green' }}></i>
                <i className="pi pi-search" style={{ color: 'var(--primary-color)' }}></i>
                <i className="pi pi-user" style={{ color: '#708090' }}></i>
            </div>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
