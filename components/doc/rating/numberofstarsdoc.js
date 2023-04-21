import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NumberOfStarsDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Rating value={value} onChange={(e) => setValue(e.value)} stars={10} />
        `,
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function NumberOfStarsDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => setValue(e.value)} stars={10} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";

export default function NumberOfStarsDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e : RatingChangeEvent) => setValue(e.value)} stars={10} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Number of stars to display is defined with <i>stars</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={value} onChange={(e) => setValue(e.value)} stars={10} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
