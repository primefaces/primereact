import { CodeViewer } from '@primereact/code-viewer';
import ShapesDemo from './demo';
import { source } from './source.auto';

export default function ShapesDoc() {
    return (
        <div>
            <h2>Shapes</h2>
            <p>
                Various shapes and sizes can be created using styling properties like <i>shape</i>, <i>width</i>, <i>height</i>, <i>borderRadius</i> and <i>class</i>.
            </p>

            <ShapesDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
