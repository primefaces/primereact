import { BaseComponentProps } from '..';
import { useDividerProps } from './useDivider.types';

/**
 * Divider component props.
 */
export interface DividerProps extends BaseComponentProps<useDividerProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Divider';
}
