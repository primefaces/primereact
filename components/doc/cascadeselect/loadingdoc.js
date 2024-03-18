import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { CascadeSelect } from '@/components/lib/cascadeselect/CascadeSelect';

export function LoadingDoc(props) {
    const code = {
        basic: `
<CascadeSelect loading placeholder="Loading..." className="w-full md:w-14rem" breakpoint="767px" style={{ minWidth: '14rem' }} />
        `,
        javascript: `
import React from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function LoadingDemo() {
    return (
        <div className="card flex justify-content-center">
            <CascadeSelect loading placeholder="Loading..." className="w-full md:w-14rem" breakpoint="767px" style={{ minWidth: '14rem' }} />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { CascadeSelect, CascadeSelectChangeEvent } from 'primereact/cascadeselect';

export default function LoadingDemo() {
   
    return (
        <div className="card flex justify-content-center">
            <CascadeSelect loading placeholder="Loading..." className="w-full md:w-14rem" breakpoint="767px" style={{ minWidth: '14rem' }} />        
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Loading state can be used <i>loading</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <CascadeSelect loading placeholder="Loading..." className="w-full md:w-14rem" breakpoint="767px" style={{ minWidth: '14rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
