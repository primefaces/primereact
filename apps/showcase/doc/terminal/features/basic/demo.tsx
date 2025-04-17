import { Terminal } from 'primereact/terminal';
import TerminalService from 'primereact/terminalservice';
import * as React from 'react';

export default function BasicDemo() {
    const commandHandler = (text: unknown): void => {
        if (typeof text !== 'string') return;

        let response: string | number | null;
        const argsIndex: number = text.indexOf(' ');
        const command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
    };

    React.useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);
    return (
        <div className="card">
            <p>
                Enter &quot;<strong>date</strong>&quot; to display the current date, &quot;<strong>greet {'{0}'}</strong>&quot; for a message, &quot;<strong>random</strong>&quot; to get a random number and &quot;<strong>clear</strong>&quot; to clear
                all commands.
            </p>
            <Terminal prompt="primereact $" aria-label="PrimeReact Terminal Service">
                <Terminal.WelcomeMessage>Welcome to PrimeReact</Terminal.WelcomeMessage>
            </Terminal>
        </div>
    );
}
