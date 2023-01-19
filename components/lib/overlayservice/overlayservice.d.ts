/**
 *
 * @todo Write the documentation.
 *
 * @todo Write the documentation.
 *
 * @module speeddial
 *
 */
import React from 'react';

/**
 * Custom tab open event.
 * @see {@link @todo Write the documentation.}
 * @event
 */
interface OverlayServiceEvent {
    /**
     * Original event that triggered the overlay.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Target element that the overlay is bound to.
     */
    target: HTMLElement;
}

/**
 * @group Misc
 */
export interface OverlayServiceOptions {
    /**
     * Add event listener for overlay click.
     * @param {"overlay-click"} action - Custom listener.
     * @param {*} fn - Custom listener.
     */
    on(action: 'overlay-click', fn: any): void;
    /**
     * Trigger overlay click event.
     * @param {"overlay-click"} action - Custom listener.
     * @param {*} params - Custom listener.
     */
    emit(action: 'overlay-click', params?: OverlayServiceEvent): void;
    /**
     * Remove event listener for overlay click.
     * @param {"overlay-click"} action - Custom listener.
     * @param {*} fn - Custom listener.
     */
    off(action: 'overlay-click', fn: any): void;
}

/**
 * @todo Write the documentation.
 */
export declare const OverlayService: OverlayServiceOptions;
