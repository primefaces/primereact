import * as React from 'react';

/**
 * Custom remove event.
 */
interface useChipRemoveEvent {
    /**
     * Browser event
     */
    originalEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

/**
 * Props for the useChip hook.
 */
export interface useChipProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useChip';
    /**
     * Callback to invoke when a chip is removed.
     * @param {ChipRemoveEvent} event - Custom remove event
     * @return {boolean} - Return false to prevent hiding the chip after removal
     */
    onRemove?: (event: useChipRemoveEvent) => void;
}
