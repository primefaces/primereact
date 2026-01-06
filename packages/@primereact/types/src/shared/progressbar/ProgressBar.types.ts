/**
 *
 * ProgressBar is a process status indicator.
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 *
 * @module progressbar
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ProgressBar component.
 */
export const ProgressBarClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-progressbar',
    /**
     * Class name of the value element
     */
    value: 'p-progressbar-value',
    /**
     * Class name of the label element
     */
    label: 'p-progressbar-label'
} as const;

/**
 * Type representing the CSS class names used in the ProgressBar component.
 */
export type ProgressBarClassNamesType = (typeof ProgressBarClassNames)[keyof typeof ProgressBarClassNames];
