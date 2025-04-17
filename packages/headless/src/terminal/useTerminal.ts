import { withHeadless } from '@primereact/core/headless';
import { CommandItem } from '@primereact/types/shared/terminal';
import { focus } from '@primeuix/utils/dom';
import TerminalService from 'primereact/terminalservice';
import * as React from 'react';
import { defaultProps } from './useTerminal.props';

export const useTerminal = withHeadless({
    setup: ({ elementRef }) => {
        const [commandTextState, setCommandTextState] = React.useState<string>('');
        const [commandsState, setCommandsState] = React.useState<CommandItem[]>([]);
        const [indexState, setIndexState] = React.useState<number>(0);
        const [emittedTextState, setEmittedTextState] = React.useState<string>('');
        const inputRef = React.useRef<HTMLInputElement>(null);
        const isEmitted = React.useRef<boolean>(false);

        React.useEffect(() => {
            const response = (res: unknown) => {
                if (commandsState && commandsState.length > 0) {
                    const commands = [...commandsState];

                    commands[commands.length - 1].response = String(res);

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

            if (elementRef && 'current' in elementRef && elementRef.current) {
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
                        setEmittedTextState(commandTextState);
                        isEmitted.current = true;
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
            commandsState,
            commandTextState,
            inputRef,
            onClick,
            onKeyDown,
            onInputChange
        };
    },
    defaultProps
});
