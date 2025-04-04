import { CodeViewer } from '@primereact/code-viewer';
import ButtonDemo from './demo';
import { source } from './source.auto';

export default function ButtonDoc() {
    return (
        <div>
            <h2>Button</h2>
            <p>Buttons have built-in support for badges to display a badge inline.</p>

            <ButtonDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
