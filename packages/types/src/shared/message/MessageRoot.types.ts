/**
 *
 * Message component is used to display a message to the user.
 *
 * [Live Demo](https://www.primereact.org/message/)
 *
 * @module messageroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useMessageExposes, useMessageProps, useMessageState } from './useMessage.types';

/**
 * Defines passthrough(pt) options type in Message component.
 */
export type MessageRootPassThroughType<E> = PassThroughType<MessageRootInstance, E>;

/**
 * Defines passthrough(pt) options of Message component.
 */
export interface MessageRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MessageRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Message component.
 */
export interface MessageRootProps extends BaseComponentProps<MessageRootInstance, useMessageProps, MessageRootPassThrough> {
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
export interface MessageRootState extends useMessageState {}

/**
 * Defines the methods and properties exposed by Message component.
 * @extends useMessageExposes
 */
export interface MessageRootExposes extends useMessageExposes {}

/**
 * Instance of Message component.
 */
export type MessageRootInstance = ComponentInstance<MessageRootProps, MessageRootState, MessageRootExposes>;
