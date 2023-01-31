import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function WithoutCancelDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
        `,
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function WithoutCancelDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";

export default function WithoutCancelDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e : RatingChangeEvent) => setValue(e.value)} cancel={false} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
