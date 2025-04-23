import { withIcon } from '@primereact/core/icon';
import { styles } from '@primereact/styles/icon';
import { IconProps, withBaseIconOptions } from '@primereact/types/core';
import { mergeProps } from '@primeuix/utils';

export const withBaseIcon = <IProps, RData extends Record<PropertyKey, unknown>>({ name, render }: withBaseIconOptions<IProps, RData>) => {
    return withIcon({
        name,
        render: ({ id, ptmi, pti, cx }) => {
            const rootProps = mergeProps(
                {
                    id,
                    className: cx('root')
                },
                pti(),
                ptmi('root')
            );

            return render?.({ rootProps });
        },
        defaultProps: {} as IconProps,
        styles
    });
};
