import { CodeViewer } from '@primereact/code-viewer';
import DisabledDemo from './demo';
import { source } from './source.auto';

export default function DisabledDoc() {
    return (
        <div>
            <h2>Disabled</h2>
            <p>
                Enabling <i>disabled</i> property of an Accordion.Panel prevents user interaction.
            </p>
            <DisabledDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
