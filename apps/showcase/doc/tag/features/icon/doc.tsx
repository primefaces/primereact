import { CodeViewer } from '@primereact/code-viewer';
import IconDemo from './demo';
import { source } from './source.auto';

export default function IconDoc() {
    return (
        <div>
            <h2>Icon</h2>
            <p>
                A font icon next to the value can be displayed with the <code>icon</code> property.
            </p>

            <IconDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
