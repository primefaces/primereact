'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCardContext } from '../Card.context';
import { defaultContentProps } from './CardContent.props';

export const CardContent = withComponent({
    name: 'CardContent',
    defaultProps: defaultContentProps,
    setup() {
        const card = useCardContext();

        return { card };
    },
    render(instance) {
        const { props, ptmi, card } = instance;

        const rootProps = mergeProps(
            {
                className: card?.cx('content')
            },
            card?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
