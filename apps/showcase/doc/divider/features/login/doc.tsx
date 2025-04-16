import { CodeViewer } from '@primereact/code-viewer';
import LoginDemo from './demo';
import { source } from './source.auto';

export default function LoginDoc() {
    return (
        <div>
            <h2>Login</h2>
            <p>Sample implementation of a login form using a divider with content.</p>

            <LoginDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
