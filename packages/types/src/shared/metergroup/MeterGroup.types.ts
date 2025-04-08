import type { GlobalComponentProps } from '@primereact/types/core';

export interface MeterGroupProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroup';
    /**
     * Mininum boundary value.
     * @defaultValue 0
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * @defaultValue 100
     */
    max?: number | undefined;
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
}

export interface MeterGroupMetersProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroupMeters';
}

export interface MeterGroupMeterProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroupMeter';
    value: any;
}

export interface MeterGroupLabelsProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroupLabels';
    /**
     * Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
}

export interface MeterGroupLabelProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroupLabel';
}

export interface MeterGroupMarkerProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroupMarker';
    color: string;
}

export interface MeterGroupIconProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroupIcon';
    color: string;
}

export interface MeterGroupTextProps extends GlobalComponentProps {
    readonly __TYPE?: 'MeterGroupText';
}
