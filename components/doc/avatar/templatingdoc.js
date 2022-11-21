import { Avatar } from '../../lib/avatar/Avatar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplatingDoc(props) {
    const code = {
        basic: `
<h5>Gravatar, Letter Avatar, Fallback</h5>
<Avatar id="gravatar" image=""https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" className="mr-2" size="xlarge" />
<Avatar id="letter-avatar" image="https://ui-avatars.com/api/?name=Optimus+Prime&color=ffffff&background=ff9900" className="mr-2" size="xlarge" />
<Avatar id="fallback-label" image="invalid1.jpg" label="P" className="mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
<Avatar id="fallback-url" image="invalid2.jpg" imageFallback="https://ui-avatars.com/api/?name=Fall+Back" className="mr-2" size="xlarge" />
        `,
        javascript: `
import { Avatar } from 'primereact/avatar';

export default function TemplatingDoc() {

    return (
    <div className="card">
        <h5>Gravatar, Letter Avatar, Fallback</h5>
        <Avatar id="gravatar" image=""https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" className="mr-2" size="xlarge" />
        <Avatar id="letter-avatar" image="https://ui-avatars.com/api/?name=Optimus+Prime&color=ffffff&background=ff9900" className="mr-2" size="xlarge" />
        <Avatar id="fallback-label" image="invalid1.jpg" label="P" className="mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
        <Avatar id="fallback-url" image="invalid2.jpg" imageFallback="https://ui-avatars.com/api/?name=Fall+Back" className="mr-2" size="xlarge" />
   </div>
        )
}
        `,
        typescript: `
import { Avatar } from 'primereact/avatar';

export default function TemplatingDoc() {

    return (
    <div className="card">
        <h5>Gravatar, Letter Avatar, Fallback</h5>
        <Avatar id="gravatar" image=""https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" className="mr-2" size="xlarge" />
        <Avatar id="letter-avatar" image="https://ui-avatars.com/api/?name=Optimus+Prime&color=ffffff&background=ff9900" className="mr-2" size="xlarge" />
        <Avatar id="fallback-label" image="invalid1.jpg" label="P" className="mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
        <Avatar id="fallback-url" image="invalid2.jpg" imageFallback="https://ui-avatars.com/api/?name=Fall+Back" className="mr-2" size="xlarge" />
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
                <h5>Gravatar, Letter Avatar, Fallback</h5>
                <div className="flex align-content-center">
                    <Avatar id="gravatar" image={`https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                    <Avatar id="letter-avatar" image={`https://ui-avatars.com/api/?name=Optimus+Prime&color=ffffff&background=ff9900`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                    <Avatar id="fallback-label" image={`invalid1.jpg`} label="P" className="flex align-items-center justify-content-center mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                    <Avatar id="fallback-url" image={`invalid2.jpg`} imageFallback={`https://ui-avatars.com/api/?name=Fall+Back`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
