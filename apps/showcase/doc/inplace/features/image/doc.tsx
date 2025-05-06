import { CodeViewer } from '@primereact/code-viewer';
import ImageDemo from './demo';
import { source } from './source.auto';

export default function ImageDoc() {
    return (
        <div>
            <h2>Image</h2>
            <p>Any content such as an image can be placed inside an Inplace.</p>

            <ImageDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
