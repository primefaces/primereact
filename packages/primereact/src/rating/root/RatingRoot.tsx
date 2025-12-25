'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useRating } from '@primereact/headless/rating';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { RatingProvider } from '../Rating.context';
import { defaultRootProps } from './RatingRoot.props';

export const RatingRoot = withComponent({
    name: 'RatingRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const rating = useRating(instance.inProps);

        return rating;
    },
    render(instance) {
        const { props, ptmi, cx, onOptionHover } = instance;

        const rootProps = mergeProps(
            {
                className: cx('root'),
                onPointerLeave: (e: React.PointerEvent<HTMLDivElement>) => onOptionHover(e, undefined)
            },
            ptmi('root')
        );

        return (
            <RatingProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </RatingProvider>
        );
    }
});
