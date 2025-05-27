import { CodeViewer } from '@primereact/code-viewer';
import DocumentDemo from './demo';
import { source } from './source.auto';

export default function DocumentDoc() {
    return (
        <div>
            <h2>Document</h2>
            <p>
                Enabling <i>fullScreen</i> property controls the document.
            </p>

            <DocumentDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
