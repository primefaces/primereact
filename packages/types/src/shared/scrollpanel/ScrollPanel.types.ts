import { BaseComponentProps } from '..';
import { useScrollPanelProps } from './useScrollPanel.types';

/**
 * ScrollPanel component props.
 */
export interface ScrollPanelProps extends BaseComponentProps<useScrollPanelProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'ScrollPanel';
}
