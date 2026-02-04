export * as Terminal from './UITerminal.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultCommandListProps,
    defaultCommandPromptLabelProps,
    defaultCommandProps,
    defaultCommandResponseProps,
    defaultCommandValueProps,
    defaultPromptLabelProps,
    defaultPromptProps,
    defaultPromptValueProps,
    defaultRootProps,
    defaultWelcomeProps,
    TerminalCommand,
    TerminalCommandList,
    TerminalCommandPromptLabel,
    TerminalCommandResponse,
    TerminalCommandValue,
    TerminalPrompt,
    TerminalPromptLabel,
    TerminalPromptValue,
    TerminalProps,
    TerminalProvider,
    TerminalWelcome,
    useTerminalContext
} from 'primereact/terminal';
export { UITerminalRoot as TerminalRoot } from './root';
