export * from './ImageCompare.context';
export * as ImageCompare from './ImageCompare.parts';
export * as ImageCompareProps from './ImageCompare.props';

// Named runtime exports to maximize tree-shaking
export { defaultLeftProps, ImageCompareLeft } from './left';
export { defaultRightProps, ImageCompareRight } from './right';
export { defaultRootProps, ImageCompareRoot } from './root';
export { defaultSliderProps, ImageCompareSlider } from './slider';
