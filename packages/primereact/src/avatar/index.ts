export * from './Avatar.context';
export * as Avatar from './Avatar.parts';
export * as AvatarProps from './Avatar.props';

// Named runtime exports to maximize tree-shaking
export { AvatarFallback, defaultFallbackProps } from './fallback';
export { AvatarGroup, defaultGroupProps } from './group';
export { AvatarImage, defaultImageProps } from './image';
export { AvatarRoot, defaultRootProps } from './root';
