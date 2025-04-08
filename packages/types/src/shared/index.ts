import type { GlobalComponentProps } from '@primereact/types/core';
import * as React from 'react';

/**
 * Defines the common props of the PrimeReact components.
 *
 * @template H - The type of the component's headless props.
 */
export declare type CommonComponentProps<H> = Omit<H, '__TYPE'> & GlobalComponentProps;

/**
 * Defines the base props of the components.
 *
 * @template H - The type of the component's headless props.
 * @template T - The tag of the component's HTML element.
 * @template O - The omit props of the component.
 */
export declare type BaseComponentProps<H, T extends keyof React.JSX.IntrinsicElements, O extends string[] = []> = CommonComponentProps<H> &
    Omit<T extends keyof React.JSX.IntrinsicElements ? React.JSX.IntrinsicElements[T] : never, keyof CommonComponentProps<H> | O[number]>;
