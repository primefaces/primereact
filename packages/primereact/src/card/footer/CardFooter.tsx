'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCardContext } from '../Card.context';
import { defaultFooterProps } from './CardFooter.props';

export const CardFooter = withComponent({
    name: 'CardFooter',
    defaultProps: defaultFooterProps,
    setup() {
        const card = useCardContext();

        return { card };
    },
    render(instance) {
        const { props, ptmi, card } = instance;

        const rootProps = mergeProps(
            {
                className: card?.cx('footer')
            },
            card?.ptm('footer'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
