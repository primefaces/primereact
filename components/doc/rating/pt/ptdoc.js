import { useState } from 'react';
import { Rating } from '../../../lib/rating/Rating';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Rating
    value={value}
    onChange={(e) => setValue(e.value)}
    pt={{
        onIcon: { className: 'text-orange-400' }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function PTDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    onIcon: { className: 'text-orange-400' }
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";

export default function PTDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <Rating
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    onIcon: { className: 'text-orange-400' }
                }}
            />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Rating
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    pt={{
                        onIcon: { className: 'text-orange-400' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
