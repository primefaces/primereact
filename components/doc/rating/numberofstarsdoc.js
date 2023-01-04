import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NumberOfStarsDoc(props) {
    const [val, setVal] = useState(0);

    const code = {
        basic: `
<Rating value={val} onChange={(e) => setVal(e.val)} stars={10} />

        `,
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function NumberOfStarsDoc() {
    const [val, setVal] = useState(null);

    return (
        <Rating value={val} onChange={(e) => setVal(e.value)} stars={10} />
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Rating, RatingChangeParams } from "primereact/rating";

export default function NumberOfStarsDoc() {
    const [val, setVal] = useState<number>(0);

    return (
        <Rating value={val} onChange={(e : RatingChangeParams) => setVal(e.value)} stars={10} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Number of stars to display is defined with <i>stars</i> property, default is 10.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={val} onChange={(e) => setVal(e.value)} stars={10} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
