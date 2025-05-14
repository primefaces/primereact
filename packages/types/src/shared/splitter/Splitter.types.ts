import { BaseComponentProps } from '..';
import { useSplitterProps } from './useSplitter.types';

/**
 * Splitter component props.
 */
export interface SplitterProps extends BaseComponentProps<useSplitterProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Splitter';
}
