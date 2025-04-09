import { BaseComponentProps } from '..';

/**
 * MeterGroupIcon component props.
 */
export interface MeterGroupIconProps extends BaseComponentProps<{ readonly __TYPE: 'MeterGroupIcon' }, 'span'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroupIcon';
    /**
     * The color of the marker.
     */
    color: string;
}
