import { CodeViewer } from '@primereact/code-viewer';
import DynamicDemo from './demo';
import { source } from './source.auto';

export default function DynamicDoc() {
    return (
        <div>
            <h2>Dynamic</h2>
            <p>Accordion tabs can be generated dynamically using code.</p>

            <DynamicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
