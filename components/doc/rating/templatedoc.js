import getConfig from 'next/config';
import { useState } from 'react';
import { Rating } from '../../lib/rating/Rating';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplateDoc(props) {
    const [val, setVal] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Rating
value={val}
onChange={(e) => setVal(e.val)}
cancelIcon={
    <img src={"{contextPath}/images/rating/cancel.png"} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-cancel-image" width="25px" height="25px" />
}
onIcon={
    <img
src={"{contextPath}/images/rating/custom-icon-active.png"}
onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
alt="custom-image-active"
width="25px"
height="25px"
    />
}
offIcon={<img src={"{contextPath}/images/rating/custom-icon.png"} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-image" width="25px" height="25px" />}
    />
`,
        javascript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

const [val, setVal] = useState(null);

export default function TemplateDoc() {

    return (
<Rating
value={val}
onChange={(e) => setVal(e.val)}
cancelIcon={
    <img src={"{contextPath}/images/rating/cancel.png"} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-cancel-image" width="25px" height="25px" />
}
onIcon={
<img
src={"{contextPath}/images/rating/custom-icon-active.png"}
onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
alt="custom-image-active"
width="25px"
height="25px"
    />
}
offIcon={<img src={"{contextPath}/images/rating/custom-icon.png"} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-image" width="25px" height="25px" />}
    />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { Rating } from "primereact/rating";

const [val, setVal] = useState<any>(null);

export default function TemplateDoc() {

    return (
<Rating
value={val}
onChange={(e : RatingChangeParams) => setVal(e.val)}
cancelIcon={
    <img src={"{contextPath}/images/rating/cancel.png"} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-cancel-image" width="25px" height="25px" />
}
onIcon={
<img
src={"{contextPath}/images/rating/custom-icon-active.png"}
onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
alt="custom-image-active"
width="25px"
height="25px"
    />
}
offIcon={<img src={"{contextPath}/images/rating/custom-icon.png"} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-image" width="25px" height="25px" />}
    />
    );
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                Custom icons are used to override the default icons with <i>onIcon</i>, <i>offIcon</i> and <i>cancelIcon</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Rating
                    value={val}
                    onChange={(e) => setVal(e.value)}
                    cancelIcon={<img src={`${contextPath}/images/rating/cancel.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-cancel-image" width="25px" height="25px" />}
                    onIcon={
                        <img src={`${contextPath}/images/rating/custom-icon-active.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-image-active" width="25px" height="25px" />
                    }
                    offIcon={<img src={`${contextPath}/images/rating/custom-icon.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-image" width="25px" height="25px" />}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
