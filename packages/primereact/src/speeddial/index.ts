export * from './SpeedDial.context';
export * as SpeedDial from './SpeedDial.parts';
export * as SpeedDialProps from './SpeedDial.props';

// Named runtime exports to maximize tree-shaking
export { defaultActionProps, SpeedDialAction } from './action';
export { defaultTriggerProps, SpeedDialTrigger } from './trigger';
export { defaultItemProps, SpeedDialItem } from './item';
export { defaultListProps, SpeedDialList } from './list';
export { defaultRootProps, SpeedDialRoot } from './root';
