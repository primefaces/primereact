/**
 *
 * DataView displays data in grid or list layout with pagination and sorting features.
 *
 * [Live Demo](https://www.primereact.org/dataview/)
 *
 * @module dataview
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDataViewExposes, useDataViewProps, useDataViewState } from './useDataView.types';

/**
 * Defines passthrough(pt) options type in DataView component.
 */
export type DataViewPassThroughType<E> = PassThroughType<DataViewInstance, E>;

/**
 * Defines passthrough(pt) options of DataView component.
 */
export interface DataViewPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DataViewPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DataView component.
 */
export interface DataViewProps extends BaseComponentProps<DataViewInstance, useDataViewProps, DataViewPassThrough> {}

/**
 * Defines valid state in DataView component.
 * @extends useDataViewState
 */
export interface DataViewState extends useDataViewState {}

/**
 * Defines the methods and properties exposed by DataView component.
 * @extends useDataViewExposes
 */
export interface DataViewExposes extends useDataViewExposes {}

/**
 * Defines the CSS class names used in the DataView component.
 */
export const DataViewClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-dataview'
} as const;

/**
 * Type representing the CSS class names used in the DataView component.
 */
export type DataViewClassNamesType = (typeof DataViewClassNames)[keyof typeof DataViewClassNames];

/**
 * Instance of DataView component.
 */
export type DataViewInstance = ComponentInstance<DataViewProps, DataViewState, DataViewExposes>;
