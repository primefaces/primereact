/**
 *
 * The useDataView manages the state and functionality of a dataview component.
 *
 * [Live Demo](https://www.primereact.org/dataview/)
 *
 * @module usedataview
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines valid properties in useDataView.
 */
export interface useDataViewProps {}

/**
 * Defines valid state in useDataView.
 */
export interface useDataViewState {}

/**
 * Defines the methods and properties exposed by useDataView.
 */
export interface useDataViewExposes {
    /**
     * Sorts the data based on the specified field and order.
     * @param value The data array to sort.
     * @param sortField The field name to sort by.
     * @param sortOrder The sort order (1 for ascending, -1 for descending).
     * @returns The sorted data array or null if no data is provided.
     */
    sort: (value: unknown[] | null, sortField: string, sortOrder: number) => unknown[] | null;
}

/**
 * Instance of useDataView headless.
 */
export type useDataViewInstance = HeadlessInstance<useDataViewProps, useDataViewState, useDataViewExposes>;
