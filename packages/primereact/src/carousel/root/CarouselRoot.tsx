'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCarousel } from '@primereact/headless/carousel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CarouselProvider } from '../Carousel.context';
import { defaultRootProps } from './CarouselRoot.props';

export const CarouselRoot = withComponent({
    name: 'Carousel.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const carousel = useCarousel(instance.inProps);

        return carousel;
    },
    render(instance) {
        const { id, props, state, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                'data-orientation': props.orientation,
                'data-align': props.align,
                'data-page': state.page,
                ...(state.swiping ? { 'data-swiping': '' } : {}),
                ...(props.autoSize ? { 'data-autosize': '' } : {})
            },
            ptmi('root')
        );

        return (
            <CarouselProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CarouselProvider>
        );
    }
});
