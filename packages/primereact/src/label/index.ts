export * from './Label.context';
export * as Label from './Label.parts';
export * as LabelProps from './Label.props';

// Named runtime exports to maximize tree-shaking
export { defaultFloatProps, FloatLabel } from './float';
export { defaultIftaProps, IftaLabel } from './ifta';
export { defaultRootProps, LabelRoot } from './root';
