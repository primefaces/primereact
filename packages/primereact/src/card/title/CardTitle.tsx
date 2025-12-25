'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCardContext } from '../Card.context';
import { defaultTitleProps } from './CardTitle.props';

export const CardTitle = withComponent({
    name: 'CardTitle',
    defaultProps: defaultTitleProps,
    setup() {
        const card = useCardContext();

        return { card };
    },
    render(instance) {
        const { props, ptmi, card } = instance;

        const rootProps = mergeProps(
            {
                className: card?.cx('title')
            },
            card?.ptm('title'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
