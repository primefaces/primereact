import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TerminalService } from '../terminalservice/TerminalService';
import { classNames } from '../utils/Utils';

export class Terminal extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        welcomeMessage: null,
        prompt: null
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        welcomeMessage: PropTypes.string,
        prompt: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            commandText: '',
            commands: [],
            index: 0
        }

        this.onClick = this.onClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.response = this.response.bind(this);
        this.clear = this.clear.bind(this);
    }

    onClick() {
        this.input.focus();
    }

    onInputChange(e) {
        this.setState({ commandText: e.target.value });
    }

    onInputKeyDown(e) {
        const code = e.which || e.keyCode;
        const commands = this.state.commands;

        switch (code) {
            //up
            case 38:
                if (commands && commands.length) {
                    const prevIndex = this.state.index - 1 < 0 ? commands.length - 1 : this.state.index - 1;
                    const command = commands[prevIndex];

                    this.setState({
                        index: prevIndex,
                        commandText: command.text
                    });
                }
                break;

            //enter
            case 13:
                if (!!this.state.commandText) {
                    let newCommands = [...commands];
                    let text = this.state.commandText;

                    newCommands.push({ text });

                    this.setState((prevState) => ({
                        index: prevState.index + 1,
                        commandText: '',
                        commands: newCommands
                    }), () => {
                        TerminalService.emit('command', text);
                    });
                }

                break;

            default:
                break;
        }
    }

    response(res) {
        let commands = this.state.commands;

        if (commands && commands.length > 0) {
            let _commands = [...commands];
            _commands[_commands.length - 1].response = res;

            this.setState({ commands: _commands });
        }
    }

    clear() {
        this.setState({
            commands: [],
            index: 0
        });
    }

    componentDidMount() {
        TerminalService.on('response', this.response);
        TerminalService.on('clear', this.clear);
    }

    componentDidUpdate() {
        this.container.scrollTop = this.container.scrollHeight;
    }

    componentWillUnmount() {
        TerminalService.off('response', this.response);
        TerminalService.off('clear', this.clear);
    }

    renderWelcomeMessage() {
        if (this.props.welcomeMessage) {
            return <div>{this.props.welcomeMessage}</div>;
        }

        return null;
    }

    renderCommand(command, index) {
        const { text, response } = command;

        return (
            <div key={`${text}${index}`}>
                <span className="p-terminal-prompt">{this.props.prompt}&nbsp;</span>
                <span className="p-terminal-command">{text}</span>
                <div className="p-terminal-response">{response}</div>
            </div>
        )
    }

    renderContent() {
        const commands = this.state.commands.map((c, i) => this.renderCommand(c, i));

        return (
            <div className="p-terminal-content">
                {commands}
            </div>
        )
    }

    renderPromptContainer() {
        return (
            <div className="p-terminal-prompt-container">
                <span className="p-terminal-prompt">{this.props.prompt}&nbsp;</span>
                <input ref={(el) => this.input = el} type="text" value={this.state.commandText} className="p-terminal-input"
                    autoComplete="off" onChange={this.onInputChange} onKeyDown={this.onInputKeyDown} />
            </div>
        )
    }

    render() {
        const className = classNames('p-terminal p-component', this.props.className);
        const welcomeMessage = this.renderWelcomeMessage();
        const content = this.renderContent();
        const prompt = this.renderPromptContainer();

        return (
            <div ref={(el) => this.container = el} id={this.props.id} className={className} style={this.props.style} onClick={this.onClick}>
                {welcomeMessage}
                {content}
                {prompt}
            </div>
        );
    }
}
