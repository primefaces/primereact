import type { HeadlessInstance, WithHeadlessCallback } from '@primereact/types/core';
import * as React from 'react';

export const useHeadless = (inInstance: HeadlessInstance, ref?: React.Ref<unknown>, callback?: WithHeadlessCallback): HeadlessInstance => {
    const instance = {
        ...inInstance,
        ...callback?.(inInstance)
    };

    React.useImperativeHandle(ref, () => instance, [instance]);

    return instance;
};
