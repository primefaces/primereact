'use client';
import { AngleRight } from '@primeicons/react/angle-right';
import { TerminalCommandInstance, TerminalResponse, TerminalRootInstance } from '@primereact/types/shared/terminal';
import { Terminal } from '@primereact/ui/terminal';

export default function TemplateDemo() {
    const commandHandler = (text: string): TerminalResponse => {
        const parts = text.trim().split(/\s+/);
        const command = parts[0];
        const args = parts.slice(1).join(' ');

        switch (command) {
            case 'install':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-green-500">✔ Resolving dependencies...</span>
                        <span className="text-green-500">✔ Fetching packages...</span>
                        <span className="text-green-500">✔ Linking dependencies...</span>
                        <span className="text-blue-500">ℹ Added {args || 'primereact'} to dependencies</span>
                        <span className="text-muted-color">Done in 2.4s</span>
                    </div>
                );

            case 'build':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-green-500">✔ Compiled successfully</span>
                        <span className="text-green-500">✔ Linting passed</span>
                        <span className="text-green-500">✔ Type checking passed</span>
                        <span className="text-blue-500">ℹ Output: dist/</span>
                        <span className="text-muted-color">Build completed in 8.2s</span>
                    </div>
                );

            case 'test':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-green-500">✔ 42 tests passed</span>
                        <span className="text-yellow-500">⚠ 2 tests skipped</span>
                        <span className="text-muted-color">Test Suites: 5 passed, 5 total</span>
                    </div>
                );

            case 'status':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-blue-500">On branch main</span>
                        <span className="text-green-500">✔ Your branch is up to date</span>
                        <span className="text-muted-color">nothing to commit, working tree clean</span>
                    </div>
                );

            case 'help':
                return (
                    <div className="flex flex-col gap-1">
                        <span className="text-blue-500 font-semibold">Available commands:</span>
                        <span className="text-green-500"> install [pkg]</span>
                        <span className="text-muted-color ps-4">Install a package</span>
                        <span className="text-green-500"> build</span>
                        <span className="text-muted-color ps-4">Build the project</span>
                        <span className="text-green-500"> test</span>
                        <span className="text-muted-color ps-4">Run tests</span>
                        <span className="text-green-500"> status</span>
                        <span className="text-muted-color ps-4">Show git status</span>
                        <span className="text-green-500"> clear</span>
                        <span className="text-muted-color ps-4">Clear terminal</span>
                    </div>
                );

            case 'clear':
                return null;

            default:
                return <span className="text-red-500">✖ Command not found: {command}. Type &quot;help&quot; for available commands.</span>;
        }
    };

    return (
        <Terminal.Root onCommand={commandHandler} className="h-100 rounded-xl pt-0">
            {(instance: TerminalRootInstance) => {
                const { state } = instance;

                return (
                    <>
                        <Terminal.Welcome className="sticky top-0 z-10 flex flex-col gap-2 bg-inherit border-b border-surface-200 dark:border-surface-700 py-3 mb-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-muted-color text-sm">Type &quot;help&quot; for available commands</span>
                        </Terminal.Welcome>

                        <Terminal.CommandList>
                            {state.commands.map((_, index) => (
                                <Terminal.Command key={index} index={index}>
                                    {(commandInstance: TerminalCommandInstance) => (
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center">
                                                <AngleRight className="text-xs text-green-500 me-2" />
                                                <Terminal.CommandValue />
                                            </div>
                                            {commandInstance.command?.response && (
                                                <div className="ps-4">
                                                    <Terminal.CommandResponse />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Terminal.Command>
                            ))}
                        </Terminal.CommandList>

                        <Terminal.Prompt>
                            <Terminal.PromptLabel>
                                <AngleRight className="text-xs text-green-500 me-2" />
                            </Terminal.PromptLabel>
                            <Terminal.PromptValue />
                        </Terminal.Prompt>
                    </>
                );
            }}
        </Terminal.Root>
    );
}
