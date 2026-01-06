import type { withHeadlessOptions } from '@primereact/types/core';
import { useHeadless } from './useHeadless';

/**
 * Higher-order component for using headless components.
 *
 * @template IProps The input properties type for the headless component.
 * @template DProps The default properties type for the headless component.
 * @template Exposes The properties that the headless component exposes.
 *
 * @param options The options for the headless component.
 * @param options.name The name of the headless component.
 * @param options.defaultProps The default properties for the headless component.
 * @param options.setup The setup function for the headless component.
 * @returns A function that takes in props and returns the headless instance.
 */
export function withHeadless<IProps, DProps, Exposes extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>>({ name, defaultProps, setup }: withHeadlessOptions<IProps, DProps, Exposes>) {
    return (inProps?: IProps) => {
        return useHeadless(name, { inProps, defaultProps, setup });
    };
}
