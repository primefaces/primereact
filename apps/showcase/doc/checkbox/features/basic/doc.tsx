import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>Checkbox is an extension to standard checkbox element with theming.</p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
