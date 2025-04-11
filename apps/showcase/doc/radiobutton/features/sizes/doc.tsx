import { CodeViewer } from '@primereact/code-viewer';
import SizesDemo from './demo';
import { source } from './source.auto';

export default function SizesDoc() {
    return (
        <div>
            <h2>Sizes</h2>
            <p>
                RadioButton provides <code>small</code> and <code>large</code> sizes as alternatives to the base.
            </p>

            <SizesDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
