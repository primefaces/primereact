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
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useMessageExposes, useMessageProps, useMessageState } from './useMessage.types';

/**
 * Defines passthrough(pt) options type in Message component.
 */
export type MessagePassThroughType<E> = PassThroughType<MessageInstance, E>;

/**
 * Defines passthrough(pt) options of Message component.
 */
export interface MessagePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MessagePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Message component.
 */
export interface MessageProps extends BaseComponentProps<MessageInstance, useMessageProps> {
    /**
     * Severity level of the message.
     * @default info
     */
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast' | null;
    /**
     * Specifies the variant of the component.
     * @default undefined
     */
    variant?: 'outlined' | 'simple' | null;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
}

/**
 * Defines valid state in Message component.
 * @extends useMessageState
 */
export interface MessageState extends useMessageState {}

/**
 * Defines the methods and properties exposed by Message component.
 * @extends useMessageExposes
 */
export interface MessageExposes extends useMessageExposes {}

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

/**
 * Instance of Message component.
 */
export type MessageInstance = ComponentInstance<MessageProps, MessageState, MessageExposes>;
