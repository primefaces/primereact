/**
 *
 * The useAvatar manages the state and functionality of a Avatar component.
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 *
 * @module useavatar
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useAvatar.
 */
export interface useAvatarProps {
    /**
     * The delay duration of the avatar.
     */
    delayDuration?: number | undefined;
}

/**
 * Defines valid state in useAvatar.
 */
export interface useAvatarState {
    /**
     * Whether the avatar's image is loading or not.
     */
    load: boolean | undefined;
}

/**
 * Defines the methods and properties exposed by useAvatar.
 */
export interface useAvatarExposes {
    /**
     * The state of the useAvatar.
     */
    state: useAvatarState;
    /**
     * The method to handle image load.
     * @param src The source of the image.
     * @returns void
     */
    handleImageLoad: (src?: string) => void;
    /**
     * The method to handle image unload.
     * @returns void
     */
    handleImageUnload: () => void;
}

/**
 * Instance of useAvatar headless.
 */
export type useAvatarInstance = HeadlessInstance<useAvatarProps, useAvatarState, useAvatarExposes>;
