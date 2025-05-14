import { CodeViewer } from '@primereact/code-viewer';
import HorizontalDemo from './demo';
import { source } from './source.auto';

export default function HorizontalDoc() {
    return (
        <div>
            <h2>Horizontal</h2>
            <p>Splitter requires two Splitter.Panel components as children which are displayed horizontally by default.</p>

            <HorizontalDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
