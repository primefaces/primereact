/**
 *
 * SplitterPanel is a component that displays a panel.
 *
 * [Live Demo](https://www.primereact.org/splitter/)
 *
 * @module splitterpanel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SplitterInstance } from './Splitter.types';

/**
 * Defines passthrough(pt) options type in SplitterPanel component.
 */
export type SplitterPanelPassThroughType<E> = PassThroughType<SplitterPanelInstance, E>;

/**
 * Defines passthrough(pt) options of SplitterPanel component.
 */
export interface SplitterPanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitterPanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SplitterPanel component.
 */
export interface SplitterPanelProps extends BaseComponentProps<SplitterPanelInstance> {
    /**
     * Size of the element relative to 100%.
     */
    size?: number | undefined;
    /**
     * Minimum size of the element relative to 100%.
     */
    minSize?: number | undefined;
}

/**
 * Defines valid state in SplitterPanel component.
 */
export interface SplitterPanelState {}

/**
 * Defines the methods and properties exposed by SplitterPanel component.
 */
export interface SplitterPanelExposes {
    /**
     * The Splitter component instance.
     */
    splitter: SplitterInstance | undefined | null;
}

/**
 * Instance of SplitterPanel component.
 */
export type SplitterPanelInstance = ComponentInstance<SplitterPanelProps, SplitterPanelState, SplitterPanelExposes, SplitterPanelPassThrough>;
