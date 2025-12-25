export * from './Badge.context';
export * as Badge from './Badge.parts';
export * as BadgeProps from './Badge.props';

// Named runtime exports to maximize tree-shaking
export { defaultOverlayProps, OverlayBadge } from './overlay';
export { BadgeRoot, defaultRootProps } from './root';
