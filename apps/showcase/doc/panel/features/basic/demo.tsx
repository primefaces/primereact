import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <Panel>
            <Panel.Header>Basic Demo</Panel.Header>
            <Panel.Content>
                <p>This is a basic demo of the Panel component.</p>
            </Panel.Content>
            <Panel.Footer>Footer</Panel.Footer>
        </Panel>
    );
}
