/**
 *
 * MessageIcon is a component that displays an icon.
 *
 * [Live Demo](https://www.primereact.org/message/)
 *
 * @module messageicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MessageInstance } from './Message.types';

/**
 * Defines passthrough(pt) options type in MessageIcon component.
 */
export type MessageIconPassThroughType<E> = PassThroughType<MessageIconInstance, E>;

/**
 * Defines passthrough(pt) options of MessageIcon component.
 */
export interface MessageIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MessageIconPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MessageIcon component.
 */
export interface MessageIconProps extends BaseComponentProps<MessageIconInstance, unknown, MessageIconPassThrough> {}

/**
 * Defines valid state in MessageIcon component.
 */
export interface MessageIconState {}

/**
 * Defines the methods and properties exposed by MessageIcon component.
 */
export interface MessageIconExposes {
    /**
     * The Message component instance.
     */
    message: MessageInstance | undefined | null;
}

/**
 * Instance of MessageIcon component.
 */
export type MessageIconInstance = ComponentInstance<MessageIconProps, MessageIconState, MessageIconExposes>;
