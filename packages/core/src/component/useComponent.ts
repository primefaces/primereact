import { ComponentInstance } from './Component.types';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = (inInstance: ComponentInstance, ref?: any, styles?: any, callback?: any): ComponentInstance => {
    const ptx = useComponentPT(inInstance);
    const stx = useComponentStyle(inInstance, styles);
    const instance = {
        ...inInstance,
        ...ptx,
        ...stx
    };

    return callback?.(instance, ref);
};
