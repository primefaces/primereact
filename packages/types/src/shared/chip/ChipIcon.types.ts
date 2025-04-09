import { BaseComponentProps } from '..';

/**
 * ChipIcon component props.
 */
export interface ChipIconProps extends BaseComponentProps<{ readonly __TYPE: 'ChipIcon' }, 'span'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'ChipIcon';
    /**
     * Style class of the icon.
     */
    className?: string | undefined;
}
