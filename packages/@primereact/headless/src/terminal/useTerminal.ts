import { withHeadless } from '@primereact/core/headless';
import { TerminalCommandItem, TerminalResponse } from '@primereact/types/shared/terminal';
import { focus } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useTerminal.props';

export const useTerminal = withHeadless({
    name: 'useTerminal',
    defaultProps,
    setup({ props, elementRef }) {
        const [commandTextState, setCommandTextState] = React.useState<string>('');
        const [commandsState, setCommandsState] = React.useState<TerminalCommandItem[]>([]);
        const [indexState, setIndexState] = React.useState<number>(0);
        const inputRef = React.useRef<HTMLInputElement>(null);

        const state = {
            commandText: commandTextState,
            commands: commandsState
        };

        const clear = React.useCallback(() => {
            setCommandsState([]);
            setIndexState(0);
        }, []);

        const handleResponse = React.useCallback(
            (response: TerminalResponse) => {
                if (response === null) {
                    clear();
                } else if (response !== undefined) {
                    setCommandsState((prev) => {
                        if (prev.length === 0) return prev;

                        const commands = [...prev];

                        commands[commands.length - 1].response = response;

                        return commands;
                    });
                }
            },
            [clear]
        );

        const executeCommand = React.useCallback(
            async (text: string) => {
                if (!props.onCommand) return;

                const result = props.onCommand(text);

                if (result instanceof Promise) {
                    const response = await result;

                    handleResponse(response);
                } else {
                    handleResponse(result);
                }
            },
            [props.onCommand, handleResponse]
        );

        React.useEffect(() => {
            if (elementRef.current) {
                elementRef.current.scrollTop = elementRef.current.scrollHeight;
            }
        });

        const onClick = () => {
            if (inputRef.current) {
                focus(inputRef.current);
            }
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
                case 'NumpadEnter':
                    if (commandTextState) {
                        const newCommands = [...commandsState];

                        newCommands.push({ text: commandTextState });

                        setIndexState((prevIndex) => prevIndex + 1);
                        setCommandTextState('');
                        setCommandsState(newCommands);
                        executeCommand(commandTextState);
                    }

                    break;

                default:
                    break;
            }
        };

        const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setCommandTextState(e.target.value);
        };

        return {
            state,
            inputRef,
            onClick,
            onKeyDown,
            onInputChange,
            clear
        };
    }
});
