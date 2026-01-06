/**
 *
 * Dialog is a container to display content in an overlay window.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialog
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Dialog component.
 */
export const DialogClassNames = {
    /**
     * Class name of the mask element
     */
    mask: 'p-dialog-mask',
    /**
     * Class name of the root element
     */
    root: 'p-dialog',
    /**
     * Class name of the trigger button element
     */
    trigger: 'p-dialog-trigger-button',
    /**
     * Class name of the header element
     */
    header: 'p-dialog-header',
    /**
     * Class name of the title element
     */
    title: 'p-dialog-title',
    /**
     * Class name of the header actions element
     */
    headerActions: 'p-dialog-header-actions',
    /**
     * Class name of the maximize button element
     */
    maximize: 'p-dialog-maximize-button',
    /**
     * Class name of the close button element
     */
    close: 'p-dialog-close-button',
    /**
     * Class name of the content element
     */
    content: 'p-dialog-content',
    /**
     * Class name of the footer element
     */
    footer: 'p-dialog-footer'
} as const;

/**
 * Type representing the CSS class names used in the Dialog component.
 */
export type DialogClassNamesType = (typeof DialogClassNames)[keyof typeof DialogClassNames];
