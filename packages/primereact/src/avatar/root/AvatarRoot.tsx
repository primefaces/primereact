'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useAvatar } from '@primereact/headless/avatar';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { AvatarProvider } from '../Avatar.context';
import { defaultRootProps } from './AvatarRoot.props';

export const AvatarRoot = withComponent({
    name: 'AvatarRoot',
    defaultProps: defaultRootProps,
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
    }
});
