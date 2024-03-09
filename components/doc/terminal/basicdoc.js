import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Terminal } from '@/components/lib/terminal/Terminal';
import { TerminalService } from '@/components/lib/terminalservice/TerminalService';
import { useEffect } from 'react';

export function BasicDoc(props) {
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
    welcomeMessage="Welcome to PrimeReact" 
    prompt="primereact $" 
    pt={{
        root: 'bg-gray-900 text-white border-round',
        prompt: 'text-gray-400 mr-2',
        command: 'text-primary-300',
        response: 'text-primary-300'
    }} 
/>
        `,
        javascript: `
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function TerminalDemo() {
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
        <div className="card terminal-demo">
            <p>
                Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
            </p>
            <Terminal 
                welcomeMessage="Welcome to PrimeReact" 
                prompt="primereact $" 
                pt={{
                    root: 'bg-gray-900 text-white border-round',
                    prompt: 'text-gray-400 mr-2',
                    command: 'text-primary-300',
                    response: 'text-primary-300'
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

export default function TerminalDemo() {
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
        <div className="card terminal-demo">
            <p>
                Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
            </p>
            <Terminal 
                welcomeMessage="Welcome to PrimeReact" 
                prompt="primereact $" 
                pt={{
                    root: 'bg-gray-900 text-white border-round',
                    prompt: 'text-gray-400 mr-2',
                    command: 'text-primary-300',
                    response: 'text-primary-300'
                }} 
            />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Terminal is interacted with <i>TerminalService</i> api using <i>command</i>, <i>response</i> and <i>clear</i> events. The <i>command</i> event requires a callback to handle the commands, the <i>response</i>
                    emits the response of the command and emitting <i>clear</i> reset the terminal.
                </p>
            </DocSectionText>
            <div className="card">
                <p>
                    Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
                </p>
                <Terminal
                    welcomeMessage="Welcome to PrimeReact"
                    prompt="primereact $"
                    pt={{
                        root: 'bg-gray-900 text-white border-round',
                        prompt: 'text-gray-400 mr-2',
                        command: 'text-primary-300',
                        response: 'text-primary-300'
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
