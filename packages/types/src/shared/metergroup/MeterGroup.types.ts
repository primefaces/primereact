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
