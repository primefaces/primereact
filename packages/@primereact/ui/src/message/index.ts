export * as Message from './UIMessage.parts';

// Named runtime exports to maximize tree-shaking
export { defaultCloseProps, defaultContentProps, defaultIconProps, defaultRootProps, defaultTextProps, MessageClose, MessageContent, MessageIcon, MessageProps, MessageProvider, MessageText, useMessageContext } from 'primereact/message';
export { UIMessageRoot as MessageRoot } from './root';
