import { CodeViewer } from '@primereact/code-viewer';
import MultipleDemo from './demo';
import { source } from './source.auto';

export default function MultipleDoc() {
    return (
        <div>
            <h2>Multiple</h2>
            <p>
                Only one tab at a time can be active by default, enabling <i>multiple</i> property changes this behavior to allow multiple panels. In this case <i>value</i> needs to be an array.
            </p>

            <MultipleDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
