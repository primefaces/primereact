import { CodeViewer } from '@primereact/code-viewer';
import SizeDemo from './demo';
import { source } from './source.auto';

export default function SizeDoc() {
    return (
        <div>
            <h2>Size</h2>
            <p>
                Initial dimension of a panel is percentage based and defined using the <i>size</i> property. In addition, <i>minSize</i> is provided to set a minimum value during a resize.
            </p>

            <SizeDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
