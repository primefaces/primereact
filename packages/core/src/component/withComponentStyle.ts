import { ComponentInstance } from './Component.types';
import { useComponentStyle } from './useComponentStyle';
import { withComponent } from './withComponent';

export const withComponentStyle = (callback: any, defaultProps: any, styles: any) => {
    return withComponent((instance: ComponentInstance) => {
        return useComponentStyle(instance, styles, callback);
    }, defaultProps);
};
