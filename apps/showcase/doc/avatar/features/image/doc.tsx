import { CodeViewer } from '@primereact/code-viewer';
import ImageDemo from './demo';
import { source } from './source.auto';

export default function ImageDoc() {
    return (
        <div>
            <h2>Image</h2>
            <p>Use the image property to display an image as an Avatar.</p>

            <ImageDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
