import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Badge } from '@/components/lib/badge/Badge';

export function ImageDoc(props) {
    const code = {
        basic: `
<Avatar image="/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
<Avatar image="/images/avatar/asiyajavayant.png" size="large" shape="circle" />
<Avatar image="/images/avatar/onyamalimba.png" shape="circle" />

<Avatar className="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge">
    <Badge value="4" severity="danger" />
</Avatar>

<Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
        `,
        javascript: `
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ImageDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Image</h5>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                </div>

                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>

                <div className="flex-auto">
                    <h5>Gravatar</h5>
                    <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ImageDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Image</h5>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                </div>

                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>

                <div className="flex-auto">
                    <h5>Gravatar</h5>
                    <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Use the <i>image</i> property to display an image as an Avatar.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap gap-5">
                    <div className="flex-auto">
                        <h5>Image</h5>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                    </div>

                    <div className="flex-auto">
                        <h5>Badge</h5>
                        <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                            <Badge value="4" severity="danger" />
                        </Avatar>
                    </div>

                    <div className="flex-auto">
                        <h5>Gravatar</h5>
                        <Avatar image={'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp'} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
