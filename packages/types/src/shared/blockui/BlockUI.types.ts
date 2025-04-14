import { BaseComponentProps } from '..';
import { useBlockUIProps } from './useBlockUI.types';

/**
 * BlockUI component props.
 */
export interface BlockUIProps extends BaseComponentProps<useBlockUIProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'BlockUI';
}
