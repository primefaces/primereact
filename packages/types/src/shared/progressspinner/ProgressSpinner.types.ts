import { BaseComponentProps } from '..';
import { useProgressSpinnerProps } from './useProgressSpinner.types';

/**
 * ProgressSpinner component props.
 */
export interface ProgressSpinnerProps extends BaseComponentProps<useProgressSpinnerProps, 'span'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'ProgressSpinner';
    /**
     * Width of the circle stroke.
     * @defaultValue 2
     */
    strokeWidth?: string | undefined;
    /**
     * Color for the background of the circle.
     */
    fill?: string | undefined;
    /**
     * Duration of the rotate animation.
     * @defaultValue 2s
     */
    animationDuration?: string | undefined;
}
