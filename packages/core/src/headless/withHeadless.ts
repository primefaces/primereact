import type { HeadlessInstance, WithHeadlessCallback } from '@primereact/types/core';
import { useHeadless } from './useHeadless';

export const withHeadless = <D>({ setup, defaultProps }: { setup: WithHeadlessCallback<unknown, D>; defaultProps?: D }) => {
    return <P extends Record<string, unknown>>(inProps?: P): HeadlessInstance => {
        return useHeadless(inProps, defaultProps, setup);
    };
};
