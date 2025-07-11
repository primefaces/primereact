/**
 *
 * MessageClose is a component that displays a close button.
 *
 * [Live Demo](https://www.primereact.org/message/)
 *
 * @module messageclose
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MessageInstance } from './Message.types';

/**
 * Defines passthrough(pt) options type in MessageClose component.
 */
export type MessageClosePassThroughType<E> = PassThroughType<MessageCloseInstance, E>;

/**
 * Defines passthrough(pt) options of MessageClose component.
 */
export interface MessageClosePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MessageClosePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in MessageClose component.
 */
export interface MessageCloseProps extends BaseComponentProps<MessageCloseInstance> {}

/**
 * Defines valid state in MessageClose component.
 */
export interface MessageCloseState {}

/**
 * Defines the methods and properties exposed by MessageClose component.
 */
export interface MessageCloseExposes {
    /**
     * The Message component instance.
     */
    message: MessageInstance | undefined | null;
}

/**
 * Instance of MessageClose component.
 */
export type MessageCloseInstance = ComponentInstance<MessageCloseProps, MessageCloseState, MessageCloseExposes, MessageClosePassThrough>;
