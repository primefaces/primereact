import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>
                Toolbar provides <i>Toolbar.Start</i>, <i>Toolbar.Center</i> and <i>Toolbar.End</i> components to place content at these sections.
            </p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
