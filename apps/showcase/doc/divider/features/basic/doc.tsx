import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>Divider is basically placed between the items to separate.</p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
