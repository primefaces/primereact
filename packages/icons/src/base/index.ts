import { defaultIconProps, styles, withIcon } from '@primereact/core/icon';
import type { withBaseIconOptions } from '@primereact/types/core';
import { cn, mergeProps, resolve } from '@primeuix/utils';

export const withBaseIcon = ({ name, render }: withBaseIconOptions) => {
    return withIcon({
        name,
        styles,
        defaultProps: defaultIconProps,
        render(instance) {
            const { id, ptmi, pti, cx, sx, props } = instance;

            const rootProps = mergeProps(
                {
                    id,
                    style: { ...sx('root'), ...resolve(props.style, instance) },
                    className: cn(cx('root'), resolve(props.className, instance))
                },
                pti?.(),
                ptmi('root')
            );

            return render?.({ rootProps });
        }
    });
};
