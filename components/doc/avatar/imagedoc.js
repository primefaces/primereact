import getConfig from 'next/config';
import { Avatar } from '../../lib/avatar/Avatar';
import { Badge } from '../../lib/badge/Badge';
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
<h5>Image - Badge</h5>
<Avatar className="p-overlay-badge" image="images/organization/walter.jpg" size="xlarge">
    <Badge value="4" severity="danger" />
</Avatar>
<h5>Gravatar</h5>
<Avatar id="gravatar" image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
<h5>Fallback</h5>
<Avatar id="fallback-label" image={"invalid1.jpg"} label="P" className="flex align-items-center justify-content-center mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
<Avatar id="fallback-url" image={"invalid2.jpg"} imageFallback={"https://ui-avatars.com/api/?name=Fall+Back"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />{' '}
        `,
        javascript: `
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ImageDoc() {

    return (
        <div className="card">
            <div className="grid">
                <div className="col-12 md:col-6">
                    <h5>Image</h5>
                    <Avatar image="images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="images/avatar/onyamalimba.png" className="mr-2" shape="circle" />
                </div>
                <div className="col-12 md:col-6">
                    <h5>Image - Badge</h5>
                    <Avatar className="p-overlay-badge" image="images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>
                <div className="col-12 md:col-3">
                    <h5>Gravatar</h5>
                    <Avatar id="gravatar" image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
                <div className="col-12 md:col-3">
                    <div className="flex flex-column">
                        <h5>Fallback</h5>
                        <div className="flex flex-row">
                            <Avatar id="fallback-label" image={"invalid1.jpg"} label="P" className="flex align-items-center justify-content-center mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                            <Avatar id="fallback-url" image={"invalid2.jpg"} imageFallback={"https://ui-avatars.com/api/?name=Fall+Back"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />{' '}
                        </div>
                    </div>
                </div>
            </div>
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
            <div className="grid">
                <div className="col-12 md:col-6">
                    <h5>Image</h5>
                    <Avatar image="images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="images/avatar/onyamalimba.png" className="mr-2" shape="circle" />
                </div>
                <div className="col-12 md:col-6">
                    <h5>Image - Badge</h5>
                    <Avatar className="p-overlay-badge" image="images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>
                <div className="col-12 md:col-3">
                    <h5>Gravatar</h5>
                    <Avatar id="gravatar" image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
                <div className="col-12 md:col-3">
                    <div className="flex flex-column">
                        <h5>Fallback</h5>
                        <div className="flex flex-row">
                            <Avatar id="fallback-label" image={"invalid1.jpg"} label="P" className="flex align-items-center justify-content-center mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                            <Avatar id="fallback-url" image={"invalid2.jpg"} imageFallback={"https://ui-avatars.com/api/?name=Fall+Back"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />{' '}
                        </div>
                    </div>
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
                <div className="grid">
                    <div className="col-12 md:col-3">
                        <h5>Sizes</h5>
                        <Avatar image={`${contextPath}/images/avatar/amyelsner.png`} className="mr-2" size="xlarge" shape="circle" />
                        <Avatar image={`${contextPath}/images/avatar/asiyajavayant.png`} className="mr-2" size="large" shape="circle" />
                        <Avatar image={`${contextPath}/images/avatar/onyamalimba.png`} className="mr-2" shape="circle" />
                    </div>
                    <div className="col-12 md:col-3">
                        <h5>Badge</h5>
                        <Avatar className="p-overlay-badge" image={`${contextPath}/images/organization/walter.jpg`} size="xlarge">
                            <Badge value="4" severity="danger" />
                        </Avatar>
                    </div>
                    <div className="col-12 md:col-3">
                        <h5>Gravatar</h5>
                        <Avatar id="gravatar" image={`https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                    </div>
                    <div className="col-12 md:col-3">
                        <div className="flex flex-column">
                            <h5>Fallback</h5>
                            <div className="flex flex-row">
                                <Avatar id="fallback-label" image={`invalid1.jpg`} label="P" className="flex align-items-center justify-content-center mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                                <Avatar id="fallback-url" image={`invalid2.jpg`} imageFallback={`https://ui-avatars.com/api/?name=Fall+Back`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
