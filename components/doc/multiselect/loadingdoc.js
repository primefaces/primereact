import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';

export function LoadingDoc(props) {
    const code = {
        basic: `
<MultiSelect loading placeholder="Loading..." className="w-full md:w-20rem" />
        `,
        javascript: `
import React from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function LoadingDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect loading placeholder="Loading..." className="w-full md:w-20rem" />
        </div>
    );
}
        `,
        typescript: `
import React from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function LoadingDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect loading placeholder="Loading..." className="w-full md:w-20rem" />
        </div>
    );
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
                <MultiSelect loading placeholder="Loading..." className="w-full md:w-20rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
