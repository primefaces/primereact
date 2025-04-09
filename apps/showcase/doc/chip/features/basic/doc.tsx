import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>
                A basic chip with a text is created with the <i>Chip.Label</i> component. In addition when <i>removable</i> is added, a delete icon is displayed to remove a chip.
            </p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
