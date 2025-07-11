/**
 *
 * MessageText is a component that displays a message.
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
 * Defines passthrough(pt) options type in MessageText component.
 */
export type MessageTextPassThroughType<E> = PassThroughType<MessageTextInstance, E>;

/**
 * Defines passthrough(pt) options of MessageText component.
 */
export interface MessageTextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MessageTextPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MessageText component.
 */
export interface MessageTextProps extends BaseComponentProps<MessageTextInstance> {}

/**
 * Defines valid state in MessageText component.
 */
export interface MessageTextState {}

/**
 * Defines the methods and properties exposed by MessageContent component.
 */
export interface MessageTextExposes {
    /**
     * The Message component instance.
     */
    message: MessageInstance | undefined | null;
}

/**
 * Instance of MessageContent component.
 */
export type MessageTextInstance = ComponentInstance<MessageTextProps, MessageTextState, MessageTextExposes, MessageTextPassThrough>;
