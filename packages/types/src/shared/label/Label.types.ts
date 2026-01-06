/**
 *
 * Label can be used standalone or in conjunction with form components to provide accessible labeling.
 *
 * [Live Demo](https://www.primereact.org/label/)
 *
 * @module label
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Label component.
 */
export const LabelClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-label',
    /**
     * Class name of the root element
     */
    ifta: 'p-iftalabel',
    /**
     * Class name of the root element
     */
    float: 'p-floatlabel'
} as const;

/**
 * Type representing the CSS class names used in the Label component.
 */
export type LabelClassNamesType = (typeof LabelClassNames)[keyof typeof LabelClassNames];
