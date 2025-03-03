import { combinedRefs } from '@primereact/core/utils';
import * as React from 'react';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = (inInstance, inRef, callback) => {
    const ref = React.useRef(inRef);
    const ptx = useComponentPT(inInstance, ref);
    const stx = useComponentStyle(inInstance, ref);
    const common = {
        ...inInstance,
        ...ptx,
        ...stx
    };

    const instance = { ...common, ...callback?.(common) };

    React.useImperativeHandle(ref, () => instance);

    React.useEffect(() => {
        combinedRefs(ref, inRef);
    }, [ref, inRef]);

    return instance;
};
