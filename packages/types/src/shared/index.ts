import type { ComponentInstance, GlobalComponentProps, InferComponentInstance } from '@primereact/types/core';
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
export declare type CommonComponentProps<I extends ComponentInstance, H, T extends React.ElementType> = H & GlobalComponentProps<I, T>;

/**
 * Defines the base properties of the components.
 *
 * @template H - The properties of the headless component.
 * @template T - The element type of the component.
 * @template O - The properties to omit from the component.
 */
export declare type BaseComponentProps<I extends ComponentInstance = ComponentInstance, H = unknown, T extends React.ElementType = React.ElementType, O extends string[] = []> = CommonComponentProps<I, H, T> &
    Omit<ExtractProps<T>, keyof CommonComponentProps<I, H, T> | O[number]>;

export type PassThroughType<I, Attrs = React.HTMLAttributes<HTMLElement>> = Attrs | ((options: PassThroughMethodOptions<I>) => Attrs | string) | string | null | undefined;

/**
 * Defines passthrough(pt) options for method type.
 */
export type PassThroughMethodOptions<I> = InferComponentInstance<I> & {
    /**
     * Defines instance.
     */
    instance: I;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: Record<PropertyKey, unknown> | undefined;
};
