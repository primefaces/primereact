import { CodeViewer } from '@primereact/code-viewer';
import TemplateDemo from './demo';
import { source } from './source.auto';

export default function TemplateDoc() {
    return (
        <div>
            <h2>Template</h2>
            <p>
                Custom content can be placed inside the modal layer using the <i>BlockUI.Mask</i> component.
            </p>

            <TemplateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
