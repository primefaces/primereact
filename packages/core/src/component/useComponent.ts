import type { ComponentInstance, WithComponentCallback } from '@primereact/types/core';
import type { StylesOptions } from '@primereact/types/styles';
import * as React from 'react';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = (inInstance: ComponentInstance, ref?: React.Ref<unknown>, styles?: StylesOptions, callback?: WithComponentCallback): React.JSX.Element | undefined => {
    const ptx = useComponentPT(inInstance);
    const stx = useComponentStyle(inInstance, styles);
    const instance = React.useMemo(
        () => ({
            ...inInstance,
            ...ptx,
            ...stx
        }),
        [inInstance, ptx, stx]
    );

    return callback?.(instance, ref);
};
