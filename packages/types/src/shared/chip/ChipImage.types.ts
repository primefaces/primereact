import { BaseComponentProps } from '..';

/**
 * ChipImage component props.
 */
export interface ChipImageProps extends BaseComponentProps<{ readonly __TYPE: 'ChipImage' }, 'img'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'ChipImage';
    /**
     * Defines the image to display.
     */
    src?: string | undefined;
}
