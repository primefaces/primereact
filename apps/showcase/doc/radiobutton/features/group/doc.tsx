import { CodeViewer } from '@primereact/code-viewer';
import GroupDemo from './demo';
import { source } from './source.auto';

export default function RadioButtonGroupDoc() {
    return (
        <div>
            <h2>RadioButtonGroup</h2>
            <p>Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.</p>

            <GroupDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
