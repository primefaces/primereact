import type { withHeadlessOptions } from '@primereact/types/core';
import { useHeadless } from './useHeadless';

/**
 * The withHeadless HOC.
 *
 * @template S - The return type of the setup callback or options.
 * @template D - The type of the default properties.
 *
 * @param {withHeadlessOptions<S, D>} options - The options.
 * @param {withHeadlessSetup<S>} [options.setup] - The setup callback function or options.
 * @param {D} [options.defaultProps] - The default properties.
 * @returns The Headless instance.
 */
export const withHeadless = <IProps, DProps, RData extends Record<PropertyKey, unknown>>({ name, defaultProps, setup }: withHeadlessOptions<IProps, DProps, RData>) => {
    return (inProps?: IProps) => {
        return useHeadless(name, { inProps, defaultProps, setup });
    };
};
