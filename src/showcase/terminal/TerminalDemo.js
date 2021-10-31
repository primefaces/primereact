import React, { Component } from 'react';
import { Terminal } from '../../components/terminal/Terminal';
import { TerminalService } from '../../components/terminalservice/TerminalService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TerminalDoc } from './TerminalDoc';
import AppDemoActions from '../../AppDemoActions';
import './TerminalDemo.scss'

export class TerminalDemo extends Component {

    commandHandler(text) {
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

    componentDidMount() {
        TerminalService.on('command', this.commandHandler);
    }

    componentWillUnmount() {
        TerminalService.off('command', this.commandHandler);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="terminal">
                        <h1>Terminal</h1>
                        <p>Terminal is a text based user interface.</p>
                    </AppInlineHeader>

                    <AppDemoActions github="terminal/TerminalDemo.js" />
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
}
