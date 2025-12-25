import { withComponent as withComponentInCore } from '@primereact/core/component';
import { styles as baseStyles } from '@primereact/styles/base';
import type { withComponentOptions } from '@primereact/types/core';
import type { StylesOptions } from '@primereact/types/styles';

export const withComponent = <IProps, DProps, Exposes extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Styles = StylesOptions, CData = Record<string, unknown>>({
    name = 'UnknownComponent',
    defaultProps,
    styles = {
        ...baseStyles,
        name: 'global'
    } as Styles,
    components,
    setup,
    render
}: withComponentOptions<IProps, DProps, Exposes, Styles, CData>) => {
    return withComponentInCore<IProps, DProps, Exposes, Styles, CData>({
        name,
        defaultProps,
        styles,
        components,
        setup,
        render
    });
};
