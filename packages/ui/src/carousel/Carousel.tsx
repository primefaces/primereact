'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCarousel } from '@primereact/headless/carousel';
import { styles } from '@primereact/styles/carousel';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CarouselProvider } from './Carousel.context';
import { defaultProps } from './Carousel.props';
import { CarouselContent } from './content';
import { CarouselIndicator } from './indicator';
import { CarouselIndicators } from './indicators';
import { CarouselItem } from './item';
import { CarouselNext } from './next';
import { CarouselPrev } from './prev';

export const Carousel = withComponent({
    name: 'Carousel',
    defaultProps,
    styles,
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
                'data-swiping': state.swiping
            },
            ptmi('root')
        );

        return (
            <CarouselProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CarouselProvider>
        );
    },
    components: {
        Content: CarouselContent,
        Item: CarouselItem,
        Next: CarouselNext,
        Prev: CarouselPrev,
        Indicators: CarouselIndicators,
        Indicator: CarouselIndicator
    }
});
