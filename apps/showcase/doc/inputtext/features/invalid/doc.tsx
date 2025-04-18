import { CodeViewer } from '@primereact/code-viewer';
import InvalidDemo from './demo';
import { source } from './source.auto';

export default function InvalidDoc() {
    return (
        <div>
            <h2>Invalid</h2>
            <p>
                Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.
            </p>

            <InvalidDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
