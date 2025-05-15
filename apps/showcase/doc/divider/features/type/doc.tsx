import { CodeViewer } from '@primereact/code-viewer';
import TypeDemo from './demo';
import { source } from './source.auto';

export default function TypeDoc() {
    return (
        <div>
            <h2>Type</h2>
            <p>
                Style of the border is configured with the <i>type</i> property that can either be <i>solid</i>, <i>dotted</i> or <i>dashed</i>.
            </p>

            <TypeDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
