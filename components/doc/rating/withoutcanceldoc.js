import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function WithoutCancelDoc(props) {
    const [val, setVal] = useState(true);

    const code = {
        basic: `
<Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />

        `,
        javascript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function WithoutCancelDoc() {
    const [val, setVal] = useState(null);

    return (
          <Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating, RatingChangeParams } from "primereact/rating";

export default function WithoutCancelDoc() {
    const [val, setVal] = useState<number>(0);

    return (
          <Rating value={val} cancel={false} onChange={(e: RatingChangeParams) => setVal(e.value)} />
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
                <Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
