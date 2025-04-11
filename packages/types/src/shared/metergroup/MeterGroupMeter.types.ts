import { BaseComponentProps } from '..';

/**
 * MeterGroup component props.
 */
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
