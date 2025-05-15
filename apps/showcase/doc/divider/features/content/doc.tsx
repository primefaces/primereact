import { CodeViewer } from '@primereact/code-viewer';
import ContentDemo from './demo';
import { source } from './source.auto';

export default function ContentDoc() {
    return (
        <div>
            <h2>Content</h2>
            <p>
                Children are rendered within the boundaries of the divider where location of the content is configured with the <i>align</i> property. In horizontal layout, alignment options are <i>left</i>, <i>center</i> and<i>right</i> whereas
                vertical mode supports <i>top</i>, <i>center</i> and <i>bottom</i>.
            </p>

            <ContentDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
