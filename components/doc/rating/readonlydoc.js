import { Rating } from '../../lib/rating/Rating';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ReadOnlyDoc(props) {
    const code = {
        basic: `
<Rating value={5} readOnly stars={10} cancel={false}/>


        `,
        javascript: `
import React from 'react'; 
import { Rating } from "primereact/rating";

export default function ReadOnlyDoc() {

    return (
        <Rating value={5} readOnly stars={10} cancel={false} />
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Rating } from "primereact/rating";

export default function ReadOnlyDoc() {

    return (
        <Rating value={5} readOnly stars={10} cancel={false} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Changing the value is not possible with <i>readonly</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating value={5} readOnly stars={10} cancel={false} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
