import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>
                Label of the tag is defined with the <code>value</code> property.
            </p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
