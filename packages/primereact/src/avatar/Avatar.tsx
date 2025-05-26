'use client';
import { Component } from '@primereact/core/component';
import { useAvatar } from '@primereact/headless/avatar';
import { styles } from '@primereact/styles/avatar';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { AvatarProvider } from './Avatar.context';
import { defaultProps } from './Avatar.props';
import { AvatarFallback } from './fallback';
import { AvatarGroup } from './group';
import { AvatarImage } from './image';

export const Avatar = withComponent({
    name: 'Avatar',
    defaultProps,
    styles,
    setup(instance) {
        const avatar = useAvatar(instance.inProps);

        return avatar;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <AvatarProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </AvatarProvider>
        );
    },
    components: {
        Group: AvatarGroup,
        Image: AvatarImage,
        Fallback: AvatarFallback
    }
});
