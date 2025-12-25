export * as SpeedDial from './UISpeedDial.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultActionProps,
    defaultButtonProps,
    defaultItemProps,
    defaultListProps,
    defaultRootProps,
    SpeedDialAction,
    SpeedDialButton,
    SpeedDialItem,
    SpeedDialList,
    SpeedDialProps,
    SpeedDialProvider,
    useSpeedDialContext
} from 'primereact/speeddial';
export { UISpeedDialRoot as SpeedDialRoot } from './root';
