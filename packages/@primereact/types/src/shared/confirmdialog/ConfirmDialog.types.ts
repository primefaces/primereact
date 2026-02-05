/**
 *
 * ConfirmDialog uses a Dialog UI with <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialog
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ConfirmDialog component.
 */
export const ConfirmDialogClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-confirmdialog',
    /**
     * Class name of the trigger button element
     */
    trigger: 'p-confirmdialog-trigger-button',
    /**
     * Class name of the content element
     */
    content: 'p-confirmdialog-content',
    /**
     * Class name of the header element
     */
    header: 'p-confirmdialog-header',
    /**
     * Class name of the footer element
     */
    footer: 'p-confirmdialog-footer',
    /**
     * Class name of the title element
     */
    title: 'p-confirmdialog-title',
    /**
     * Class name of the icon element
     */
    icon: 'p-confirmdialog-icon',
    /**
     * Class name of the message element
     */
    message: 'p-confirmdialog-message',
    /**
     * Class name of the close button element
     */
    close: 'p-confirmdialog-close-button',
    /**
     * Class name of the action button element
     */
    action: 'p-confirmdialog-action-button'
} as const;

/**
 * Type representing the CSS class names used in the ConfirmDialog component.
 */
export type ConfirmDialogClassNamesType = (typeof ConfirmDialogClassNames)[keyof typeof ConfirmDialogClassNames];
