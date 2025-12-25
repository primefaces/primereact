export * from './Tag.context';
export * as Tag from './Tag.parts';
export * as TagProps from './Tag.props';

// Named runtime exports to maximize tree-shaking
export { defaultIconProps, TagIcon } from './icon';
export { defaultLabelProps, TagLabel } from './label';
export { defaultRootProps, TagRoot } from './root';
