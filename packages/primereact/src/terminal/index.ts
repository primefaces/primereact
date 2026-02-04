export * from './Terminal.context';
export * as Terminal from './Terminal.parts';
export * as TerminalProps from './Terminal.props';

// Named runtime exports to maximize tree-shaking
export { defaultCommandProps, TerminalCommand } from './command';
export { defaultCommandListProps, TerminalCommandList } from './commandlist';
export { defaultCommandPromptLabelProps, TerminalCommandPromptLabel } from './commandpromptlabel';
export { defaultCommandResponseProps, TerminalCommandResponse } from './commandresponse';
export { defaultCommandValueProps, TerminalCommandValue } from './commandvalue';
export { defaultPromptProps, TerminalPrompt } from './prompt';
export { defaultPromptLabelProps, TerminalPromptLabel } from './promptlabel';
export { defaultPromptValueProps, TerminalPromptValue } from './promptvalue';
export { defaultRootProps, TerminalRoot } from './root';
export { defaultWelcomeProps, TerminalWelcome } from './welcome';
