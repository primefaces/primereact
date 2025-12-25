export * from './Message.context';
export * as Message from './Message.parts';
export * as MessageProps from './Message.props';

// Named runtime exports to maximize tree-shaking
export { defaultCloseProps, MessageClose } from './close';
export { defaultContentProps, MessageContent } from './content';
export { defaultIconProps, MessageIcon } from './icon';
export { defaultRootProps, MessageRoot } from './root';
export { defaultTextProps, MessageText } from './text';
