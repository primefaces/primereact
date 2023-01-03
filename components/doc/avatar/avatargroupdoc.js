import getConfig from 'next/config';
import { Avatar } from '../../lib/avatar/Avatar';
import { AvatarGroup } from '../../lib/avatargroup/AvatarGroup';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AvatarGroupDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<AvatarGroup>
  <Avatar image="images/avatar/amyelsner.png" size="large" shape="circle" />
  <Avatar image="images/avatar/asiyajavayant.png" size="large" shape="circle" />
  <Avatar image="images/avatar/onyamalimba.png" size="large" shape="circle" />
  <Avatar image="images/avatar/ionibowcher.png" size="large" shape="circle" />
  <Avatar image="images/avatar/xuxuefeng.png" size="large" shape="circle" />
  <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
</AvatarGroup>

        `,
        javascript: `
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export default function AvatarGroupDoc() {

    return (
        <div className="card flex justify-content-center">
            <AvatarGroup>
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
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export default function AvatarGroupDoc() {

    return (
        <div className="card flex justify-content-center">
            <AvatarGroup>
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
                <p>Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <AvatarGroup>
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
