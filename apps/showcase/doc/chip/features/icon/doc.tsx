import { CodeViewer } from '@primereact/code-viewer';
import IconDemo from './demo';
import { source } from './source.auto';

export default function IconDoc() {
    return (
        <div>
            <h2>Icon</h2>
            <p>
                A font icon next to the label can be displayed with the <i>className</i> property.
            </p>

            <IconDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
