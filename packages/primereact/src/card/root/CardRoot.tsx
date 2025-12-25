'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCard } from '@primereact/headless/card';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CardProvider } from '../Card.context';
import { defaultRootProps } from './CardRoot.props';

export const CardRoot = withComponent({
    name: 'CardRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const card = useCard(instance.inProps);

        return card;
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
            <CardProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CardProvider>
        );
    }
});
