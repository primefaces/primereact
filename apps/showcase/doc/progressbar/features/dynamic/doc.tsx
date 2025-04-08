import { CodeViewer } from '@primereact/code-viewer';
import DynamicDemo from './demo';
import { source } from './source.auto';

export default function DynamicDoc() {
    return (
        <div>
            <h2>Dynamic</h2>
            <p>Value is reactive so updating it dynamically changes the bar as well.</p>

            <DynamicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
