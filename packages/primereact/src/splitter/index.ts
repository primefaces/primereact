export * from './Splitter.context';
export * as Splitter from './Splitter.parts';
export * as SplitterProps from './Splitter.props';

// Named runtime exports to maximize tree-shaking
export { defaultGutterProps, SplitterGutter } from './gutter';
export { defaultPanelProps, SplitterPanel } from './panel';
export { defaultRootProps, SplitterRoot } from './root';
export { defaultThumbProps, SplitterThumb } from './thumb';
