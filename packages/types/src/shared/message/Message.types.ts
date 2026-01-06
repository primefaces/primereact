/**
 *
 * Message component is used to display a message to the user.
 *
 * [Live Demo](https://www.primereact.org/message/)
 *
 * @module message
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Message component.
 */
export const MessageClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-message',
    /**
     * Class name of the content element
     */
    content: 'p-message-content',
    /**
     * Class name of the icon element
     */
    icon: 'p-message-icon',
    /**
     * Class name of the text element
     */
    text: 'p-message-text',
    /**
     * Class name of the close button element
     */
    closeButton: 'p-message-close-button',
    /**
     * Class name of the close icon element
     */
    closeIcon: 'p-message-close-icon'
} as const;

/**
 * Type representing the CSS class names used in the Message component.
 */
export type MessageClassNamesType = (typeof MessageClassNames)[keyof typeof MessageClassNames];
