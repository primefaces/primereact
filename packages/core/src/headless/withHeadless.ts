import type { HeadlessInstance, withHeadlessOptions } from '@primereact/types/core';
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
export const withHeadless = <S, D>({ name, setup, defaultProps }: withHeadlessOptions<S, D>) => {
    return <P>(inProps?: P): HeadlessInstance<P> & S => {
        return useHeadless(name, { inProps, defaultProps, setup }) as HeadlessInstance<P> & S;
    };
};
