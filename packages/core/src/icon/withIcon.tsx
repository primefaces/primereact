import { withComponent } from '@primereact/core/component';
import type { BaseSetup, withComponentOptions } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { useIcon } from './useIcon';

export const withIcon = <IProps, DProps, Exposes extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, CData = Record<string, unknown>>({
    name,
    defaultProps,
    styles,
    components,
    setup,
    render
}: withComponentOptions<IProps, DProps, Exposes, CData>) => {
    return withComponent<IProps, DProps, Exposes, CData>({
        name: `${name ?? 'Unknown'}Icon`,
        defaultProps,
        styles,
        components,
        setup(instance) {
            const icon = useIcon(instance?.inProps);
            const computedSetup = resolve(setup as BaseSetup<typeof instance.props, IProps, Exposes>, instance) as Exposes;

            return React.useMemo(
                () => ({
                    ...icon,
                    ...computedSetup
                }),
                [icon, computedSetup]
            );
        },
        render
    });
};
