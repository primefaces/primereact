export * as SpeedDial from './UISpeedDial.parts';

// Named runtime exports to maximize tree-shaking
export { defaultActionProps, defaultButtonProps, defaultItemProps, defaultListProps, defaultRootProps, SpeedDialItem, SpeedDialList, SpeedDialProps, SpeedDialProvider, useSpeedDialContext } from 'primereact/speeddial';
export { UISpeedDialAction as SpeedDialAction } from './action';
export { UISpeedDialButton as SpeedDialButton } from './button';
export { UISpeedDialRoot as SpeedDialRoot } from './root';
