export * as Terminal from './UITerminal.parts';

// Named runtime exports to maximize tree-shaking
export { defaultCommandListProps, defaultRootProps, defaultWelcomeProps, TerminalCommandList, TerminalProps, TerminalProvider, TerminalWelcome, useTerminalContext } from 'primereact/terminal';
export { UITerminalRoot as TerminalRoot } from './root';
