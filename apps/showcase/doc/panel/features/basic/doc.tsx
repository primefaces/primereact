import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';

import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>
                A simple Panel is created with a <i>header</i> property along with the content as children.
            </p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
