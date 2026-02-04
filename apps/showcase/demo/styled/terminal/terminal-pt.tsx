'use client';
import { TerminalResponse } from '@primereact/types/shared/terminal';
import { Terminal } from '@primereact/ui/terminal';

export default function BasicDemo() {
    const commandHandler = (text: string): TerminalResponse => {
        const argsIndex: number = text.indexOf(' ');
        const command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'help':
                return 'Available commands:\n  date    - Display current date and time\n  greet   - Get a personalized greeting\n  random  - Generate a random number\n  clear   - Clear the terminal';

            case 'date':
                return new Date().toLocaleString();

            case 'greet': {
                const name = text.substring(argsIndex + 1).trim() || 'World';

                return `Hello, ${name}!`;
            }

            case 'random':
                return `Your random number: ${Math.floor(Math.random() * 100)}`;

            case 'clear':
                return null;

            default:
                return `Command not found: ${command}. Type "help" for available commands.`;
        }
    };

    return (
        <Terminal.Root prompt="$" onCommand={commandHandler}>
            <Terminal.Welcome>Welcome to PrimeReact Terminal. Type &quot;help&quot; for available commands.</Terminal.Welcome>
            <Terminal.CommandList />
            <Terminal.Prompt />
        </Terminal.Root>
    );
}
