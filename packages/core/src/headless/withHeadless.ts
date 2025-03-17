import type { HeadlessInstance, WithHeadlessCallback } from '@primereact/types/core';
import { useHeadless } from './useHeadless';

export const withHeadless = <D, S>({ setup, defaultProps }: { setup: WithHeadlessCallback<unknown, D, S>; defaultProps?: D }) => {
    return <P extends Record<string, unknown>>(inProps?: P): HeadlessInstance & S => {
        return useHeadless(inProps, defaultProps, setup) as HeadlessInstance & S;
    };
};
