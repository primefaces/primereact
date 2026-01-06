/**
 * The useMessage manages the state and functionality of a message component.
 *
 * [Live Demo](https://www.primereact.org/message/)
 *
 * @module useMessage
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useMessage.
 */
export interface useMessageProps {
    /**
     * Delay in milliseconds to close the message automatically.
     * @default null
     */
    life?: number | null;
    /**
     * Callback to invoke when the message is closed.
     */
    onClose?: () => void;
}

/**
 * Defines valid state in useMessage.
 */
export interface useMessageState {
    /**
     * Whether the message is currently visible.
     */
    visible: boolean;
}

/**
 * Defines the methods and properties exposed by useMessage.
 */
export interface useMessageExposes {
    /**
     * Current state of the message.
     */
    state: useMessageState;
    /**
     * Manually close the message.
     */
    handleClose: () => void;
}

/**
 * Instance of useMessage headless.
 */
export type useMessageInstance = HeadlessInstance<useMessageProps, useMessageState, useMessageExposes>;
