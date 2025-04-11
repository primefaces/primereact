import { CodeViewer } from '@primereact/code-viewer';
import TemplateDemo from './demo';
import { source } from './source.auto';

export default function TemplateDoc() {
    return (
        <div>
            <h2>Template</h2>
            <p>Chip also allows displaying custom content inside a itself.</p>

            <TemplateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
