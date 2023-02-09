import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Rating value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function BasicDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => setValue(e.value)} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";

export default function BasicDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e : RatingChangeEvent) => setValue(e.value)} />
        </div>
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
                <Rating value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
