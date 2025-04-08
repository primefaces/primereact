import { CodeViewer } from '@primereact/code-viewer';
import MultipleDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Multiple</h2>
            <p>Adding more items to the array displays the meters in a group.</p>

            <MultipleDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
