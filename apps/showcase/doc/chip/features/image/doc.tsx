import { CodeViewer } from '@primereact/code-viewer';
import ImageDemo from './demo';
import { source } from './source.auto';

export default function ImageDoc() {
    return (
        <div>
            <h2>Image</h2>
            <p>
                The <i>Chip.Image</i> is used to display an image like an avatar.
            </p>

            <ImageDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
