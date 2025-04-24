import { CodeViewer } from '@primereact/code-viewer';
import VerticalDemo from './demo';
import { source } from './source.auto';

export default function VerticalDoc() {
    return (
        <div>
            <h2>Vertical</h2>
            <p>
                Panels are displayed as stacked by setting the <i>layout</i> to <i>vertical</i>.
            </p>

            <VerticalDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
