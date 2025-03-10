import * as React from 'react';

export const useHeadless = (inInstance: any, ref?: any, callback?: any) => {
    const instance = {
        ...inInstance,
        ...callback?.(inInstance)
    };

    React.useImperativeHandle(ref, () => instance as any);

    return instance;
};
