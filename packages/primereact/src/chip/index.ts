export * from './Chip.context';
export * as Chip from './Chip.parts';
export * as ChipProps from './Chip.props';

// Named runtime exports to maximize tree-shaking
export { ChipIcon, defaultIconProps } from './icon';
export { ChipImage, defaultImageProps } from './image';
export { ChipLabel, defaultLabelProps } from './label';
export { ChipRemoveIcon, defaultRemoveIconProps } from './removeicon';
export { ChipRoot, defaultRootProps } from './root';
