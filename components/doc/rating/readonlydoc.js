import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Rating } from '@/components/lib/rating/Rating';

export function ReadOnlyDoc(props) {
    const code = {
        basic: `
<Rating value={5} readOnly cancel={false} />
        `,
        javascript: `
import React from 'react'; 
import { Rating } from "primereact/rating";

export default function ReadOnlyDemo() {
    return (
        <div className="card flex justify-content-center">
            <Rating value={5} readOnly cancel={false} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Rating } from "primereact/rating";

export default function ReadOnlyDemo() {
    return (
        <div className="card flex justify-content-center">
            <Rating value={5} readOnly cancel={false} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>readOnly</i> present, value cannot be edited.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={5} readOnly cancel={false} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
