export * from './ScrollArea.context';
export * as ScrollArea from './ScrollArea.parts';
export * as ScrollAreaProps from './ScrollArea.props';

// Named runtime exports to maximize tree-shaking
export { defaultContentProps, ScrollAreaContent } from './content';
export { defaultRootProps, ScrollAreaRoot } from './root';
export { defaultThumbXProps, ScrollAreaThumbX } from './thumbx';
export { defaultThumbYProps, ScrollAreaThumbY } from './thumby';
export { defaultViewportProps, ScrollAreaViewport } from './viewport';
