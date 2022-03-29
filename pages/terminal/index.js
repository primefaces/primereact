import React, { useEffect } from 'react';
import { Terminal } from '../../components/lib/terminal/Terminal';
import { TerminalService } from '../../components/lib/terminalservice/TerminalService';
import TerminalDoc from '../../components/doc/terminal';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TerminalDemo = () => {

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
        }
        else {
            TerminalService.emit('clear');
        }
    }

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        }
    }, [])


    return (
        <div>
            <Head>
                <title>React Terminal Component</title>
                <meta name="description" content="Terminal is a text based user interface." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Terminal</h1>
                    <p>Terminal is a text based user interface.</p>
                </div>

                <DocActions github="terminal/index.js" />
            </div>

            <div className="content-section implementation terminal-demo">
                <div className="card">
                    <p>Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.</p>
                    <Terminal welcomeMessage="Welcome to PrimeReact" prompt="primereact $" />
                </div>
            </div>

            <TerminalDoc />
        </div>
    )
}

export default TerminalDemo;
