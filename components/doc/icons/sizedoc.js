import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function SizeDoc(props) {
    const code = {
        basic: `
<i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
<i className="pi pi-times" style={{ fontSize: '1.5rem' }}></i>
<i className="pi pi-search" style={{ fontSize: '2rem' }}></i>
<i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Size of an icon is controlled with the fontSize property of the element.</p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center gap-3">
                <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
                <i className="pi pi-times" style={{ fontSize: '1.5rem' }}></i>
                <i className="pi pi-search" style={{ fontSize: '2rem' }}></i>
                <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
            </div>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
