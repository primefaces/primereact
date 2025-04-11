import { BaseComponentProps } from '..';
import { useMeterGroupProps } from './useMeterGroup.types';

/**
 * MeterGroup component props.
 */
export interface MeterGroupProps extends BaseComponentProps<useMeterGroupProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroup';
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
}

export interface MeterGroupMetersProps extends BaseComponentProps<{ readonly __TYPE: 'MeterGroupMeters' }, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroupMeters';
}

export interface MeterGroupMeterProps extends BaseComponentProps<{ readonly __TYPE: 'MeterGroupMeter' }, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroupMeter';
    /**
     * The value of the meter.
     */
    value: any;
}

export interface MeterGroupLabelsProps extends BaseComponentProps<{ readonly __TYPE: 'MeterGroupLabels' }, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroupLabels';
    /**
     * Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
}

export interface MeterGroupLabelProps extends BaseComponentProps<{ readonly __TYPE: 'MeterGroupLabel' }, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroupLabel';
}

export interface MeterGroupMarkerProps extends BaseComponentProps<{ readonly __TYPE: 'MeterGroupMarker' }, 'span'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroupMarker';
    /**
     * The color of the marker.
     */
    color: string;
}

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

export interface MeterGroupTextProps extends BaseComponentProps<{ readonly __TYPE: 'MeterGroupText' }, 'span'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'MeterGroupText';
}
