import { CodeViewer } from '@primereact/code-viewer';
import InputDemo from './demo';
import { source } from './source.auto';

export default function InputDoc() {
    return (
        <div>
            <h2>Input</h2>
            <p>
                The <code>closeCallback</code> switches the state back to display mode when called from an event.
            </p>

            <InputDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
