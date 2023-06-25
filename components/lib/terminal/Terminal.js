import * as React from 'react';
import { TerminalService } from '../terminalservice/TerminalService';
import { classNames, DomHandler, mergeProps } from '../utils/Utils';
import { TerminalBase } from './TerminalBase';
import { PrimeReactContext } from '../api/Api';

export const Terminal = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = TerminalBase.getProps(inProps, context);

        const [commandTextState, setCommandTextState] = React.useState('');
        const [commandsState, setCommandsState] = React.useState([]);
        const [indexState, setIndexState] = React.useState(0);
        const [emittedTextState, setEmittedTextState] = React.useState('');
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(null);
        const isEmitted = React.useRef(false);

        const { ptm } = TerminalBase.setMetaData({
            props,
            state: {
                commandText: commandTextState,
                commands: commandsState
            }
        });

        const promptProps = mergeProps(
            {
                className: 'p-terminal-prompt'
            },
            ptm('prompt')
        );

        const onClick = () => {
            DomHandler.focus(inputRef.current);
        };

        const onInputChange = (e) => {
            setCommandTextState(e.target.value);
        };

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
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            const response = (res) => {
                if (commandsState && commandsState.length > 0) {
                    let commands = [...commandsState];

                    commands[commands.length - 1].response = res;

                    setCommandsState(commands);
                }
            };

            const clear = () => {
                setCommandsState([]);
                setIndexState(0);
            };

            TerminalService.on('response', response);
            TerminalService.on('clear', clear);

            return () => {
                TerminalService.off('response', response);
                TerminalService.off('clear', clear);
            };
        }, [commandsState]);

        React.useEffect(() => {
            if (isEmitted.current) {
                TerminalService.emit('command', emittedTextState);
                isEmitted.current = false;
            }

            elementRef.current.scrollTop = elementRef.current.scrollHeight;
        });

        const createWelcomeMessage = () => {
            if (props.welcomeMessage) {
                const welcomeMessageProps = mergeProps(ptm('welcomeMessage'));

                return <div {...welcomeMessageProps}>{props.welcomeMessage}</div>;
            }

            return null;
        };

        const createCommand = (command, index) => {
            const { text, response } = command;
            const key = text + '_' + index;
            const commandsProps = mergeProps({ key }, ptm('commands'));
            const commandProps = mergeProps(
                {
                    className: 'p-terminal-command'
                },
                ptm('command')
            );
            const responseProps = mergeProps(
                {
                    className: 'p-terminal-response'
                },
                ptm('response')
            );

            return (
                <div {...commandsProps}>
                    <span {...promptProps}>{props.prompt}&nbsp;</span>
                    <span {...commandProps}>{text}</span>
                    <div {...responseProps}>{response}</div>
                </div>
            );
        };

        const createContent = () => {
            const content = commandsState.map(createCommand);
            const contentProps = mergeProps(
                {
                    className: 'p-terminal-content'
                },
                ptm('content')
            );

            return <div {...contentProps}>{content}</div>;
        };

        const createPromptContainer = () => {
            const containerProps = mergeProps(
                {
                    className: 'p-terminal-prompt-container'
                },
                ptm('container')
            );

            const commandTextProps = mergeProps(
                {
                    ref: inputRef,
                    value: commandTextState,
                    type: 'text',
                    className: 'p-terminal-input',
                    autoComplete: 'off',
                    onChange: (e) => onInputChange(e),
                    onKeyDown: (e) => onInputKeyDown(e)
                },
                ptm('commandText')
            );

            return (
                <div {...containerProps}>
                    <span {...promptProps}>{props.prompt}&nbsp;</span>
                    <input {...commandTextProps} />
                </div>
            );
        };

        const className = classNames('p-terminal p-component', props.className);
        const welcomeMessage = createWelcomeMessage();
        const content = createContent();
        const prompt = createPromptContainer();
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className,
                style: props.style,
                onClick
            },
            TerminalBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {welcomeMessage}
                {content}
                {prompt}
            </div>
        );
    })
);

Terminal.displayName = 'Terminal';
