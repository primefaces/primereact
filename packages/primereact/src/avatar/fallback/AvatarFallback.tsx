'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useAvatarContext } from '../Avatar.context';
import { defaultFallbackProps } from './AvatarFallback.props';

export const AvatarFallback = withComponent({
    name: 'AvatarFallback',
    defaultProps: defaultFallbackProps,
    setup() {
        const avatar = useAvatarContext();

        return { avatar };
    },
    render(instance) {
        const { props, ptmi, avatar } = instance;

        const rootProps = mergeProps(
            {
                className: avatar?.cx('fallback')
            },
            avatar?.ptm('fallback'),
            ptmi('root')
        );

        return <Component pIf={!avatar?.state.load} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
