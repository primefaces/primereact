import { withIcon } from '@primereact/core/icon';
import { styles } from '@primereact/styles/icon';
import { IconProps } from '@primereact/types/core';
import { mergeProps } from '@primeuix/utils';

export const withBaseIcon = (callback: any) => {
    return withIcon({
        render: ({ id, ptmi, pti, cx }) => {
            const rootProps = mergeProps(
                {
                    id,
                    className: cx('root')
                },
                pti(),
                ptmi('root')
            );

            return callback?.({ rootProps });
        },
        defaultProps: {} as IconProps,
        styles
    });
};
