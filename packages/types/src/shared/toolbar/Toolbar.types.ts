import { BaseComponentProps } from '..';
import { useToolbarProps } from './useToolbar.types';

/**
 * Toolbar component props.
 */
export interface ToolbarProps extends BaseComponentProps<useToolbarProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Toolbar';
}
