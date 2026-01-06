/**
 *
 * MeterGroup displays scalar measurements within a known range.
 *
 * [Live Demo](https://www.primereact.org/metergroup/)
 *
 * @module metergroup
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the MeterGroup component.
 */
export const MeterGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-metergroup',
    /**
     * Class name of the meters element
     */
    meters: 'p-metergroup-meters',
    /**
     * Class name of the meter element
     */
    meter: 'p-metergroup-meter',
    /**
     * Class name of the label list element
     */
    labelList: 'p-metergroup-label-list',
    /**
     * Class name of the label element
     */
    label: 'p-metergroup-label',
    /**
     * Class name of the label icon element
     */
    labelIcon: 'p-metergroup-label-icon',
    /**
     * Class name of the label marker element
     */
    labelMarker: 'p-metergroup-label-marker',
    /**
     * Class name of the label text element
     */
    labelText: 'p-metergroup-label-text'
} as const;

/**
 * Type representing the CSS class names used in the MeterGroup component.
 */
export type MeterGroupClassNamesType = (typeof MeterGroupClassNames)[keyof typeof MeterGroupClassNames];
