import {DomHandler} from '../utils/Utils';
import {useLayoutEffect} from 'react';

/**
 * Priorities of different components (bigger number handled first)
 */
export const ESC_KEY_HANDLING_PRIORITIES = {
    SIDEBAR: 100,
    DIALOG: 200
}

/**
 * Object, that manages global escape key handling logic
 */
const globalEscKeyHandlingLogic = {
    /**
     * Mapping from ESC_KEY_HANDLING_PRIORITY to array of related listeners, grouped by priority
     * @example
     * Map<{
     *     [ESC_KEY_HANDLING_PRIORITIES.SIDEBAR]: Map<{
     *         1: () => {...},
     *         2: () => {...}
     *     }>,
     *     [ESC_KEY_HANDLING_PRIORITIES.DIALOG]: Map<{
     *         1: () => {...},
     *         2: () => {...}
     *     }>
     * }>;
     */
    escKeyListeners: new Map(),

    onGlobalKeyDown(event) {
        const escKeyListeners = globalEscKeyHandlingLogic.escKeyListeners;
        const maxPrimaryPriority = Math.max(...escKeyListeners.keys());

        const theMostImportantEscHandlersSet = escKeyListeners.get(maxPrimaryPriority);

        const maxSecondaryPriority = Math.max(...theMostImportantEscHandlersSet.keys())
        const theMostImportantEscHandler = theMostImportantEscHandlersSet.get(maxSecondaryPriority);

        theMostImportantEscHandler(event);
    },

    refreshGlobalKeyDownListener() {
        const document = DomHandler.getTargetElement('document');

        if (this.escKeyListeners.size > 0) {
            document.addEventListener('keydown', this.onGlobalKeyDown)
        }
        else {
            document.removeEventListener('keydown', this.onGlobalKeyDown)
        }
    },

    addListener(callback, [primaryPriority, secondaryPriority]) {
        const escKeyListeners = this.escKeyListeners

        if (!escKeyListeners.has(primaryPriority)) {
            escKeyListeners.set(primaryPriority, new Map())
        }

        const primaryPriorityListeners = escKeyListeners.get(primaryPriority);

        // To prevent unexpected override of callback:
        if (primaryPriorityListeners.has(secondaryPriority)) {
            throw new Error(`Unexpected: global esc key listener with priority [${primaryPriority}, ${secondaryPriority}] already exists.`)
        }

        primaryPriorityListeners.set(secondaryPriority, callback);
        this.refreshGlobalKeyDownListener()

        return () => {
            primaryPriorityListeners.delete(secondaryPriority);

            if (primaryPriorityListeners.size === 0) {
                escKeyListeners.delete(primaryPriority);
            }

            this.refreshGlobalKeyDownListener()
        }
    }
}

export const useGlobalOnEscapeKey = ({callback, condition, priority}) => {
    useLayoutEffect(() => {
        if (!condition) return

        return globalEscKeyHandlingLogic.addListener(callback, priority)
    }, [condition, callback, priority]);
}
