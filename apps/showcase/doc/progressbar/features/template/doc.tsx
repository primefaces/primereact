import { CodeViewer } from '@primereact/code-viewer';
import TemplateDemo from './demo';
import { source } from './source.auto';

export default function TemplateDoc() {
    return (
        <div>
            <h2>Template</h2>
            <p>
                Content to display is defined with the <i>value</i> property.
            </p>

            <TemplateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
