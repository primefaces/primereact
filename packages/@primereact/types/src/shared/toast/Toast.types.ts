/**
 *
 * Toast component is used to display messages.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toast
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Toast component.
 */
export const ToastClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toast p-component',
    /**
     * Class name of the icon element
     */
    icon: 'p-toast-icon',
    /**
     * Class name of the title element
     */
    title: 'p-toast-title',
    /**
     * Class name of the description element
     */
    description: 'p-toast-description',
    /**
     * Class name of the action element
     */
    action: 'p-toast-action',
    /**
     * Class name of the close element
     */
    close: 'p-toast-close',
    /**
     * Class name of the progress element
     */
    progress: 'p-toast-progress'
} as const;

/**
 * Type representing the CSS class names used in the Toast component.
 */
export type ToastClassNamesType = (typeof ToastClassNames)[keyof typeof ToastClassNames];
