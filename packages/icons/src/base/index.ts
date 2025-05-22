import { defaultProps, styles, withIcon } from '@primereact/core/icon';
import type { withBaseIconOptions } from '@primereact/types/core';
import { mergeProps } from '@primeuix/utils';

export const withBaseIcon = <IProps, Exposes extends Record<PropertyKey, unknown>>({ name, render }: withBaseIconOptions<IProps, Exposes, typeof styles>) => {
    return withIcon({
        name,
        styles,
        defaultProps,
        render(instance) {
            const { id, ptmi, pti, cx, sx } = instance;

            const rootProps = mergeProps(
                {
                    id,
                    style: sx('root'),
                    className: cx('root')
                },
                pti(),
                ptmi('root')
            );

            return render?.({ rootProps });
        }
    });
};
