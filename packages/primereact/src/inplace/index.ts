export * from './Inplace.context';
export * as Inplace from './Inplace.parts';
export * as InplaceProps from './Inplace.props';

// Named runtime exports to maximize tree-shaking
export { defaultCloseProps, InplaceClose } from './close';
export { defaultContentProps, InplaceContent } from './content';
export { defaultDisplayProps, InplaceDisplay } from './display';
export { defaultRootProps, InplaceRoot } from './root';
