export * as Badge from './UIBadge.parts';

// Named runtime exports to maximize tree-shaking
export { BadgeProps, BadgeProvider, defaultOverlayProps, OverlayBadge, useBadgeContext } from 'primereact/badge';
export { UIBadgeRoot as BadgeRoot } from './root';
