import { BaseComponentProps } from '..';
import { useChipProps } from './useChip.types';

/**
 * Chip component props.
 */
export interface ChipProps extends BaseComponentProps<useChipProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Chip';
}
