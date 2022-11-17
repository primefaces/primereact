import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [val, setVal] = useState(null);

    const code = {
        basic: `
<Rating value={val} onChange={(e) => setVal(e.value)} />
        `,
        javascript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function BasicDemo() {
    const [val, setVal] = useState(null);

    return (
        <Rating value={val} onChange={(e) => setVal(e.value)} />

    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating, RatingChangeParams } from "primereact/rating";

export default function BasicDemo() {
    const [val, setVal] = useState<number>(0);

    return (
        <Rating value={val} onChange={(e : RatingChangeParams) => setVal1(e.value)} />

    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Rating is used a controlled input component with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={val} onChange={(e) => setVal(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
