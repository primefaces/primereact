import { CodeViewer } from '@primereact/code-viewer';
import CustomDemo from './demo';
import { source } from './source.auto';

export default function CustomDoc() {
    return (
        <div>
            <h2>Custom</h2>
            <p>
                ProgressSpinner can be customized with styling property like <i>style</i>, <i>strokeWidth</i> <i>fill</i> and <i>animationDuration</i>.
            </p>

            <CustomDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
