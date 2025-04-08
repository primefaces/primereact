import { CodeViewer } from '@primereact/code-viewer';
import IconDemo from './demo';
import { source } from './source.auto';

export default function IconDoc() {
    return (
        <div>
            <h2>Icon</h2>
            <p>Icons can be displayed next to the labels instead of the default marker.</p>

            <IconDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
