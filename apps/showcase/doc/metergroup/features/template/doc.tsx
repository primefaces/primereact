import { CodeViewer } from '@primereact/code-viewer';
import TemplateDemo from './demo';
import { source } from './source.auto';

export default function TemplateDoc() {
    return (
        <div>
            <h2>Template</h2>
            <p>MeterGroup provides templating support for labels, meter items, and content around the meters.</p>

            <TemplateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
