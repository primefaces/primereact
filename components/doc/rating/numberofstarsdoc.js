import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function NumberOfStarsDoc(props) {
    const [val, setVal] = useState(true);

    const code = {
        basic: `
<Rating value={val} onChange={(e) => setValue(e.val)} stars={5} />

        `,
        javascript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function NumberOfStarsDoc() {
    const [val, setVal] = useState(true);

    return (
        <Rating value={val} onChange={(e) => setValue(e.val)} stars={5} />

    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function NumberOfStarsDoc() {
    const [val, setVal] = useState<boolean>(true);

    return (
        <Rating value={val} onChange={(e : RatingChangeParams) => setValue(e.val)} stars={5} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Number of stars to display is defined with <i>stars</i> property, default is 5.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={val} onChange={(e) => setVal(e.val)} stars={5} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
