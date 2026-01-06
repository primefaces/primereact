/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopup
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ConfirmPopup component.
 */
export const ConfirmPopupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-confirmpopup',
    /**
     * Class name of the content element
     */
    content: 'p-confirmpopup-content',
    /**
     * Class name of the icon element
     */
    icon: 'p-confirmpopup-icon',
    /**
     * Class name of the message element
     */
    message: 'p-confirmpopup-message',
    /**
     * Class name of the footer element
     */
    footer: 'p-confirmpopup-footer',
    /**
     * Class name of the reject element
     */
    reject: 'p-confirmpopup-reject-button',
    /**
     * Class name of the accept element
     */
    accept: 'p-confirmpopup-accept-button'
} as const;

/**
 * Type representing the CSS class names used in the ConfirmPopup component.
 */
export type ConfirmPopupClassNamesType = (typeof ConfirmPopupClassNames)[keyof typeof ConfirmPopupClassNames];
