import { BaseComponentProps } from '..';
import { useSkeletonProps } from './useSkeleton.types';

/**
 * Skeleton component props.
 */
export interface SkeletonProps extends BaseComponentProps<useSkeletonProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Skeleton';
    /**
     * Shape of the element.
     * @defaultValue rectangle
     */
    shape?: 'rectangle' | 'circle' | undefined;
    /**
     * Size of the Circle or Square.
     */
    size?: string | undefined;
    /**
     * Width of the element.
     * @defaultValue 100%
     */
    width?: string | undefined;
    /**
     * Height of the element.
     * @defaultValue 1rem
     */
    height?: string | undefined;
    /**
     * Border radius of the element, defaults to value from theme.
     */
    borderRadius?: string | undefined;
    /**
     * Type of the animation.
     * @defaultValue wave
     */
    animation?: 'wave' | 'none' | undefined;
}
