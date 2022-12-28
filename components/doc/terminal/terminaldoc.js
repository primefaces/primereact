import React, { useEffect } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Terminal } from '../../lib/terminal/Terminal';
import { TerminalService } from '../../lib/terminalservice/TerminalService';

export function TerminalDoc(props) {
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

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    const code = {
        basic: `
<Terminal welcomeMessage="Welcome to PrimeReact" prompt="primereact $" />
        `,
        javascript: `
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import './TerminalDemo.css'

export default function TerminalDoc() {

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

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
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
            <Terminal welcomeMessage="Welcome to PrimeReact" prompt="primereact $" />
        </div>
    );
}
        `,
        typescript: `
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import './TerminalDemo.css'

export default function TerminalDoc() {

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

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
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
            <Terminal welcomeMessage="Welcome to PrimeReact" prompt="primereact $" />
        </div>
    );
}
        `,

        extFiles: {
            'TerminalDemo.css': `
/* TerminalDemo.css */
.terminal-demo p {
    margin-top: 0;
}
.terminal-demo .p-terminal {
    background-color: #212121;
    color: #fff;
}
.terminal-demo .p-terminal .p-terminal-command {
    color: #80cbc4;
}
.terminal-demo .p-terminal .p-terminal-prompt {
    color: #ffd54f;
}
.terminal-demo .p-terminal .p-terminal-response {
    color: #9fa8da;
}
    `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Terminal Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <p>
                    Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
                </p>
                <Terminal welcomeMessage="Welcome to PrimeReact" prompt="primereact $" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
