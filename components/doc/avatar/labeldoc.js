import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Badge } from '@/components/lib/badge/Badge';

export function LabelDoc(props) {
    const code = {
        basic: `
<Avatar label="P" size="xlarge" />
<Avatar label="V" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
<Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />

<Avatar label="P" size="xlarge" shape="circle" />
<Avatar label="V" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
<Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />

<Avatar label="U" size="xlarge" className="p-overlay-badge">
<Badge value="4" />
        `,
        javascript: `
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function LabelDemo() {
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-auto">
                <h5>Label</h5>
                <Avatar label="P" className="mr-2" size="xlarge" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </div>

            <div className="flex-auto">
                <h5>Circle</h5>
                <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
            </div>

            <div className="flex-auto">
                <h5>Badge</h5>
                <Avatar label="U" size="xlarge" className="p-overlay-badge">
                    <Badge value="4" />
                </Avatar>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function LabelDemo() {
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-auto">
                <h5>Label</h5>
                <Avatar label="P" className="mr-2" size="xlarge" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </div>

            <div className="flex-auto">
                <h5>Circle</h5>
                <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
            </div>

            <div className="flex-auto">
                <h5>Badge</h5>
                <Avatar label="U" size="xlarge" className="p-overlay-badge">
                    <Badge value="4" />
                </Avatar>
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
                    A letter Avatar is defined with the <i>label</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap gap-5">
                    <div className="flex-auto">
                        <h5>Label</h5>
                        <Avatar label="P" className="mr-2" size="xlarge" />
                        <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                        <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                    </div>

                    <div className="flex-auto">
                        <h5>Circle</h5>
                        <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                        <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                        <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                    </div>

                    <div className="flex-auto">
                        <h5>Badge</h5>
                        <Avatar label="U" size="xlarge" className="p-overlay-badge">
                            <Badge value="4" />
                        </Avatar>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
