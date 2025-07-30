import { createStyles } from '@primereact/styles/utils';
import type { TerminalInstance } from '@primereact/types/shared/terminal';
import { style } from '@primeuix/styles/terminal';

export const styles = createStyles<TerminalInstance>({
    name: 'terminal',
    style,
    classes: {
        root: 'p-terminal p-component',
        welcome: 'p-terminal-welcome-message',
        commandList: 'p-terminal-command-list',
        command: 'p-terminal-command',
        commandValue: 'p-terminal-command-value',
        commandResponse: 'p-terminal-command-response',
        prompt: 'p-terminal-prompt',
        promptLabel: 'p-terminal-prompt-label',
        promptValue: 'p-terminal-prompt-value'
    }
});
