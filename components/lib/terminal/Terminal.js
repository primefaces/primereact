import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { TerminalService } from '../terminalservice/TerminalService';
import { DomHandler, classNames } from '../utils/Utils';
import { TerminalBase } from './TerminalBase';

export const Terminal = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = TerminalBase.getProps(inProps, context);

        const [commandTextState, setCommandTextState] = React.useState('');
        const [commandsState, setCommandsState] = React.useState([]);
        const [indexState, setIndexState] = React.useState(0);
        const [emittedTextState, setEmittedTextState] = React.useState('');
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(null);
        const isEmitted = React.useRef(false);

        const { ptm, cx, isUnstyled } = TerminalBase.setMetaData({
            props,
            state: {
                commandText: commandTextState,
                commands: commandsState
            }
        });

        useHandleStyle(TerminalBase.css.styles, isUnstyled, { name: 'terminal' });
        const promptProps = mergeProps(
            {
                className: cx('prompt')
            },
            ptm('prompt')
        );

        const onClick = () => {
            DomHandler.focus(inputRef.current);
        };

        const onInputChange = (e) => {
            setCommandTextState(e.target.value);
        };

        const onKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    if (commandsState && commandsState.length) {
                        const prevIndex = indexState - 1 < 0 ? commandsState.length - 1 : indexState - 1;
                        const command = commandsState[prevIndex];

                        setIndexState(prevIndex);
                        setCommandTextState(command.text);
                    }

                    break;

                case 'Enter':
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
                    className: cx('command')
                },
                ptm('command')
            );
            const responseProps = mergeProps(
                {
                    className: cx('response'),
                    'aria-live': 'polite'
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
                    className: cx('content')
                },
                ptm('content')
            );

            return <div {...contentProps}>{content}</div>;
        };

        const createPromptContainer = () => {
            const containerProps = mergeProps(
                {
                    className: cx('container')
                },
                ptm('container')
            );

            const commandTextProps = mergeProps(
                {
                    ref: inputRef,
                    value: commandTextState,
                    type: 'text',
                    className: cx('commandText'),
                    autoComplete: 'off',
                    onChange: (e) => onInputChange(e),
                    onKeyDown
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

        const welcomeMessage = createWelcomeMessage();
        const content = createContent();
        const prompt = createPromptContainer();
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: classNames(props.className, cx('root')),
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
