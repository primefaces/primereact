'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCardContext } from '../Card.context';
import { defaultSubtitleProps } from './CardSubtitle.props';

export const CardSubtitle = withComponent({
    name: 'CardSubtitle',
    defaultProps: defaultSubtitleProps,
    setup() {
        const card = useCardContext();

        return { card };
    },
    render(instance) {
        const { props, ptmi, card } = instance;

        const rootProps = mergeProps(
            {
                className: card?.cx('subtitle')
            },
            card?.ptm('subtitle'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
