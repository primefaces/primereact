import { CodeViewer } from '@primereact/code-viewer';
import TemplateDemo from './demo';
import { source } from './source.auto';

export default function TemplateDoc() {
    return (
        <div>
            <h2>Template</h2>
            <p>Children of the component are passed as the content for templating.</p>

            <TemplateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
