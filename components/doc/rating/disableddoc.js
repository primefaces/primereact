import { Rating } from '../../lib/rating/Rating';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Rating value={5} disabled cancel={false} />
        `,
        javascript: `
import React from 'react'; 
import { Rating } from "primereact/rating";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Rating value={5} disabled cancel={false} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Rating } from "primereact/rating";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Rating value={5} disabled cancel={false} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, a visual hint is applied to indicate that the Knob cannot be interacted with.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={5} disabled cancel={false} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
