import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Rating } from '@/components/lib/rating/Rating';
import { useState } from 'react';

export function TemplateDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Rating value={value} onChange={(e) => setValue(e.value)}
    cancelIcon={<img src="/images/rating/cancel.png" alt="custom-cancel-image" width="25px" height="25px" />}
    onIcon={<img src="/images/rating/custom-icon-active.png" alt="custom-image-active" width="25px" height="25px" />}
    offIcon={<img src="/images/rating/custom-icon.png" alt="custom-image" width="25px" height="25px" />}
/>
`,
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function TemplateDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => setValue(e.value)}
                cancelIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/cancel.png" alt="custom-cancel-image" width="25px" height="25px" />}
                onIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon-active.png" alt="custom-image-active" width="25px" height="25px" />}
                offIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon.png" alt="custom-image" width="25px" height="25px" />}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { Rating, RatingChangeEvent} from "primereact/rating";

export default function TemplateDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e: RatingChangeEvent) => setValue(e.value)}
                cancelIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/cancel.png" alt="custom-cancel-image" width="25px" height="25px" />}
                onIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon-active.png" alt="custom-image-active" width="25px" height="25px" />}
                offIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon.png" alt="custom-image" width="25px" height="25px" />}
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
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    cancelIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/cancel.png" alt="custom-cancel-image" width="25px" height="25px" />}
                    onIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon-active.png" alt="custom-image-active" width="25px" height="25px" />}
                    offIcon={<img src="https://primefaces.org/cdn/primereact/images/rating/custom-icon.png" alt="custom-image" width="25px" height="25px" />}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
