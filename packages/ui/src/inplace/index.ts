export * as Inplace from './UIInplace.parts';

// Named runtime exports to maximize tree-shaking
export { defaultCloseProps, defaultContentProps, defaultDisplayProps, defaultRootProps, InplaceClose, InplaceContent, InplaceDisplay, InplaceProps, InplaceProvider, useInplaceContext } from 'primereact/inplace';
export { UIInplaceRoot as InplaceRoot } from './root';
