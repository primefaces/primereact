import { BaseComponentProps } from '..';

/**
 * MeterGroupLabels component props.
 */
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
