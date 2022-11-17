import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NumberOfStarsDoc(props) {
    const [val, setVal] = useState(0);

    const code = {
        basic: `
<Rating value={val} onChange={(e) => setValue(e.val)} stars={5} />

        `,
        javascript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function NumberOfStarsDoc() {
    const [val, setVal] = useState(null);

    return (
        <Rating value={val} onChange={(e) => setValue(e.val)} stars={5} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating, RatingChangeParams } from "primereact/rating";

export default function NumberOfStarsDoc() {
    const [val, setVal] = useState<number>(0);

    return (
        <Rating value={val} onChange={(e : RatingChangeParams) => setValue(e.val)} stars={5} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Number of stars to display is defined with <i>stars</i> property, default is 5.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={val} onChange={(e) => setVal(e.value)} stars={5} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
