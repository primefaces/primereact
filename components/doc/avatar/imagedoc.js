import getConfig from 'next/config';
import { Avatar } from '../../lib/avatar/Avatar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ImageDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<h5>Image</h5>
<Avatar image="images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
<Avatar image="images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
<Avatar image="images/avatar/onyamalimba.png" className="mr-2" shape="circle" />
        `,
        javascript: `
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ImageDoc() {

    return (
        <div className="card">
            <h5>Image</h5>
            <Avatar image="images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
            <Avatar image="images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
            <Avatar image="images/avatar/onyamalimba.png" className="mr-2" shape="circle" />
        </div>
        )
}
        `,
        typescript: `
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ImageDoc() {

    return (
        <div className="card">
            <h5>Image</h5>
            <Avatar image="images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
            <Avatar image="images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
            <Avatar image="images/avatar/onyamalimba.png" className="mr-2" shape="circle" />
        </div>
        )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Avatar has three built-in display modes; "label", "icon" and "image".</p>
            </DocSectionText>
            <div className="card">
                <h5>Image</h5>
                <Avatar image={`${contextPath}/images/avatar/amyelsner.png`} className="mr-2" size="xlarge" shape="circle" />
                <Avatar image={`${contextPath}/images/avatar/asiyajavayant.png`} className="mr-2" size="large" shape="circle" />
                <Avatar image={`${contextPath}/images/avatar/onyamalimba.png`} className="mr-2" shape="circle" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
