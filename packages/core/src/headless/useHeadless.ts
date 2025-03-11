import type { HeadlessInstance, WithHeadlessCallback } from '@primereact/types/core';
import * as React from 'react';

export const useHeadless = (inInstance: HeadlessInstance, ref?: React.Ref<unknown>, callback?: WithHeadlessCallback): HeadlessInstance => {
    const instance = React.useMemo(
        () => ({
            ...inInstance,
            ...callback?.(inInstance)
        }),
        [inInstance, callback]
    );

    React.useImperativeHandle(ref, () => instance);

    return instance;
};
