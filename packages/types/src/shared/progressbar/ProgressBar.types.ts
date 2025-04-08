import { BaseComponentProps } from '..';
import { useProgressBarProps } from './useProgressBar.types';

/**
 * ProgressBar component props.
 */
export interface ProgressBarProps extends BaseComponentProps<useProgressBarProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'ProgressBar';

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

export interface ProgressBarLabelProps extends BaseComponentProps<{ readonly __TYPE: 'ProgressBarLabel' }, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'ProgressBarLabel';
}
