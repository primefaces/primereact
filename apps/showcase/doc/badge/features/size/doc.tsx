import { CodeViewer } from '@primereact/code-viewer';
import SizeDemo from './demo';
import { source } from './source.auto';

export default function SizeDoc() {
    return (
        <div>
            <h2>Size</h2>
            <p>
                Use the <i>size</i> property to customize the dimensions of a Badge.
            </p>

            <SizeDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
