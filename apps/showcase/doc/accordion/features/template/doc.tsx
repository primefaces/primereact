import { CodeViewer } from '@primereact/code-viewer';
import TemplateDemo from './demo';
import { source } from './source.auto';

export default function TemplateDoc() {
    return (
        <div>
            <h2>Template</h2>
            <p>
                Custom content for a header is defined with the default slot. The optional <i>as</i> property controls the default container element of a header, for example setting it to a <i>div</i> renders a div for the header instead of a button.
                The
                <i>asChild</i> option enables the headless mode for further customization by passing callbacks and properties to implement your own header.
            </p>

            <TemplateDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
