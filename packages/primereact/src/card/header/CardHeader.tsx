'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCardContext } from '../Card.context';
import { defaultHeaderProps } from './CardHeader.props';

export const CardHeader = withComponent({
    name: 'CardHeader',
    defaultProps: defaultHeaderProps,
    setup() {
        const card = useCardContext();

        return { card };
    },
    render(instance) {
        const { props, ptmi, card } = instance;

        const rootProps = mergeProps(
            {
                className: card?.cx('header')
            },
            card?.ptm('header'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
