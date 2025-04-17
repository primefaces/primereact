import { CodeViewer } from '@primereact/code-viewer';
import CustomDemo from './demo';
import { source } from './source.auto';

export default function CustomDoc() {
    return (
        <div>
            <h2>Custom</h2>
            <p>Scrollbar visuals can be styled for a unified look across different platforms.</p>

            <CustomDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
