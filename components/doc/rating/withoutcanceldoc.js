import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
    const [val, setVal] = useState(true);

    return (
          <Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

export default function WithoutCancelDoc() {
    const [val, setVal] = useState<boolean>(true);

    return (
          <Rating value={val} cancel={false} onChange={(e: RatingChangeParams) => setVal(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
