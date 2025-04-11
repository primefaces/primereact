import { BaseComponentProps } from '..';

/**
 * MeterGroupMarker component props.
 */
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
