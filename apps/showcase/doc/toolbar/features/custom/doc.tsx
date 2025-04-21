import { CodeViewer } from '@primereact/code-viewer';
import CustomDemo from './demo';
import { source } from './source.auto';

export default function CustomDoc() {
    return (
        <div>
            <h2>Custom</h2>
            <p>A customized toolbar with navigation bar functionality.</p>

            <CustomDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
