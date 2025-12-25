'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCardContext } from '../Card.context';
import { defaultCaptionProps } from './CardCaption.props';

export const CardCaption = withComponent({
    name: 'CardCaption',
    defaultProps: defaultCaptionProps,
    setup() {
        const card = useCardContext();

        return { card };
    },
    render(instance) {
        const { props, ptmi, card } = instance;

        const rootProps = mergeProps(
            {
                className: card?.cx('caption')
            },
            card?.ptm('caption'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
