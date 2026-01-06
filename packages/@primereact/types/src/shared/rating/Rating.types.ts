/**
 *
 * Rating is a component that displays a rating value.
 *
 * [Live Demo](https://www.primereact.org/rating/)
 *
 * @module rating
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Rating component.
 */
export const RatingClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-rating',
    /**
     * Class name of the option element
     */
    option: 'p-rating-option',
    /**
     * Class name of the on icon element
     */
    onIcon: 'p-rating-on-icon',
    /**
     * Class name of the off icon element
     */
    offIcon: 'p-rating-off-icon'
} as const;

/**
 * Type representing the CSS class names used in the Toolbar component.
 */
export type RatingClassNamesType = (typeof RatingClassNames)[keyof typeof RatingClassNames];
