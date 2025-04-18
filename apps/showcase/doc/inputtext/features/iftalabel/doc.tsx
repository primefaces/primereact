import { CodeViewer } from '@primereact/code-viewer';
import IftaLabelDemo from './demo';
import { source } from './source.auto';

export default function IftaLabelDoc() {
    return (
        <div>
            <h2>Ifta Label</h2>
            <p>IftaLabel is used to create infield top aligned labels.</p>

            <IftaLabelDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
