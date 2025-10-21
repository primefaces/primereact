import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <div className="card">
            <Panel
                pt={{
                    root: 'border border-primary rounded-xl p-4',
                    header: {
                        id: 'myPanelHeader',
                        style: {
                            userSelect: 'none'
                        },
                        className: 'flex items-center justify-between text-primary font-bold'
                    },
                    content: { className: 'text-primary-700 dark:text-primary-200 mt-4' },
                    title: 'text-xl'
                }}
            >
                <Panel.Header>
                    <Panel.Title> Header</Panel.Title>
                </Panel.Header>
                <Panel.Content>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel.Content>
            </Panel>
        </div>
    );
}
