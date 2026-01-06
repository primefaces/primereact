/**
 *
 *  Carousel is a flexible container component.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carousel
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Carousel component.
 */
export const CarouselClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-carousel'
} as const;

/**
 * Type representing the CSS class names used in the Carousel component.
 */
export type CarouselClassNamesType = (typeof CarouselClassNames)[keyof typeof CarouselClassNames];
