import { Badge } from '../../lib/badge/Badge';
import { Avatar } from '../../lib/avatar/Avatar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function IconDoc(props) {
    const code = {
        basic: `
<h5>Icon</h5>
<Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
<Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
<Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
<h5>Icon - Circle</h5>
<Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
<Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
<Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />

<h5>Icon - Badge</h5>
<Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
    <Badge value="4" />
</Avatar>
        `,
        javascript: `
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function IconDoc() {

    return (
        <div className="grid">
            <div className="col-12 md:col-4">
                <div className="card">
                    <h5>Label</h5>
                    <Avatar label="P" className="mr-2" size="xlarge" />
                    <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                    <Avatar label="U" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card">
                    <h5>Label - Circle</h5>
                    <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                    <Avatar label="U" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card">
                    <h5>Label - Badge</h5>
                    <Avatar label="U" size="xlarge" className="p-overlay-badge" style={{ backgroundColor: '#4caf4f', color: '#ffffff' }}>
                        <Badge value="4" />
                    </Avatar>
                </div>
            </div>
        </div>
        )
}
        `,
        typescript: `
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function IconDoc() {

    return (
        <div className="grid">
            <div className="col-12 md:col-4">
                <div className="card">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card">
                <h5>Icon - Circle</h5>
                <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card">
                h5>Icon - Badge</h5>
                <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                    <Badge value="4" />
                </Avatar>
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
                <p>Avatar has three built-in display modes; "label", "icon" and "image".</p>
            </DocSectionText>
            <div className="card">
                <div className="grid flex flex-row justify-content-center align-items-center">
                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Icon</h5>
                            <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
                            <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                            <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Icon - Circle</h5>
                            <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                            <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                            <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Icon - Badge</h5>
                            <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                                <Badge value="4" />
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
