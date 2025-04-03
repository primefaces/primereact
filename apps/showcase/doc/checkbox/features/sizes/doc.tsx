import { CodeViewer } from '@primereact/code-viewer';
import SizesDemo from './demo';
import { source } from './source.auto';

export default function SizesDoc() {
    return (
        <div>
            <h2>Sizes</h2>
            <p>
                Checkbox provides <i>small</i> and <i>large</i> sizes as alternatives to the base.
            </p>

            <SizesDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
