/**
 *
 * MessageContent is a component that displays a message.
 *
 * [Live Demo](https://www.primereact.org/message/)
 *
 * @module messagecontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MessageInstance } from './Message.types';

/**
 * Defines passthrough(pt) options type in MessageContent component.
 */
export type MessageContentPassThroughType<E> = PassThroughType<MessageContentInstance, E>;

/**
 * Defines passthrough(pt) options of MessageContent component.
 */
export interface MessageContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MessageContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MessageContent component.
 */
export interface MessageContentProps extends BaseComponentProps<MessageContentInstance, unknown, MessageContentPassThrough> {}

/**
 * Defines valid state in MessageContent component.
 */
export interface MessageContentState {}

/**
 * Defines the methods and properties exposed by MessageContent component.
 */
export interface MessageContentExposes {
    /**
     * The Message component instance.
     */
    message: MessageInstance | undefined | null;
}

/**
 * Instance of MessageContent component.
 */
export type MessageContentInstance = ComponentInstance<MessageContentProps, MessageContentState, MessageContentExposes>;
