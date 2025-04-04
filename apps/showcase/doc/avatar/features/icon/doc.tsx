import { CodeViewer } from '@primereact/code-viewer';
import IconDemo from './demo';
import { source } from './source.auto';

export default function IconDoc() {
    return (
        <div>
            <h2>Icon</h2>
            <p>A font icon is displayed as an Avatar with the icon property.</p>

            <IconDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
