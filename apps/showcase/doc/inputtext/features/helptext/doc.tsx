import { CodeViewer } from '@primereact/code-viewer';
import HelpTextDemo from './demo';
import { source } from './source.auto';

export default function HelpTextDoc() {
    return (
        <div>
            <h2>Help Text</h2>
            <p>An advisory text can be defined with the Message component.</p>

            <HelpTextDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
