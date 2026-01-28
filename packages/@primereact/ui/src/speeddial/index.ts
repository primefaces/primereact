export * as SpeedDial from './UISpeedDial.parts';

// Named runtime exports to maximize tree-shaking
export { defaultActionProps, defaultTriggerProps, defaultItemProps, defaultListProps, defaultRootProps, SpeedDialItem, SpeedDialList, SpeedDialProps, SpeedDialProvider, useSpeedDialContext } from 'primereact/speeddial';
export { UISpeedDialAction as SpeedDialAction } from './action';
export { UISpeedDialTrigger as SpeedDialTrigger } from './trigger';
export { UISpeedDialRoot as SpeedDialRoot } from './root';
