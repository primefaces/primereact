import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function BasicDoc(props) {
    const code = {
        basic: `
<i className="pi pi-check"></i>
<i className="pi pi-times"></i>
<span className="pi pi-search"></span>
<span className="pi pi-user"></span>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeIcons use the <i>pi pi-&#123;icon&#125;</i> syntax such as <i>pi pi-check</i>. A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i>
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center gap-3">
                <i className="pi pi-check"></i>
                <i className="pi pi-times"></i>
                <span className="pi pi-search"></span>
                <span className="pi pi-user"></span>
            </div>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
