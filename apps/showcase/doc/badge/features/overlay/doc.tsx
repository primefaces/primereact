import { CodeViewer } from '@primereact/code-viewer';
import OverlayDemo from './demo';
import { source } from './source.auto';

export default function OverlayDoc() {
    return (
        <div>
            <h2>Overlay</h2>
            <p>
                A badge can be added to any element by encapsulating the content with the <i>OverlayBadge</i> component.
            </p>

            <OverlayDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
