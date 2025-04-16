import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>
                Accordion is defined using <i>Accordion.Panel</i>, <i>Accordion.Header</i> and <i>Accordion.Content</i> components. Each Accordion.Panel must contain a unique <i>value</i> property to specify the active item.
            </p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
