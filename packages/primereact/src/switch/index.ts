export * from './Switch.context';
export * as Switch from './Switch.parts';
export * as SwitchProps from './Switch.props';

// Named runtime exports to maximize tree-shaking
export { defaultControlProps, SwitchControl } from './control';
export { defaultRootProps, SwitchRoot } from './root';
export { defaultThumbProps, SwitchThumb } from './thumb';
