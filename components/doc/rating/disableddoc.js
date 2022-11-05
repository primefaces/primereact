import { Rating } from '../../lib/rating/Rating';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Rating value={8} disabled stars={10} />
        `,
        javascript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function DisabledDoc() {

    return (
        <Rating value={8} disabled stars={10} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function DisabledDoc() {

    return (
        <Rating value={8} disabled stars={10} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                When present, it specifies that the element should be <i>disabled</i>.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={8} disabled stars={10} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
