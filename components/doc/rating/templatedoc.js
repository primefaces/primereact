import getConfig from 'next/config';
import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [val, setVal] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Rating
    value={val}
    onChange={(e) => setVal(e.value)}
    cancelIcon={<img src={'https://www.primereact.org/images/rating/cancel.png'} alt="custom-cancel-image" width="25px" height="25px" />}
    onIcon={<img src={'https://www.primereact.org/images/rating/custom-icon-active.png'} alt="custom-image-active" width="25px" height="25px" />}
    offIcon={<img src={'https://www.primereact.org/images/rating/custom-icon.png'} alt="custom-image" width="25px" height="25px" />}
/>
`,
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function TemplateDoc() {
    const [val, setVal] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating
            value={val}
            onChange={(e) => setVal(e.value)}
            cancelIcon={<img src={'https://www.primereact.org/images/rating/cancel.png'} alt="custom-cancel-image" width="25px" height="25px" />}
            onIcon={<img src={'https://www.primereact.org/images/rating/custom-icon-active.png'} alt="custom-image-active" width="25px" height="25px" />}
            offIcon={<img src={'https://www.primereact.org/images/rating/custom-icon.png'} alt="custom-image" width="25px" height="25px" />}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Rating, RatingChangeParams } from "primereact/rating";

export default function TemplateDoc() {
    const [val, setVal] = useState<number>(0);

    return (
        <div className="card flex justify-content-center">
            <Rating
            value={val}
            onChange={(e) => setVal(e.value)}
            cancelIcon={<img src={'https://www.primereact.org/images/rating/cancel.png'} alt="custom-cancel-image" width="25px" height="25px" />}
            onIcon={<img src={'https://www.primereact.org/images/rating/custom-icon-active.png'} alt="custom-image-active" width="25px" height="25px" />}
            offIcon={<img src={'https://www.primereact.org/images/rating/custom-icon.png'} alt="custom-image" width="25px" height="25px" />}
            />
        </div>
    );
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom icons are used to override the default icons with <i>onIcon</i>, <i>offIcon</i> and <i>cancelIcon</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating
                    value={val}
                    onChange={(e) => setVal(e.value)}
                    cancelIcon={<img src={`https://www.primereact.org/images/rating/cancel.png`} alt="custom-cancel-image" width="25px" height="25px" />}
                    onIcon={<img src={`https://www.primereact.org/images/rating/custom-icon-active.png`} alt="custom-image-active" width="25px" height="25px" />}
                    offIcon={<img src={`https://www.primereact.org/images/rating/custom-icon.png`} alt="custom-image" width="25px" height="25px" />}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
