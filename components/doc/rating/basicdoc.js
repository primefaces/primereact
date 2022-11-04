import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [val, setVal] = useState(false);

    const code = {
        basic: `
<Rating value={val} onChange={(e) => setVal(e.value)} />
        `,
        javascript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function BasicDemo() {
    const [val, setVal] = useState(false);

    return (
        <Rating value={val} onChange={(e) => setVal(e.value)} />

    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function BasicDemo() {
    const [val, setVal] = useState<boolean>(false);

    return (
        <Rating value={val} onChange={(e : RatingChangeParams) => setVal1(e.value)} />

    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Rating is used a controlled input component with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={val} onChange={(e) => setVal(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
