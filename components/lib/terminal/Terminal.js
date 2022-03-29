import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TerminalService } from '../terminalservice/TerminalService';
import { classNames } from '../utils/Utils';

export const Terminal = memo(forwardRef((props, ref) => {
    const [commandTextState, setCommandTextState] = useState('');
    const [commandsState, setCommandsState] = useState([]);
    const [indexState, setIndexState] = useState(0);
    const [emittedTextState, setEmittedTextState] = useState('');
    const elementRef = useRef(null);
    const inputRef = useRef(null);
    const isEmitted = useRef(false);

    const onClick = () => {
        inputRef.current.focus();
    }

    const onInputChange = (e) => {
        setCommandTextState(e.target.value);
    }

    const onInputKeyDown = (e) => {
        const code = e.which || e.keyCode;
        switch (code) {
            //up
            case 38:
                if (commandsState && commandsState.length) {
                    const prevIndex = indexState - 1 < 0 ? commandsState.length - 1 : indexState - 1;
                    const command = commandsState[prevIndex];

                    setIndexState(prevIndex);
                    setCommandTextState(command.text);
                }
                break;

            //enter
            case 13:
                if (!!commandTextState) {
                    let newCommands = [...commandsState];

                    newCommands.push({ text: commandTextState });

                    setIndexState((prevIndex) => prevIndex + 1);
                    setCommandTextState('');
                    setCommandsState(newCommands);
                    setEmittedTextState(commandTextState);
                    isEmitted.current = true;
                }

                break;

            default:
                break;
        }
    }

    useEffect(() => {
        const response = (res) => {
            if (commandsState && commandsState.length > 0) {
                let commands = [...commandsState];
                commands[commands.length - 1].response = res;

                setCommandsState(commands);
            }
        }

        const clear = () => {
            setCommandsState([]);
            setIndexState(0);
        }

        TerminalService.on('response', response);
        TerminalService.on('clear', clear);

        return () => {
            TerminalService.off('response', response);
            TerminalService.off('clear', clear);
        }
    }, [commandsState]);

    useEffect(() => {
        if (isEmitted.current) {
            TerminalService.emit('command', emittedTextState);
            isEmitted.current = false;
        }

        elementRef.current.scrollTop = elementRef.current.scrollHeight;
    });

    const createWelcomeMessage = () => {
        if (props.welcomeMessage) {
            return <div>{props.welcomeMessage}</div>;
        }

        return null;
    }

    const createCommand = (command, index) => {
        const { text, response } = command;
        const key = text + '_' + index;

        return (
            <div key={key}>
                <span className="p-terminal-prompt">{props.prompt}&nbsp;</span>
                <span className="p-terminal-command">{text}</span>
                <div className="p-terminal-response">{response}</div>
            </div>
        )
    }

    const createContent = () => {
        const content = commandsState.map(createCommand);

        return (
            <div className="p-terminal-content">
                {content}
            </div>
        )
    }

    const createPromptContainer = () => {
        return (
            <div className="p-terminal-prompt-container">
                <span className="p-terminal-prompt">{props.prompt}&nbsp;</span>
                <input ref={inputRef} type="text" value={commandTextState} className="p-terminal-input"
                    autoComplete="off" onChange={onInputChange} onKeyDown={onInputKeyDown} />
            </div>
        )
    }

    const className = classNames('p-terminal p-component', props.className);
    const welcomeMessage = createWelcomeMessage();
    const content = createContent();
    const prompt = createPromptContainer();

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} onClick={onClick}>
            {welcomeMessage}
            {content}
            {prompt}
        </div>
    )
}));

Terminal.defaultProps = {
    __TYPE: 'Terminal',
    id: null,
    style: null,
    className: null,
    welcomeMessage: null,
    prompt: null
}

Terminal.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    welcomeMessage: PropTypes.string,
    prompt: PropTypes.string
}
