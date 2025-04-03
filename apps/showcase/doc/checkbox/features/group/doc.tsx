import { CodeViewer } from '@primereact/code-viewer';
import GroupDemo from './demo';
import { source } from './source.auto';

export default function GroupDoc() {
    return (
        <div>
            <h2>Group</h2>
            <p>Multiple checkboxes can be grouped together.</p>

            <GroupDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
