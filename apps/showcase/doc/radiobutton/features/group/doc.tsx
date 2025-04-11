import { CodeViewer } from '@primereact/code-viewer';
import GroupDemo from './demo';
import { source } from './source.auto';

export default function GroupDoc() {
    return (
        <div>
            <h2>Group</h2>
            <p>RadioButton is used with the v-model property for two-way value binding.</p>

            <GroupDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
