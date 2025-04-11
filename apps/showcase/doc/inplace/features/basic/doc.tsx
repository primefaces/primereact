import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>
                <code>Inplace</code> component requires <code>display</code> and <code>content</code> templates to define the content of each state.
            </p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
