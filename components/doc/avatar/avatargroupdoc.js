import getConfig from 'next/config';
import { Avatar } from '../../lib/avatar/Avatar';
import { AvatarGroup } from '../../lib/avatargroup/AvatarGroup';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AvatarGroupDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<h5>Avatar Group</h5>
<AvatarGroup className="mb-3">
  <Avatar image="images/avatar/amyelsner.png" size="large" shape="circle" />
  <Avatar image="images/avatar/asiyajavayant.png" size="large" shape="circle" />
  <Avatar image="images/avatar/onyamalimba.png" size="large" shape="circle" />
  <Avatar image="images/avatar/ionibowcher.png" size="large" shape="circle" />
  <Avatar image="images/avatar/xuxuefeng.png" size="large" shape="circle" />
  <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
</AvatarGroup>

        `,
        javascript: `
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export default function AvatarGroupDoc() {

    return (
        <div className="card">
            <h5>Avatar Group</h5>
            <AvatarGroup className="mb-3">
                <Avatar image="images/avatar/amyelsner.png" size="large" shape="circle" />
                <Avatar image="images/avatar/asiyajavayant.png" size="large" shape="circle" />
                <Avatar image="images/avatar/onyamalimba.png" size="large" shape="circle" />
                <Avatar image="images/avatar/ionibowcher.png" size="large" shape="circle" />
                <Avatar image="images/avatar/xuxuefeng.png" size="large" shape="circle" />
                <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </AvatarGroup>
        </div>
        )
}
        `,
        typescript: `
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export default function AvatarGroupDoc() {

    return (
        <div className="card">
            <h5>Avatar Group</h5>
            <AvatarGroup className="mb-3">
                <Avatar image="images/avatar/amyelsner.png" size="large" shape="circle" />
                <Avatar image="images/avatar/asiyajavayant.png" size="large" shape="circle" />
                <Avatar image="images/avatar/onyamalimba.png" size="large" shape="circle" />
                <Avatar image="images/avatar/ionibowcher.png" size="large" shape="circle" />
                <Avatar image="images/avatar/xuxuefeng.png" size="large" shape="circle" />
                <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </AvatarGroup>
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
                <h5>Avatar Group</h5>
                <AvatarGroup className="mb-3">
                    <Avatar image={`${contextPath}/images/avatar/amyelsner.png`} size="large" shape="circle" />
                    <Avatar image={`${contextPath}/images/avatar/asiyajavayant.png`} size="large" shape="circle" />
                    <Avatar image={`${contextPath}/images/avatar/onyamalimba.png`} size="large" shape="circle" />
                    <Avatar image={`${contextPath}/images/avatar/ionibowcher.png`} size="large" shape="circle" />
                    <Avatar image={`${contextPath}/images/avatar/xuxuefeng.png`} size="large" shape="circle" />
                    <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                </AvatarGroup>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
