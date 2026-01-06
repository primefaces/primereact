/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * [Live Demo](https://www.primereact.org/knob/)
 *
 * @module knob
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Knob component.
 */
export const KnobClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-knob',
    /**
     * Class name of the range element
     */
    range: 'p-knob-range',
    /**
     * Class name of the value element
     */
    value: 'p-knob-value',
    /**
     * Class name of the text element
     */
    text: 'p-knob-text'
} as const;

/**
 * Type representing the CSS class names used in the Knob component.
 */
export type KnobClassNamesType = (typeof KnobClassNames)[keyof typeof KnobClassNames];
