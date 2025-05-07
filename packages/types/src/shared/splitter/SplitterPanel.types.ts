import { BaseComponentProps } from '..';

/**
 * SplitterPanel component props.
 */
export interface SplitterPanelProps extends BaseComponentProps<{ readonly __TYPE: 'SplitterPanel' }, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'SplitterPanel';
    /**
     * Size of the element relative to 100%.
     */
    size?: number | undefined;
    /**
     * Minimum size of the element relative to 100%.
     */
    minSize?: number | undefined;
}
