import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>InputText is an extension to standard input element with theming.</p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
