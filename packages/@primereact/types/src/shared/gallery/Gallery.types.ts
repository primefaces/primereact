/**
 *
 * Gallery groups a collection of contents in items.
 *
 * [Live Demo](https://www.primereact.org/gallery/)
 *
 * @module gallery
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Gallery component.
 */
export const GalleryClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-gallery',
    /**
     * Class name of the backdrop element
     */
    backdrop: 'p-gallery-backdrop',
    /**
     * Class name of the content element
     */
    content: 'p-gallery-content',
    /**
     * Class name of the item element
     */
    item: 'p-gallery-item',
    /**
     * Class name of the next element
     */
    next: 'p-gallery-next',
    /**
     * Class name of the prev element
     */
    prev: 'p-gallery-prev',
    /**
     * Class name of the toolbar element
     */
    toolbar: 'p-gallery-toolbar',
    /**
     * Class name of the toolbar item element
     */
    toolbarItem: 'p-gallery-toolbar-item',
    /**
     * Class name of the thumbnail element
     */
    thumbnail: 'p-gallery-thumbnail',
    /**
     * Class name of the thumbnail content element
     */
    thumbnailContent: 'p-gallery-thumbnail-content',
    /**
     * Class name of the thumbnail item element
     */
    thumbnailItem: 'p-gallery-thumbnail-item'
} as const;

/**
 * Type representing the CSS class names used in the Gallery component.
 */
export type GalleryClassNamesType = (typeof GalleryClassNames)[keyof typeof GalleryClassNames];
