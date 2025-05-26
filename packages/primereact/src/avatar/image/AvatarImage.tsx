'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useAvatarContext } from '../Avatar.context';
import { defaultImageProps } from './AvatarImage.props';

export const AvatarImage = withComponent({
    name: 'AvatarImage',
    defaultProps: defaultImageProps,
    setup(instance) {
        const { props } = instance;
        const avatar = useAvatarContext();

        React.useLayoutEffect(() => {
            avatar?.handleImageLoad?.(props.src);

            return () => {
                avatar?.handleImageUnload?.();
            };
        }, [props.src]);

        return { avatar };
    },
    render(instance) {
        const { props, ptmi, avatar } = instance;

        const rootProps = mergeProps(
            {
                src: props.src,
                className: avatar?.cx('image')
            },
            avatar?.ptm('image'),
            ptmi('root')
        );

        return <Component pIf={avatar?.state.load} instance={instance} as="img" attrs={rootProps} children={props.children} />;
    }
});
