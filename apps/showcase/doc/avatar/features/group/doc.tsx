import { CodeViewer } from '@primereact/code-viewer';
import GroupDemo from './demo';
import { source } from './source.auto';

export default function AvatarGroupDoc() {
    return (
        <div>
            <h2>AvatarGroup</h2>
            <p>Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.</p>

            <GroupDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
