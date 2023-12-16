import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Terminal } from '@/components/lib/terminal/Terminal';
import { TerminalService } from '@/components/lib/terminalservice/TerminalService';
import { useEffect } from 'react';

export function PTDoc(props) {
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

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

        if (response) TerminalService.emit('response', response);
        else TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    const code = {
        basic: `
<Terminal
    pt={{
        root: { className: 'surface-900 text-white' },
        command: { className: 'text-blue-500' },
        prompt: { className: 'text-yellow-500' },
        response: { className: 'text-purple-500' }
    }}
/>
        `,
        javascript: `
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function PTDemo() {
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

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

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <div className="card">
            <p>
                Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
            </p>
            <Terminal
                welcomeMessage="Welcome to PrimeReact"
                prompt="primereact $"
                pt={{
                    root: { className: 'surface-900 text-white' },
                    command: { className: 'text-blue-500' },
                    prompt: { className: 'text-yellow-500' },
                    response: { className: 'text-purple-500' }
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function PTDemo() {
    const commandHandler = (text: string) => {
        let response: string;
        let argsIndex: number = text.indexOf(' ');
        let command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

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

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
            <div className="card">
                <p>
                    Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
                </p>
                <Terminal
                    welcomeMessage="Welcome to PrimeReact"
                    prompt="primereact $"
                    pt={{
                        root: { className: 'surface-900 text-white' },
                        command: { className: 'text-blue-500' },
                        prompt: { className: 'text-yellow-500' },
                        response: { className: 'text-purple-500' }
                    }}
                />
            </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <p>
                    Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
                </p>
                <Terminal
                    welcomeMessage="Welcome to PrimeReact"
                    prompt="primereact $"
                    pt={{
                        root: { className: 'surface-900 text-white' },
                        command: { className: 'text-blue-500' },
                        prompt: { className: 'text-yellow-500' },
                        response: { className: 'text-purple-500' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
