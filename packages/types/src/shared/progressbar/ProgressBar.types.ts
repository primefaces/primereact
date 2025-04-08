import type { GlobalComponentProps } from '@primereact/types/core';

export interface ProgressBarProps extends GlobalComponentProps {
    readonly __TYPE?: 'ProgressBar';
    /**
     * Current value of the progress.
     */
    value?: number | undefined;
    /**
     * Defines the mode of the progress
     * @defaultValue determinate
     */
    mode?: 'determinate' | 'indeterminate' | undefined;
    /**
     * Style of the progressbar.
     */
    style?: React.CSSProperties | undefined;
}

export interface ProgressBarLabelProps extends GlobalComponentProps {
    readonly __TYPE?: 'ProgressBarLabel';
}
