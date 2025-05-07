import { CodeViewer } from '@primereact/code-viewer';
import AdvancedDemo from './demo';
import { source } from './source.auto';

export default function AdvancedDoc() {
    return (
        <div>
            <h2>Advanced</h2>
            <p>
                Card provides <i>Card.Header</i>, <i>Card.Title</i>, <i>Card.Subtitle</i>, <i>Card.Content</i> and <i>Card.Footer</i> as the named components to place content.
            </p>

            <AdvancedDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
