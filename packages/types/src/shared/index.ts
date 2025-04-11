import type { GlobalComponentProps } from '@primereact/types/core';
import * as React from 'react';

/**
 * Extracts the properties of a given React element type.
 *
 * @template T - The React element type to extract properties from.
 */
export type ExtractProps<T extends React.ElementType> = T extends keyof React.JSX.IntrinsicElements ? React.JSX.IntrinsicElements[T] : T extends React.ComponentType<infer P> ? P : never;

/**
 * Defines the common properties of the PrimeReact components.
 *
 * @template H - The properties of the headless component.
 * @template T - The element type of the component.
 */
export declare type CommonComponentProps<H, T extends React.ElementType> = H & GlobalComponentProps<T>;

/**
 * Defines the base properties of the components.
 *
 * @template H - The properties of the headless component.
 * @template T - The element type of the component.
 * @template O - The properties to omit from the component.
 */
export declare type BaseComponentProps<H, T extends React.ElementType = React.ElementType, O extends string[] = []> = CommonComponentProps<H, T> & Omit<ExtractProps<T>, keyof CommonComponentProps<H, T> | O[number]>;
