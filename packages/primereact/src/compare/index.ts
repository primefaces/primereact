export * from './Compare.context';
export * as Compare from './Compare.parts';
export * as CompareProps from './Compare.props';

// Named runtime exports to maximize tree-shaking
export { CompareItem, defaultItemProps } from './item';
export { CompareRoot, defaultRootProps } from './root';
export { CompareHandle, defaultHandleProps } from './handle';
export { CompareIndicator, defaultIndicatorProps } from './indicator';
