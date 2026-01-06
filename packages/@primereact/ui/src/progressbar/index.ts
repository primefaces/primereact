export * as ProgressBar from './UIProgressBar.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultIndicatorProps,
    defaultLabelProps,
    defaultRootProps,
    defaultTrackProps,
    defaultValueProps,
    ProgressBarIndicator,
    ProgressBarLabel,
    ProgressBarProps,
    ProgressBarProvider,
    ProgressBarTrack,
    ProgressBarValue,
    useProgressBarContext
} from 'primereact/progressbar';
export { UIProgressBarRoot as ProgressBarRoot } from './root';
