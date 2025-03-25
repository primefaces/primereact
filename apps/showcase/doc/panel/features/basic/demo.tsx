import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <>
            <div>
                {/* @code-section-start: preview */}
                <div>
                    <Panel toggleable={false}>
                        <Panel.Header>Basic Demo2</Panel.Header>
                        {/* @code-section-start: basic */}
                        <Panel.Content>
                            <p>This is a basic demo of the Panel components.</p>
                        </Panel.Content>
                        {/* @code-section-end: basic */}
                        <Panel.Footer>Footer</Panel.Footer>
                    </Panel>
                </div>
                {/* @code-section-end: preview */}
            </div>
        </>
    );
}
