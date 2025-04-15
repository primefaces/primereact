import { CodeViewer } from '@primereact/code-viewer';
import BasicDemo from './demo';
import { source } from './source.auto';

export default function BasicDoc() {
    return (
        <div>
            <h2>Basic</h2>
            <p>
                Commands are processed using an EventBus implementation called <i>TerminalService</i>. Import this service into your component and subscribe to the <i>command</i> event to process the commands by sending replies with the
                <i>response</i> event.
            </p>

            <BasicDemo />
            <br />
            <CodeViewer source={source} />
        </div>
    );
}
